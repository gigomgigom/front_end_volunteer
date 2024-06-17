import { createStore } from "vuex";
import menuState from "@/store/menuState";
import regionCode from "./regionCode";
import categoryCode from "./categoryCode";

export default createStore({
    //루트 상태 정의
    state: {
    },
    //Getter정의(루트 상태 가져오기)
    getters: {

    },
    //Setter정의(루트 상태 변경하기, 동기)
    mutations: {

    },
    //루트 상태 변경하기, 비동기
    actions: {

    },
    //루트 모듈 하위 상태모듈 정의
    modules: {
        //menu상태 모듈
        menuState,
        regionCode,
        categoryCode
    }
});