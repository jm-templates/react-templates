export type Size = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const sizeClasses: Record<Size, string> = {
  "2xs": "h-6 min-w-6 px-2 gap-1 text-xs",
  xs: "h-8 min-w-8 px-2.5 gap-1 text-xs",
  sm: "h-9 min-w-9 px-3.5 gap-2 text-sm",
  md: "h-10 min-w-10 px-4 gap-2 text-sm",
  lg: "h-11 min-w-11 px-5 gap-3 text-base",
  xl: "h-12 min-w-12 px-5 gap-2.5 text-base",
  "2xl": "h-16 min-w-16 px-7 gap-3 text-lg",
};

export const base =
  "inline-flex items-center justify-center rounded-md font-medium " +
  "whitespace-nowrap select-none w-fit " +
  "transition-colors hover:cursor-pointer " +
  "focus:outline-none focus-visible:ring-2 " +
  "disabled:opacity-50 disabled:pointer-events-none " +
  "bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white";

export function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}
