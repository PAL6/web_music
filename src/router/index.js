import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//首页
const Home = () => import('../views/Home')
//首页路由组件
const MyMusic = () => import('../views/home/MyMusic')
const Friend = () => import('../views/home/Friend')
const Market = () => import('../views/home/Market')
const Musician = () => import('../views/home/Musician')
const DownloadApp = () => import('../views/home/DownloadApp')
//首页二级导航路由组件
const Recommend = () => import('../views/home/find_music/Recommend')
const Rank = () => import('../views/home/find_music/Rank')
const SongList = () => import('../views/home/find_music/SongList')
const HostStation = () => import('../views/home/find_music/HostStation')
const Singer = () => import('../views/home/find_music/Singer')
const NewDisc = () => import('../views/home/find_music/NewDisc')

//未登录页面
const UnLogin = ()=> import('../views/UnLogin')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/recommend',
                name: 'Recommend',
                component: Recommend,
            },
            {
                path: '/rank',
                name: 'Rank',
                component: Rank
            },
            {
                path: '/songList',
                name: 'SongList',
                component: SongList
            },
            {
                path: '/hostStatic',
                name: 'HostStation',
                component: HostStation
            },
            {
                path: '/singer',
                name: 'Singer',
                component: Singer
            },
            {
                path: '/newDisc',
                name: 'NewDisc',
                component: NewDisc
            }
        ],
        redirect:'/recommend'
    },
    {
        path: '/myMusic',
        name: 'MyMusic',
        component: MyMusic,
    },
    {
        path: '/friend',
        name: 'Friend',
        component: Friend
    },
    {
        path: '/market',
        name: 'Market',
        component: Market
    },
    {
        path: '/musician',
        name: 'Musician',
        component: Musician
    },
    {
        path: '/downloadApp',
        name: 'DownloadApp',
        component: DownloadApp
    },
    {
        path: '/unLogin',
        name: 'UnLogin',
        component:UnLogin,
        linkExactActiveClass:"active"
    }
]

const router = new VueRouter({
    routes,
    module:history
})

export default router
