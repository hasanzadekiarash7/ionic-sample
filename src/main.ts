import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@/Assets/main.scss'
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
// import '@ionic/vue/css/palettes/dark.always.css';
import '@ionic/vue/css/palettes/dark.class.css';
import '@ionic/vue/css/palettes/dark.system.css';
import './theme/variables.css';
import { IonActionSheet, IonButton, IonAccordion, IonAccordionGroup, IonLabel, IonItem, IonAlert, IonBadge, IonList, IonBreadcrumb, IonBreadcrumbs, IonIcon, IonInput, IonAvatar, IonCheckbox, IonImg, IonRadio } from '@ionic/vue';
const app = createApp(App)
  .use(IonicVue)
  .use(router);
app.component('IonActionSheet', IonActionSheet),
  app.component('IonButton', IonButton),
  app.component('IonAccordion', IonAccordion),
  app.component('IonAccordionGroup', IonAccordionGroup),
  app.component('IonLabel', IonLabel),
  app.component('IonItem', IonItem),
  app.component('IonAlert', IonAlert),
  app.component('IonBadge', IonBadge),
  app.component('IonList', IonList),
  app.component('IonBreadcrumb', IonBreadcrumb),
  app.component('IonBreadcrumbs', IonBreadcrumbs),
  app.component('IonIcon', IonIcon),
  app.component('IonInput', IonInput),
  app.component('IonAvatar', IonAvatar),
  app.component('IonCheckbox', IonCheckbox),
  app.component('IonImg', IonImg),
  app.component('IonRadio', IonRadio)
router.isReady().then(() => {
  app.mount('#app');
});
