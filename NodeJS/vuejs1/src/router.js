import {createWebHistory, createRouter} from 'vue-router';
const routes=[
    {
        path:'/',
        name:'MyHome',
        component:()=> import('@/components/MyHome.vue')
    },
    {
        path:'/login',
        name:'SdmLogin',
        component:()=> import('@/components/SdmLogin.vue')
    },
    {
        path:'/sign',
        name:'SdmSign',
        component:()=> import('@/components/SdmSign.vue')
    },
    {
        path:'/qs',
        name:'/SdmQs',
        component:()=> import('@/components/SdmQs.vue')
    },
    {
        path:'/dress',
        name:'/SdmDress',
        component:()=> import('@/components/SdmDress.vue')
    },
    {
        path:'/MakeUp',
        name:'/SdmMakeUp',
        component:()=> import('@/components/SdmMakeUp.vue')
    }
];

const router=createRouter({
    history:createWebHistory(),routes,
});
export default router;