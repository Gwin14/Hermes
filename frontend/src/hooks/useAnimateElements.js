import { useEffect } from "react";

export default function useAnimateElements({
  className = "card-widget",
  baseDelay = 0.1,
} = {}) {
  useEffect(() => {
    const applyAnimationDelay = () => {
      const elements = document.querySelectorAll(`.${className}`);

      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * baseDelay}s`;
      });
    };

    // Aplica no início
    applyAnimationDelay();

    // Observa mudanças no DOM
    const observer = new MutationObserver(() => {
      applyAnimationDelay();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [className, baseDelay]);
}
