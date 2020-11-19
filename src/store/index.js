import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowPlay: false,
        playList: [],
        musicInfo:[],
        index: 0,
        musicName: '',
        musicPic:''
    },
    mutations: {
        play(state) {
            state.isShowPlay = true;
        },
        addMusic(state, list) {
            state.playList = list;
        },
        getMusicInfo(state,musicInfo){
            state.musicInfo = musicInfo;
        },
        //播放指定歌曲
        playTarget(state, index) {
            state.index = index;
        },
        //获取歌名和封面
        musicName(state) {
            state.musicName = state.musicInfo[state.index].name;
            state.musicPic = state.musicInfo[state.index].al.picUrl;
        },
        //下一首
        next(state) {
            if (state.index < state.playList.length) {
                state.index++;
            } else {
                state.index = 0;
            }
            console.log(state.index)
        },
       //上一首
        pre(state){
            if (state.index > 0) {
                state.index--;
            } else {
                state.index = state.playList.length-1;
            }
            console.log(state.index)
        }
    },
    actions: {},
    modules: {}
})
