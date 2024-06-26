<!-- 전체 레이아웃 구조 기본 레이아웃 지정-->
<template>
  <AppSecondHeader/>
  <!--메인페이지 바디 or 상세페이지 바디-->
  <router-view/>
  <AppFooter/>
</template>

<script setup>
import AppFirstHeader from "@/components/Common/AppFirstHeader.vue";
import AppSecondHeader from "@/components/Common/AppSecondHeader.vue";
import AppFooter from "@/components/Common/AppFooter.vue";

import { useStore } from 'vuex';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const store = useStore();
const route = useRoute();
const menuList = ref(store.state.menuState.menuList);

//찾아온 MenuIndex를 menuState.MenuIndex(전역 상태)에 set해준다.
function setMenuIndex() {
   let currentMenuNo = findMenuNo();
   store.commit("menuState/setMenuIndex", currentMenuNo);
}

function findMenuNo() {
   //http://localhost:8080을 제외한 그 뒤의 경로를 받아온다.
   let currentLocation = window.location.pathname;
   // '/Details/VolunteerGuide/Outline' '' '' '' ''
   //split : 받아온 경로에서 '/'구분자를 기준으로 나누어 배열을 만든다.
   let parts = currentLocation.split('/');
   //slice : 배열의 일부를 추출하여 새로운 배열로 반환한다.
   //join : 배열의 모든 요소를 연결하여 하나의 문자열로 만들어준다.(각 요소는 구분자('/')를 사이에 두고 연결된다.)
   //menuState에 저장되어있는 url포맷형식으로 문자열이 변환된다.
   currentLocation = parts.slice(0, 4).join('/');

   //menuState에 저장되어있는 menuList에 저장되어있는 url을 찾아오고 해당하는 위치를 불러온다.
   for (let firstMenu of menuList.value) {
      for (let secondMenu of firstMenu.secondFloor) { 
         if (secondMenu.url === currentLocation) {  // 만약 2계층 메뉴 객체에 존재하는 url이 현재 경로와 같다면 해당위치(객체) 리턴 (3계층 메뉴 존재X)
            return {
               firstFloor: firstMenu.firstMenuNo,
               secondFloor: secondMenu.secondMenuNo,
               thirdFloor: -1
            };
         }
         for (let thirdMenu of secondMenu.thirdFloor) { 
            if (thirdMenu.url === currentLocation) {  //만약 3계층 메뉴 객체에 존재하는 url이 현재 경로와 같다면 해당위치(객체) 리턴
               return {
                  firstFloor: firstMenu.firstMenuNo,
                  secondFloor: secondMenu.secondMenuNo,
                  thirdFloor: thirdMenu.thirdMenuNo
               };
            }
         }
      }
   }
   return {
      firstFloor: 0,
      secondFloor: 0,
      thirdFloor: 0
   };
}
//watch() -> 특정 데이터의 변화를 감지해서 원하는 코드를 실행시켜주는 기능
//주로 API 호출, 데이터 유효성 검사 등 특정 데이터가 변경되자마자 어떠한 작업을 수행하려는 경우 유용
//첫번째 인자 -> 감시하려는 소스/ 두번째 인자 -> 콜백함수로 감시하려는 소스가 변경될 때마다 실행
watch(route, (newRoute, oldRoute) => {
   setMenuIndex();
});
</script>
<style scoped>
 
</style>