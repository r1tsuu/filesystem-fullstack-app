import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): [T, (newValue: T) => void] => {
  const [value, setStateValue] = useState<T>(() => {
    let initialValue: T;

    // IF SSR.
    if (typeof window === "undefined") return defaultValue;

    try {
      initialValue = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (e) {
      initialValue = defaultValue;
    }

    return initialValue;
  });

  const setValue = (newValue: T) => {
    setStateValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue];
};
