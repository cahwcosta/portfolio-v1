import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

const GSAPPlugins = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);
  return null;
}

export default GSAPPlugins;