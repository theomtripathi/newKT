/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});



// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();

// exports.handleStripe = functions.https.onRequest(async (req, res) => {
//   res.send("Hello from Firebase!");
//   const event = req.body;


//   if (event.type === "checkout.session.completed") {
//     const session = event.data.object;

//     const userId = session.metadata.userId;
//     const quizId = session.metadata.quizId;

//     const db = admin.firestore();
//     const userRef = db.collection("users").doc(userId);

//     await userRef.update({
//       eligibleQuizzes: admin.firestore.FieldValue.arrayUnion(quizId),
//     });

//     res.status(200).send("Success");
//   } else {
//     res.status(400).send("Unhandled event");
//   }
// });



const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.handleStripe = functions.https.onRequest(
    {
    secrets: ["STRIPE_SECRET", "STRIPE_WEBHOOK_SECRET"], // Specify the required secrets
  },
  async (req, res) => {
    const stripe = require("stripe")(process.env.STRIPE_SECRET);
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET; // Use Stripe webhook secret
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      // Verify Stripe signature
      event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
      console.error("Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event

    // const event = req.body;

    try {
      if (event.type === "checkout.session.completed") {
        const session = event.data.object ;

        // Check if the payment is a one-time payment
        if (session.mode !== "payment") {
          console.log("Event is not for a one-time payment, ignoring.");
          return res.status(200).send("Not a one-time payment.");
        }

        console.log("Checkout session completed:", session);
        console.log("User ID:",event);

        //retrive customer id
        const customerId = session.customer;
        // retrive session id
        const sessionId = session.id;

        console.log(`Customer ID: ${customerId}`);
        console.log(`Session ID: ${sessionId}`);

        //search for user in firestore and session id in checkout sessions
        const db = admin.firestore();
        const userRef = db.collection("users");
        // in the user collection, search for the user with the customer id
        const userQuery = await userRef.where("stripeId", "==", customerId).get();
        console.log(`User Query: ${userQuery}`);
        // if the user is found, search the session id in the checkout sessions
        if (!userQuery.empty) {
          const user = userQuery.docs[0];
          const userId = user.id;
          console.log(`User ID: ${userId}`);
          const sessionRef = db.collection("users").doc(userId).collection("checkout_sessions");
          const sessionQuery = await sessionRef.where("sessionId", "==", sessionId).get();
          // if the session is found, grant access to the quiz
          if (!sessionQuery.empty) {
            const session = sessionQuery.docs[0];
            const quizId = session.data().quizId;
            console.log(`Quiz ID: ${quizId}`);
            console.log(`User ID: ${userId}`);
            await userRef.doc(userId).update({
              eligibleQuizzes: admin.firestore.FieldValue.arrayUnion(quizId),
            });
            console.log(`Access granted for quiz: ${quizId} to user: ${userId}`);
            res.status(200).send("Success");
          } else {
            console.error("Session not found in checkout sessions");
            return res.status(400).send("Session not found");
          }
        }




        // Retrieve quiz ID and user ID from metadata

        const userId = session.metadata?.userId;
        const quizId = session.metadata?.quizId;

        if (!userId || !quizId) {
          console.error("Missing userId or quizId in session metadata");
          return res.status(400).send("Invalid session metadata.");
        }

        // const db = admin.firestore();
        // const userRef = db.collection("users").doc(userId);

        // Grant access to the quiz
        await userRef.update({
          eligibleQuizzes: admin.firestore.FieldValue.arrayUnion(quizId),
        });

        console.log(`Access granted for quiz: ${quizId} to user: ${userId}`);
        res.status(200).send("Success");
      } else {
        console.log("Unhandled event type:", event.type);
        res.status(400).send("Unhandled event");
      }
    } catch (error) {
      console.error("Error handling webhook event:", error);
      res.status(500).send("Internal Server Error");
    }
  });
