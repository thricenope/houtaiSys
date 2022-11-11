import {fileURLToPath, URL} from 'node:url'
// const path = require('path')
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({mode}) => {
    // const config = loadEnv(mode, './')
    return defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        // transpileDependencies: [
        //     'vuetify'
        // ],
        // pluginOptions: {
        //     'style-resources-loader':{
        //         preProcessor:'less',
        //         patterns:[
        //             path.resolve(__dirname,'./src/assets/less/parameter.less')
        //         ]
        //     }
        // },
        // base: '',
        server: {
            proxy: {
                'api': {
                    target:'',
                    changeOrigin: true,
                    rewrite:(path)=>path.replace(/^\/api/,'')
                }
            }
        }
    })
}


