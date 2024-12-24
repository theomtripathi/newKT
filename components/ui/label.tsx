import { cn } from "@/lib/utils" // Adjust this path if needed

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...props }: LabelProps) => (
  <label
    className={cn("text-sm font-medium text-gray-700", className)}
    {...props}
  />
)
