import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Draggable from "gsap/Draggable";
import { useEffect } from "react";

const GSAPPlugins = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, Draggable)
  }, []);
  return null;
}

export default GSAPPlugins;