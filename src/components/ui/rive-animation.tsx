"use client";

import { useEffect, useState } from "react";

interface RiveAnimationProps {
  src: string;
  className?: string;
}

export function RiveAnimation({ src, className }: RiveAnimationProps) {
  const [RiveModule, setRiveModule] = useState<any>(null);

  useEffect(() => {
    void import("@rive-app/react-canvas").then((mod) => {
      setRiveModule(mod);
    });
  }, []);

  if (!RiveModule) {
    return <div className={className} />;
  }

  const { default: RiveComponent, Layout, Fit, Alignment } = RiveModule;

  return (
    <RiveComponent
      src={src}
      className={className}
      layout={
        new Layout({
          fit: Fit.Contain,
          alignment: Alignment.Center,
        })
      }
    />
  );
}
