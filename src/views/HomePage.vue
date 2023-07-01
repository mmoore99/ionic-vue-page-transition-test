<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Master Page</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div style="margin-top: 15px">
                <ion-button @click="goToDetailPage1(iosTransitionAnimationBuilder)">
                    Go To Detail Page 1<br />ionRouter.push<br />
                    custom animation: iosTransitionAnimation
                </ion-button>
            </div>
            <div style="margin-top: 15px">
                <ion-button @click="goToDetailPage1(fadeAnimationBuilder)">
                    Go To Detail Page 1<br />ionRouter.push<br />
                    custom animation: fadeAnimation
                </ion-button>
            </div>
            <div style="margin-top: 15px">
                <ion-button @click="goToDetailPage1(animationBuilder1)">
                    Go To Detail Page 1<br />ionRouter.push<br />
                    custom animation: animationBuilder1
                </ion-button>
            </div>
            <div style="margin-top: 15px">
                <ion-button @click="goToDetailPage1(noAnimationBuilder())">
                    Go To Detail Page 1<br />ionRouter.push<br />
                    custom animation: noAnimationBuilder
                </ion-button>
            </div>
            <div style="margin-top: 15px">
                <ion-button color="success" @click="goToDetailPage1WithRouterPush()">
                    Go To Detail Page 1<br />ionRouter.push<br />
                    custom animation: none
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    IonButton,
    useIonRouter,
    createAnimation,
    iosTransitionAnimation,
} from "@ionic/vue";
import MessageListItem from "@/components/MessageListItem.vue";
import { getMessages, Message } from "@/data/messages";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fadeAnimationBuilder } from "@/animations/fadeAnimationBuilder";
import { iosTransitionAnimationBuilder } from "@/animations/iosTransitionAnimationBuilder";
import { animationBuilder1 } from "@/animations/animationBuilder1";
import { noAnimationBuilder } from "@/animations/noAnimationBuilder";

const router = useRouter();
const route = useRoute();
const ionRouter = useIonRouter();

const animationBuilder2 = (baseEl: any, opts: any) => {
    const enteringAnimation = createAnimation()
        .addElement(opts.enteringEl)
        .duration(3000)
        .iterations(2)
        .keyframes([
            { offset: 0, background: "red" },
            { offset: 0.72, background: "blue" },
            { offset: 1, background: "green" },
        ]);

    const leavingAnimation = createAnimation();
    createAnimation()
        .addElement(opts.leavingEl)
        .duration(3000)
        .iterations(2)
        .keyframes([
            { offset: 0, background: "red" },
            { offset: 0.72, background: "blue" },
            { offset: 1, background: "green" },
        ]);

    const animation = createAnimation().addAnimation(enteringAnimation).addAnimation(leavingAnimation);

    return animation;
};

const goToDetailPage1 = (animationBuilder: any) => {
    ionRouter.push("/detail/1", animationBuilder);
    // ionRouter.push("/detail/1", animationBuilder1);
    // ionRouter.push("/detail/1", animationBuilder2);
};

const goToDetailPage1WithRouterPush = () => {
    ionRouter.push("/detail/1");

    // ionRouter.push("/detail/1", animationBuilder1);
    // ionRouter.push("/detail/1", animationBuilder2);
};
</script>

<style scoped>
ion-button {
    height: 75px;
    text-transform: none;
}
</style>
