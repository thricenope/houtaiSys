/*
import router from "./router";
import store from './store'

const whiteList = ['./sys']

router.beforeEach(async (to, from, next) => {
    if (store.getters.token) {
        if (to.path === './sys') {
            next('/')
        } else {
            if (!store.getters.hasUserInfo) {
                const res = await store.dispatch('user/getUserInfo')
            }
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/sys')
        }
    }
})
*/
