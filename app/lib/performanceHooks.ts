/**
 * Hooks de performance
 */

"use client";

import { useRef, useEffect } from "react";

/**
 * Debounce hook para valores que mudam frequentemente
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const debouncedRef = useRef<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      debouncedRef.current = value;
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay]);

  return debouncedRef.current;
}

/**
 * Hook para intersection observer (lazy loading)
 */
export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisibleRef.current = true;
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "100px",
      threshold: 0.01,
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisibleRef.current];
}

/**
 * Implementação segura de setTimeout com cleanup
 */
export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}
