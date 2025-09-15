export type ButtonSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ButtonVariant = "solid" | "outline" | "ghost" | "link"

export const buttonSizeClasses: Record<ButtonSize, string> = {
  "2xs": "h-6 min-w-6 px-2 gap-1 text-xs",
  xs: "h-8 min-w-8 px-2.5 gap-1 text-xs",
  sm: "h-9 min-w-9 px-3.5 gap-2 text-sm",
  md: "h-10 min-w-10 px-4 gap-2 text-sm",
  lg: "h-11 min-w-11 px-5 gap-3 text-base",
  xl: "h-12 min-w-12 px-5 gap-2.5 text-base",
  "2xl": "h-16 min-w-16 px-7 gap-3 text-lg",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  solid:   "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700",
  outline: "border border-cyan-400 text-cyan-600 hover:bg-cyan-50",
  ghost:   "bg-transparent text-cyan-700 hover:bg-cyan-50",
  link:    "bg-transparent text-cyan-700 underline-offset-4 hover:underline",
}

export const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-md font-medium " +
  "whitespace-nowrap select-none w-fit " +
  "transition-colors hover:cursor-pointer " +
  "focus:outline-none focus-visible:ring-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

export const buttonDisabledClasses = "bg-gray-300 text-gray-600 border-gray-300 hover:bg-gray-300 hover:underline-0";

export function mergeClassNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export function getButtonClassNames(options: {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
}) {
  const { size = "md", variant = "solid", disabled, className } = options;
  return mergeClassNames(
    buttonBaseClasses,
    buttonSizeClasses[size],
    buttonVariantClasses[variant],
    disabled && buttonDisabledClasses,
    className
  )
}