import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    background?: "white" | "soft-white" | "navy" | "deep-blue";
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, background = "white", container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-24", // Generous vertical padding like pameijer.nl
                    {
                        "bg-white text-navy": background === "white",
                        "bg-soft-white text-navy": background === "soft-white",
                        "bg-navy text-white": background === "navy",
                        "bg-deep-blue text-white": background === "deep-blue",
                    },
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6">{children}</div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
