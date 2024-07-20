import { createStore } from "vuex";
import menuState from "@/store/menuState";
import regionCode from "./regionCode";
import categoryCode from "./categoryCode";
import axiosConfig from "@/apis/axiosConfig";

export default createStore({
    //루트 상태 정의
    state: {
        userId: "",
        userRole: "",
        accessToken: ""
    },
    //Getter정의(루트 상태 가져오기)
    getters: {
        getUserId(state) {
            return state.userId;
        },
        getUserRole(state) {
            return state.userRole;
        },
        getAccessToken(state) {
            return state.accessToken;
        }
    },
    //Setter정의(루트 상태 변경하기, 동기)
    mutations: {
        setUserId(state, payload) { 
            state.userId = payload;
        },
        setUserRole(state, payload) {
            state.userRole = payload;
        },
        setAccessToken(state, payload) {
            state.accessToken = payload;
        }
    },
    //루트 상태 변경하기, 비동기
    actions: {
        //브라우저가 재실행될때 인증 정보를 전역상태로 복구
        loadAuth(context) {
            //로컬 스토리지에 저장되어있는 UserId와 UserName을 가져온다. (만약 존재하지 않을 시 ""을 대입하라.)
            context.commit("setUserId", localStorage.getItem("userId") || "");
            context.commit("setUserRole", localStorage.getItem("userRole") || "");
            //로컬 스토리지에 저장되어있는 accessToken을 가져온다.
            const accessToken = localStorage.getItem("accessToken") || "";
            //vuex 상태(accessToken)에 set
            context.commit("setAccessToken", accessToken);
            //Axios 요청 공통 헤더에 인증 정보 추가
            if (accessToken !== "") {
                axiosConfig.addAuthHeader(accessToken);
            }
        },
        //로그인을 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리지에 저장
        saveAuth(context, payload) {
            /*
            payload = {
              userId: "user",
              accessToken: "xxxx.yyyy.zzzz"
            }
            */
            //전역 상태값 변경
            context.commit("setUserId", payload.userId);
            context.commit("setUserRole", payload.userRole);
            context.commit("setAccessToken", payload.accessToken);
            //로컬 스토리지에 저장
            localStorage.setItem("userId", payload.userId);
            localStorage.setItem("userRole", payload.userRole);
            localStorage.setItem("accessToken", payload.accessToken);
            //Axios 요청 공통 헤더에 인증정보를 추가하기
            axiosConfig.addAuthHeader(payload.accessToken);
        },
        //로그아웃을 할 때 인증 정보를 모두 삭제한다.
        deleteAuth(context) {
            //vuex 상태 초기화
            context.commit("setUserId", "");
            context.commit("setUserRole", "");
            context.commit("setAccessToken", "");
            //로컬 스토리지에 존재하는 인증정보 삭제
            localStorage.removeItem("userId");
            localStorage.removeItem("userRole");
            localStorage.removeItem("accessToken");
            //Axios 요청 공통 헤더에 인증 정보 제거
            axiosConfig.removeAuthHeader();
        },
    },
    //루트 모듈 하위 상태모듈 정의
    modules: {
        //menu상태 모듈
        menuState,
        regionCode,
        categoryCode
    }
});