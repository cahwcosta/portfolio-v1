import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

const GSAPPlugins = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);
  return null;
}

export default GSAPPlugins;