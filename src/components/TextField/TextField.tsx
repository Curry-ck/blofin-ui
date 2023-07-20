import { ForwardedRef, LegacyRef, forwardRef } from "react";
import { cn } from "../../utils/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, type, className, ...otherProps } = props;
  return (
    <label>
      {label}
      <input
        type={type}
        {...otherProps}
        ref={ref as LegacyRef<HTMLInputElement>}
        className={cn(
          "bu-order-input bu-bg-background bu-ring-offset-background placeholder:bu-text-muted-foreground focus-visible:bu-ring-ring bu-flex bu-h-10 bu-w-full bu-rounded-md bu-border bu-px-3 bu-py-2 bu-text-sm file:bu-border-0 file:bu-bg-transparent file:bu-text-sm file:bu-font-medium focus-visible:bu-outline-none focus-visible:bu-ring-2 focus-visible:bu-ring-offset-2 disabled:bu-cursor-not-allowed disabled:bu-opacity-50",
          className
        )}
      />
    </label>
  );
});

export default TextField;
