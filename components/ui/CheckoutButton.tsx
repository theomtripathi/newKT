import { cn } from "@/lib/utils";
import createCheckoutSession from "@/stripe/createCheckoutSession";
import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  userId?: string, 
  priceId?: string
}






const Button: FC<ButtonProps> = ({onClick, className, userId, priceId, ...rest}) =>{

    

    const handleCheckout = async()=>{

        alert("I am being called")
        console.log("User id from button :", userId)
        console.log("price id from button ", priceId)

        if(userId && priceId)
        {
            await createCheckoutSession(userId, priceId)

        }
        else
        {
            alert('give the right userId and priceId ')
        }
        
    }
    return(
        <>

            <button onClick={handleCheckout} className={cn("bg-black rounded-md text-white", className)}> Checkout </button>
        
        
        
        
        
        </>
    )
}

export default Button;