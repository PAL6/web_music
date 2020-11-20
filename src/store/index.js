import Vue from 'vue'
import Vuex from 'vuex'
import {getMethod} from "@/api/http";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowPlay: false,
        playList: [],
        url: '',
        musicInfo: [],
        index: 0,
        musicName: '',
        musicAuthor: '',
        musicPic: '',
        isLogin:false
    },
    mutations: {
        //显示播放组件并从第一首开始播放
        play(state) {
            state.isShowPlay = true;
        },
        //添加播放列表
        addMusic(state, list) {
            state.playList = list;
        },
        //获取播放列表信息
        getMusicInfo(state, musicInfo) {
            state.musicInfo = musicInfo;
        },
        //播放指定歌曲
        playTarget(state, index) {
            state.index = index;
        },
        //获取歌名和封面
        musicName(state) {
            state.musicName = state.musicInfo[state.index].name;
            state.musicAuthor = state.musicInfo[state.index].ar[0].name;
            state.musicPic = state.musicInfo[state.index].al.picUrl;
        },
        //下一首
        next(state) {
            if (state.index < state.playList.length) {
                state.index = state.index + 1;
            } else {
                state.index = 0;
            }
            console.log(state.index)
        },
        //上一首
        pre(state) {
            if (state.index > 0) {
                state.index = state.index - 1;
            } else {
                state.index = state.playList.length - 1;
            }
            console.log(state.index)
        },
        //获取url
        getMusicUrl(state, url) {
            state.url = url;
        }
    },
    actions: {
        getUrl(context, id) {
            getMethod('/song/url', {
                id: id
            }).then(res => {
               let url = res.data.data[0].url;
               context.commit('getMusicUrl',url);
            }).catch(err => {
                console.log(err)
            })
        }
    },
    modules: {}
})
