import { useLayoutEffect, useRef } from "react";

const useGetDimension = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const height = elementRef.current.offsetHeight;
      console.log(height);
    }
  }, []);

  return [elementRef];
};

export default useGetDimension;
