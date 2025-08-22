import React from "react";
import { InView } from "react-intersection-observer";

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
  onChange: (
    inView: boolean,
    navigateTo: string,
    setInView: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

const InViewGlobal = ({ id, className, onChange, children }: Props) => {
  return (
    <InView
      as="section"
      className={className}
      id={id}
      onChange={onChange}
      threshold={0.5}
    >
      {children}
    </InView>
  );
};

export default InViewGlobal;
