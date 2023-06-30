// @ts-nocheck
import { createAnimation } from "@ionic/vue";

export const fadeAnimationBuilder = (baseEl, opts) => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .fromTo("opacity", 0, 1)
    .easing("ease-in")
    .duration(2500);

  const leavingAnimation = createAnimation()
    .addElement(opts.leavingEl)
    .fromTo("opacity", 1, 0)
    .easing("ease-in")
    .duration(2500);

  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation);

  return animation;
};
