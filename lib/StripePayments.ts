"use client";

import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

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
    where("status", "in", ["trialing", "active"])
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
          console.log("Active subscription found:", activeSubscription);
          const productId = activeSubscription.product?.id || "Unknown Product ID";
          const planName =
            productId && productIds[productId as keyof typeof productIds]
              ? productIds[productId as keyof typeof productIds]
              : "Unknown Plan";
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

  let dataWithUrl: { url?: string };
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
    dataWithUrl = data as { url: string };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create portal link");
  }

  if (dataWithUrl.url) {
    return dataWithUrl.url;
  } else {
    throw new Error("No URL returned");
  }
};

export const onetimePayment = async (
  app: FirebaseApp,
  priceId: string,
  quizId: string
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
    mode: "payment",
    success_url: `${window.location.origin}?quizId=${quizId}`,
    cancel_url: window.location.origin,
    quizId,
    userId,
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
