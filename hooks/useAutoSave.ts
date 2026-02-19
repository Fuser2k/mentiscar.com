"use client";

import { useState, useEffect } from "react";

export function useAutoSave<T>(key: string, initialValue: T, delay: number = 1000) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;
        try {
            const saved = window.localStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return initialValue;
        }
    });

    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handler = setTimeout(() => {
            try {
                setIsSaving(true);
                window.localStorage.setItem(key, JSON.stringify(value));
                // Simulate a tiny delay to show saving state if needed, or just set false immediately
                setTimeout(() => setIsSaving(false), 500);
            } catch (error) {
                console.error("Error saving to localStorage", error);
                setIsSaving(false);
            }
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [key, value, delay]);

    const clearSave = () => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error("Error clearing localStorage", error);
        }
    };

    return { value, setValue, isSaving, clearSave };
}
