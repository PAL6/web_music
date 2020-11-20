import store from "@/store/index";
import {getMethod} from "@/api/http";

export function playMusic(playList) {
    console.log(store.state.index);
    let tempList = [];
    for (let i = 0; i < playList.length; i++) {
        getMethod('/song/url', {
            id: playList[i].id
        }).then(res => {
            tempList.push(res.data.data[0].url);
        }).catch(err => {
            console.log(err)
        })
    }
    console.log(playList)
    store.commit('playTarget',0)
    store.commit('play');
    store.commit('addMusic', tempList);
    store.commit('getMusicInfo', playList)
    store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
    store.commit('musicName');
}

export function playTargetMusic(index) {
    store.commit('playTarget', index);
    store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
    store.commit('musicName');
}


//下一首
export function nextMusic(){
    if(store.state.index < store.state.musicInfo.length) {
        store.state.index++;
        store.commit('musicName');
        store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
    } else {
        state.index = 0;
        store.commit('musicName');
        store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
    }
}

// 上一首
export function preMusic(){
   if(store.state.index>0){
       store.state.index--;
       store.commit('musicName');
       store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
   } else {
       state.index = store.state.musicInfo.length;
       store.commit('musicName');
       store.dispatch('getUrl',store.state.musicInfo[store.state.index].id);
   }
}