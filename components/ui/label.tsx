import * as React from "react"
import { cn } from "@/lib/utils" // Adjust this path if needed

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    className={cn("text-sm font-medium text-gray-700", className)}
    {...props}
  />
)