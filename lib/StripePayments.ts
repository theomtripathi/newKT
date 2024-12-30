"use client";

import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import Stripe from "stripe";

export const getCheckoutUrl = async (
  app: FirebaseApp,
  priceId: string
): Promise<string> => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "users",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  return new Promise<string>((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() as {
        error?: { message: string };
        url?: string;
      };
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
  });
};


export const getUserPlan = async (app: FirebaseApp) => {

  const productIds = {
    "prod_RQYYqLgLpr3GPh": "Basic",
    "prod_RSWVqDo9Qclym0": "Premium",
  };
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User not logged in");

  const db = getFirestore(app);
  const subscriptionsRef = collection(db, "users", userId, "subscriptions");
  const q = query(
    subscriptionsRef,
    where("status", "in", ["trialing", "active"]) // Only check active or trialing subscriptions
  );

  return new Promise<{ isPremium: boolean; planName: string | null; productId: string | null }>((resolve, reject) => {
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.docs.length === 0) {
          console.log("No active or trialing subscriptions found");
          resolve({ isPremium: false, planName: null, productId: null });
        } else {
          const activeSubscription = snapshot.docs[0].data();

          // Extracting the product and plan details
          console.log("Active subscription found:", activeSubscription);
          const productId = activeSubscription.product?.id || "Unknown Product ID";
          const planName =
            productId && productIds.hasOwnProperty(productId)
              ? productIds[productId as keyof typeof productIds]
              : "Unknown Plan";
          console.log(`User is on plan: ${planName} (Product ID: ${productId})`);
          
          resolve({ isPremium: true, planName, productId });
        }
        unsubscribe();
      },
      (error) => {
        console.error("Error fetching subscription:", error);
        reject(error);
      }
    );
  });
};



export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  let dataWithUrl: any;
  try {
    const functions = getFunctions(app, "us-central1");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await functionRef({
      customerId: user?.uid,
      returnUrl: window.location.origin,
    });

    // Add a type to the data
    dataWithUrl = data as { url: string };
    console.log("Reroute to Stripe portal: ", dataWithUrl.url);
  } catch (error) {
    console.error(error);
  }

  return new Promise<string>((resolve, reject) => {
    if (dataWithUrl.url) {
      resolve(dataWithUrl.url);
    } else {
      reject(new Error("No url returned"));
    }
  });
};



export const onetimePayment = async (app: FirebaseApp, priceId: string,quizId: string) => {
  const auth = getAuth(app);
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "users",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    mode: "payment", 
    success_url: `${window.location.origin}?quizId=${quizId}`,
    cancel_url: window.location.origin,
    // payment_intent_data:{
    //   metadata: { 
    //     quizId: quizId,
    //     userId: userId
    //    }
    // },
    quizId: quizId,
    userId: userId,
  });

  // console.log("Checkout session created with ID:", docRef.id);
  // const sessionSnapshot = await getDoc(docRef);
  // const { payment_intent } = sessionSnapshot.data() || {};

  // console.log("sessionSnapshot:", sessionSnapshot.data());

  // console.log("PaymentIntent ID:", payment_intent);

  // if (payment_intent) {
  //   const stripe = new Stripe("secret_key", { apiVersion: "2024-12-18.acacia" });
  //   await stripe.paymentIntents.update(payment_intent, {
  //     metadata: {
  //       quizId: quizId,
  //       userId: userId,
  //     },
  //   });
  //   console.log("Metadata updated for PaymentIntent:", payment_intent);
  // }

  return new Promise<string>((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() as {
        error?: { message: string };
        url?: string;
      };

      // const sessionData = snap.data();
      // console.log("Updated Session Data:", sessionData);
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
  });
}




// Add this code to genrate the checkout session
// import { getCheckoutUrl } from "@/pricingplan2/StripePayments";
// const subscribe = async () => {
//     const app = getFirebaseApp();
        // you can get the price id from the stripe dashboard
//     const priceId = "price_1QUsxXSCiWlzYPouxpwGi7DL";


//     const url = await getCheckoutUrl(app,priceId);
//     router.push(url)
// }










// How to use the code in frontend

// import { getCheckoutUrl, getUserPlan, onetimePayment } from "../lib/StripePayments";
// import { app } from "../Firebase";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";


// const router = useRouter();
// const subscribebaseplan = async () => {
//     const priceId = "price_1QXhR4SCiWlzYPouFT89JtqU";
//     const url = await getCheckoutUrl(app,priceId);
//     router.push(url)
// }
// c
// useEffect(() => {
//   getUserPlan(app)
// }, [])


// <Button onClick={subscribebaseplan} className="text-blue-800 bg-transparent font-medium text-xl">
//               Choose Basic
// </Button>
