<template>
    <div class="container flex-center">
        <!-- ** ion-button -->
        <ion-button href="/login" color="primary" size="small" id="show-alert" expand="block">
            login form
        </ion-button>
    </div>
</template>

<script type="text/x-template" setup lang="ts">
import { Icon } from '@iconify/vue';
import { IonActionSheet, IonButton, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonAlert, IonBadge, IonList, IonBreadcrumb, IonBreadcrumbs, IonIcon, IonInput, IonAvatar, IonCheckbox, IonImg, IonRadio } from '@ionic/vue';
import { caretDownCircle, caretDown, camera, film, flash, home } from 'ionicons/icons';
import loginCard from '../components/loginCard/index.vue';
import { ref, reactive } from 'vue'
const actionSheetButtons = [
    {
        text: 'Agree',
        data: {
            action: 'Agree',
        },
    },
    {
        text: 'disAgree',
        role: 'disAgree',
        data: {
            action: 'disAgree',
        },
    },
];
</script>

<style scoped></style>