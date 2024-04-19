<template>
    <div class="container">
        <div class="flex-center-width">
            <ion-icon :icon="logoVue" class="mt-5" size="large"></ion-icon>
            <ion-text>
                <h6 class="font-bold mb-2">Vue School</h6>
                <p>learn vue easily</p>
            </ion-text>
        </div>
        <div class="container-on-container">
            <h6 class="text-center mt-5" style=" font-size: 1.5rem;">hello world</h6>
            <div class="mt-5 input-wrapper ml--5">
                <ion-item class="mb-5">
                    <ion-input label-placement="floating" label="Email" type="email"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label-placement="floating" placeholder="password" label="password" type="password">
                        <ion-button href="/home" fill="clear" slot="end" aria-label="Show/hide">
                            <ion-text color="dark">forgot?</ion-text>
                        </ion-button>
                    </ion-input>
                </ion-item>
                <ion-button class="full-width ml-5" color="dark">
                    <ion-text>log in</ion-text>
                </ion-button>
                <ion-text class="font-15 text-center flex-center mt-5">or continue with</ion-text>
                <div class="gap-10 flex-center mt-2">
                    <ion-button color="secondary" expand="block">
                        <ion-icon slot="start" class="mr-5" :icon="logoGoogle"></ion-icon>
                        <ion-text>log in</ion-text>
                    </ion-button>
                    <ion-button color="secondary" expand="block">
                        <ion-icon slot="start" class="mr-5" :icon="logoGithub"></ion-icon>
                        <ion-text>log in</ion-text>
                    </ion-button>
                </div>
                <ion-text class="font-15 text-center flex-center mt-5">dont have an account? <ion-text
                        class="font-bold">create
                        now</ion-text></ion-text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonActionSheet, IonButton, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonAlert, IonBadge, IonList, IonBreadcrumb, IonBreadcrumbs, IonIcon, IonInput, IonAvatar, IonCheckbox, IonImg, IonRadio, IonText, } from '@ionic/vue';
import { caretDownCircle, logoGoogle, logoGithub, caretDown, camera, film, flash, home, logoVue } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('/src/Assets/interface/loginCard.scss');
</style>