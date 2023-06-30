import { createAnimation } from "@ionic/vue";

export const animationBuilder1 = (baseEl: any, opts: any) => {
  const enteringAnimation = createAnimation()
    .addElement(opts.enteringEl)
    .duration(1500)
    .iterations(1)
    .fromTo("transform", "translateX(0px)", "translateX(100px)")
    .fromTo("opacity", "1", "0.2");

  const leavingAnimation = createAnimation();
  createAnimation()
    .addElement(opts.leavingEl)
    .duration(1500)
    .iterations(1)
    .fromTo("transform", "translateX(0px)", "translateX(100px)")
    .fromTo("opacity", "1", "0.2");

  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation);

  return animation;
};
