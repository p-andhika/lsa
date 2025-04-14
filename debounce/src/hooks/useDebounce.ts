import { useEffect, useState } from "react";

// export const useDebounce = () => {
//   const [timeoutId, setTimeoutId] = useState<undefined | number>();
//
//   const debounce = (fn: Function, delay: number = 500) => {
//     clearTimeout(timeoutId);
//
//     const id = setTimeout(() => {
//       fn();
//       setTimeoutId(undefined);
//     }, delay);
//
//     setTimeoutId(id);
//   };
//
//   return {
//     debounce,
//   };
// };

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
