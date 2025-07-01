'use client';

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  if (pathname === "/map") {

    useEffect(() => {
      const preventBounce = (e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        e.preventDefault();
      };
      document.addEventListener('touchmove', preventBounce, { passive: false });

      return () => {
        document.removeEventListener('touchmove', preventBounce);
      };
    }, []);
  }
  return <div>{children}</div>;
};

export default Provider;