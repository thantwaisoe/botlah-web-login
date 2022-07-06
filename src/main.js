import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import PrimeVue from 'primevue/config';

import Menubar from 'primevue/menubar';
import Listbox from 'primevue/listbox';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import "primeflex/primeflex.css";
//import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
//import 'primevue/resources/themes/vela-blue/theme.css';  
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue, { ripple: true });

localStorage.setItem("key", "value");

// component
app.component('Menubar',Menubar)
app.component('Listbox',Listbox)
app.component('Sidebar',Sidebar)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('Button', Button)
app.mount('#app');
