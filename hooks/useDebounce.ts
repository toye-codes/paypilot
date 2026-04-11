import { useEffect, useState } from "react";

type UseDebounceProps<T> = {
  value: T;
  delay?: number;
};

export function useDebounce<T>({ value, delay = 300 }: UseDebounceProps<T>) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
