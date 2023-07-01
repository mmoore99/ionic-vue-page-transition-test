<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>SubDetail Page {{ props.pageNumber }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div style="margin-top: 15px">
                <ion-button @click="goBack()"> Go Back<br />ionRouter.back()<br />custom animation: fadeAnimationBuilder </ion-button>
            </div>

            <div style="margin-top: 15px">
                <ion-button v-if="isPreviousPage" @click="goToPreviousDetailPage('replace')">
                    Go To SubDetail Page {{ _previousPageNumber }}<br />ionRouter.navigate with replace<br />custom animation: fadeAnimation
                </ion-button>

                <ion-button v-else disabled class=".ion-text-capitalize">
                    Go To SubDetail Page {{ _previousPageNumber }}<br />ionRouter.navigate with replace<br />custom animation: fadeAnimation
                </ion-button>

                <ion-button @click="goToNextDetailPage('replace')">
                    Go To SubDetail Page {{ _nextPageNumber }}<br />ionRouter.navigate with replace<br />custom animation: fadeAnimation
                </ion-button>
            </div>
            <div style="margin-top: 15px">
                <ion-button v-if="isPreviousPage" @click="goToPreviousDetailPage('push')">
                    Go To SubDetail Page {{ _previousPageNumber }}<br />ionRouter.navigate with push<br />custom animation: fadeAnimation
                </ion-button>

                <ion-button v-else disabled class=".ion-text-capitalize">
                    Go To SubDetail Page {{ _previousPageNumber }}<br />ionRouter.navigate with push<br />custom animation: fadeAnimation
                </ion-button>

                <ion-button @click="goToNextDetailPage('push')">
                    Go To SubDetail Page {{ _nextPageNumber }}<br />ionRouter.navigate with push<br />custom animation: fadeAnimation
                </ion-button>
            </div>
            <div style="margin-top: 15px"></div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonRouter,
} from "@ionic/vue";
import { computed, ref } from "vue";
import { animationBuilder1 } from "@/animations/animationBuilder1";
import { fadeAnimationBuilder } from "@/animations/fadeAnimationBuilder";
import { iosTransitionAnimationBuilder } from "@/animations/iosTransitionAnimationBuilder";
import { RouteAction } from "@ionic/vue-router/dist/types/types";

const router = useRouter();
const route = useRoute();
const ionRouter = useIonRouter();

const props = defineProps({
    pageNumber: {
        type: String,
        required: true,
    },
});

const _pageNumber = ref(parseInt(props.pageNumber));
const _nextPageNumber = computed(() => {
    return _pageNumber.value + 1;
});

const _previousPageNumber = computed(() => {
    if (_pageNumber.value === 1) {
        return null;
    }
    return _pageNumber.value - 1;
});

const goToPreviousDetailPage = (routerAction: RouteAction) => {
    if (_previousPageNumber.value === null) {
        return;
    }

    ionRouter.navigate(`/detail/subdetail/${_previousPageNumber.value}`, "back", `${routerAction}`, fadeAnimationBuilder);
};

const goToNextDetailPage = (routerAction: RouteAction) => {
    ionRouter.navigate(`/detail/subdetail/${_nextPageNumber.value}`, "forward", `${routerAction}`, fadeAnimationBuilder);
};

const goBack = () => {
    ionRouter.back(iosTransitionAnimationBuilder);
};

const isPreviousPage = computed(() => {
    return _pageNumber.value > 1;
});
</script>

<style scoped>
ion-item {
    --inner-padding-end: 0;
    --background: transparent;
}

ion-label {
    margin-top: 12px;
    margin-bottom: 12px;
}

ion-item h2 {
    font-weight: 600;
}

ion-item .date {
    float: right;
    align-items: center;
    display: flex;
}

ion-item ion-icon {
    font-size: 42px;
    margin-right: 8px;
}

ion-item ion-note {
    font-size: 15px;
    margin-right: 12px;
    font-weight: normal;
}

h1 {
    margin: 0;
    font-weight: bold;
    font-size: 22px;
}

p {
    line-height: 22px;
}

ion-button {
    height: 75px;
    text-transform: none;
}
</style>
