"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export function ImageWithFallback({ className, ...props }: ImageWithFallbackProps) {
    const [error, setError] = useState(false);

    if (error) {
        return null; // Or return a fallback element
    }

    return (
        <img
            className={cn(className)}
            {...props}
            onError={() => setError(true)}
        />
    );
}
