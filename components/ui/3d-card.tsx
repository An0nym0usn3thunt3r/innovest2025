"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";

const MouseEnterContext = createContext<{
  mouseX: number;
  mouseY: number;
  setMouseX: (x: number) => void;
  setMouseY: (y: number) => void;
}>({
  mouseX: 0,
  mouseY: 0,
  setMouseX: () => {},
  setMouseY: () => {},
});

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <MouseEnterContext.Provider
      value={{ mouseX, mouseY, setMouseX, setMouseY }}
    >
      <div
        className={cn("relative", containerClassName)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMouseX(e.clientX - rect.left);
          setMouseY(e.clientY - rect.top);
        }}
      >
        <div className={cn("relative group", className)}>{children}</div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const { mouseX, mouseY } = useContext(MouseEnterContext);
  const ref = useRef<HTMLDivElement>(null);

  const rotateElement = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (mouseY - centerY) / 50;
    const rotateY = (mouseX - centerX) / 50;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  React.useEffect(() => {
    rotateElement();
  }, [mouseX, mouseY]);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-200 ease-out", className)}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Component = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  ...rest
}: {
  as?: any;
  children?: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  [key: string]: any;
}) => {
  return (
    <Component
      className={cn("transform transition duration-200 ease-out", className)}
      style={{
        transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px)`,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
