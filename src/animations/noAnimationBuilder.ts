// @ts-nocheck`

import { createAnimation } from "@ionic/vue";

export const noAnimationBuilder = (baseEl: any, opts: any) => {
  const enteringAnimation = createAnimation();

  const leavingAnimation = createAnimation();

  const animation = createAnimation()
    .addAnimation(enteringAnimation)
    .addAnimation(leavingAnimation);

  return animation;
};
