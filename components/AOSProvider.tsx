"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return <>{children}</>;
}
