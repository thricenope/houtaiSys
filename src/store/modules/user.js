import {login} from '@/api/sys.js'
import {TOKEN} from "../../constant";
import {getItem, setItem} from "../../utils/storage";
import md5 from 'md5'
import {getUserInfo} from "../../api/sys";

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || '',
        userInfo: {},
        
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            setItem(TOKEN, token)
        },
        setUserInfo(state,userInfo){
            state.userInfo = userInfo
        }
    },
    actions: {
        login(context, userInfo) {
            const {username, password} = userInfo;
            return new Promise((resolve, reject) => {
                login({
                    username,
                    password: md5(password)
                })
                    .then(data => {
                        this.commit('user/setToken', data.token)
                        resolve()
                    })
                    .catch(err => reject(err))
            })
        },
        async getUserInfo(context){
            const res = await getUserInfo();
            this.commit('user/setUserInfo',res)
            return res
        }
    }
}
