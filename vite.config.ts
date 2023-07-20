
import { defineConfig, UserConfigExport, ConfigEnv } from "vite";
import { viteMockServe } from 'vite-plugin-mock';
import vue from "@vitejs/plugin-vue";
//引入svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({command})=> {
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                // Specify the icon folder to be cached
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                // Specify symbolId format
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                localEnabled: command === 'serve', //开发时才会启用mock
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";',
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve("./src")
            }
        }
    }
});
