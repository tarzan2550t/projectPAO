import { createRouter,createWebHashHistory } from "vue-router";

import login from "./login.vue";
import register from "./register.vue";


import adminlayout from "./view/adminlayout.vue"
import { components } from "vuetify/dist/vuetify.js";
const routes = [
    {path:'/' , name:"login" , component:login},
    {path:'/register' , name:"register" , component:register},

    {path:'/adminlayout' ,name:"admin" , component:adminlayout},
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router