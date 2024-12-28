import { cn } from "@/lib/utils";
import createCheckoutSession from "@/app/stripe/createCheckoutSession";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  userId?: string;
  priceId?: string;
}

const Button: FC<ButtonProps> = ({ className, userId, priceId, ...props }) => {
  const handleCheckout = async () => {
    alert("I am being called");
    console.log("User id from button:", userId);
    console.log("price id from button", priceId);

    if (userId && priceId) {
      await createCheckoutSession(userId, priceId);
    } else {
      alert('Please provide valid userId and priceId');
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className={cn("bg-black rounded-md text-white", className)}
      {...props}
    >
      Checkout
    </button>
  );
};

export default Button;