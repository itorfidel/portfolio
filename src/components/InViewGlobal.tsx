import React from "react";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  className?: string;
  children: React.ReactNode;
  navigateTo: string;
  setInView: React.Dispatch<React.SetStateAction<boolean>>;
}

const InViewGlobal = ({
  id,
  className,
  children,
  navigateTo,
  setInView,
}: Props) => {
  const navigate = useNavigate();

  const handleInView = (inView: boolean) => {
    if (inView) {
      navigate(navigateTo);
      setInView(true);
    } else {
      setInView(false);
    }
  };

  return (
    <InView
      as="section"
      className={className}
      id={id}
      onChange={(inView) => handleInView(inView)}
      threshold={0.5}
    >
      {children}
    </InView>
  );
};

export default InViewGlobal;
