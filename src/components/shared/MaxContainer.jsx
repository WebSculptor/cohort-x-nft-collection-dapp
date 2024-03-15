import { cn } from "@/lib/utils";

// eslint-disable-next-line react/prop-types
export default function MaxContainer({ children, className }) {
  return (
    <div className={cn("mx-auto max-w-[1568px] px-4 w-full", className)}>
      {children}
    </div>
  );
}
