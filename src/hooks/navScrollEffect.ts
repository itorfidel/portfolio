import { useEffect } from "react";

const useNavScroll = (
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const scrollEffect = () => {
      const { scrollY } = window;

      if (scrollY > 300) {
        setState(true);
      } else {
        setState(false);
      }
    };

    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, [setState]);
};

export default useNavScroll;
