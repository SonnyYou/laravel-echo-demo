var Vue = require('vue');
window.Vue = Vue;
Vue.use(require('vue-resource'));

import Contacts from './components/ExampleComponent.vue';

new Vue({
    el: 'body',
    
    data: {
        base_url: ""
    },

    components: { Contacts }
});