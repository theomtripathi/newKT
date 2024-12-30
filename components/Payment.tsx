"use client"

import {app} from "../firebase"
import { onetimePayment } from "@/lib/StripePayments";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Payment() {
  const router = useRouter();
  const handlepayment = async () => {
    const priceId = "price_1QX1MBSCiWlzYPou0ITOm0S2";
    const quizId = "69IDOTEaywGocnUSxQbr";
    console.log(priceId);
    const url = await onetimePayment(app, priceId,quizId);
    router.push(url);
    // console.log(url);
  };
  return (
    <>
      <div>This is a payment page you </div>
      <button onClick={handlepayment}>Pay here</button>
    </>
  );
}
