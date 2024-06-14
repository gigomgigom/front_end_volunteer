<template>
    <nav id="menu-wrapper" class="containter-fluid d-flex justify-content-center">
        <div id="home-button" class="d-flex justify-content-center align-items-center" @click="goHome">
            <img id="home-icon" src="@/assets/home.png">
        </div>
        <ul id="menu">
            <li>
                <div class="d-flex align-items-center h-100">
                    <span>{{ firstName }}</span>
                    <img id="drop-icon" src="@/assets/dropdown.png">
                    <ul class="submenu">
                        <li v-for="(firstFloor, index) in menuList" :key="index">
                            <div @click="changeFirstFloorMenu(firstFloor)">
                                <span>{{ firstFloor.firstName }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <span>{{ secondName }}</span>
                    <img id="drop-icon" src="@/assets/dropdown.png">
                    <ul class="submenu">
                        <li v-for="(secondFloor, index) in secondFloorList" :key="index">
                            <div @click="changeSecondFloorMenu(firstFloorIndex, secondFloor)">
                                <span>{{ secondFloor.secondName }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
            <!--만약 세번째 하위 메뉴요소가 존재하지않는다면 표시되지 않도록 함-->
            <li v-if="thirdName !== ''">
                <div>
                    <span>{{ thirdName }}</span>
                    <img id="drop-icon" src="@/assets/dropdown.png">
                    <ul class="submenu">
                        <li v-for="(thirdFloor, index) in thirdFloorList" :key="index">
                            <div @click="changeThirdFloorMenu(firstFloorIndex, secondFloorIndex, thirdFloor)">
                                <span>{{ thirdFloor.thirdName }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

//Vuex 사용을 위한 store객체 생성
const store = useStore();
const router = useRouter();

//store(menu 모듈) 내부의 속성(menuList: 메뉴정보, menuIndex: 현재메뉴정보) 가져오기
let menuList = store.state.menuState.menuList;
const menuIndex = ref(store.state.menuState.menuIndex);

//배열에서 페이지 정보를 찾기 위해 현재 메뉴 위치찾기
const firstFloorIndex = ref(menuIndex.value.firstFloor);
const secondFloorIndex = ref(menuIndex.value.secondFloor);
const thirdFloorIndex = ref(menuIndex.value.thirdFloor);
//현재 위치에서 존재하는 하위 메뉴 리스트를 상태 데이터로 지정함.
const secondFloorList = ref(menuList[firstFloorIndex.value].secondFloor);
const thirdFloorList = ref(menuList[firstFloorIndex.value].secondFloor[secondFloorIndex.value].thirdFloor);
//네비 이동상태에 따라 이름이 바뀌도록 하기 위해 상태 데이터를 지정함
const firstName = ref(menuList[firstFloorIndex.value].firstName);
const secondName = ref(menuList[firstFloorIndex.value].secondFloor[secondFloorIndex.value].secondName);
const thirdName = ref()
if(menuList[firstFloorIndex.value].secondFloor[secondFloorIndex.value].thirdFloor.length === 0) {
    thirdName.value = '';
} else {
    thirdName.value = menuList[firstFloorIndex.value].secondFloor[secondFloorIndex.value].thirdFloor[thirdFloorIndex.value].thirdName;
}

function goHome() {
    router.push('/Main');
}

//화면 이동을 위한 함수
//FirstFloor 이동
function changeFirstFloorMenu(firstFloor) {
    console.log("FirstFloor 기준 페이지 이동 실행");
    //Vuex 상태를 변경하기 위해 mutation 매개값용으로 payload객체를 만든다.
    let payload = {
        firstFloor: 0,
        secondFloor: 0,
        thirdFloor: 0
    };
    //변경하고자 하는 화면에 ThirdFloor 메뉴가 존재할 경우 payload에 추가
    const isThirdListExists = menuList[firstFloor.firstMenuNo].secondFloor[0].thirdFloor.length !== 0
    if (isThirdListExists) {
        //mutations(setter)메소드의 매개값 생성
        payload = {
            firstFloor: firstFloor.firstMenuNo,
            secondFloor: 0,
            thirdFloor: 0
        }
        //Vuex에 상태 변경
        store.commit("menuState/setMenuIndex", payload);
        router.push(menuList[payload.firstFloor].secondFloor[payload.secondFloor].url);
    } else {    //만약 변경하고자 하는 화면에 ThirdFloor 메뉴가 존재하지 않을 경우
        payload = {
            firstFloor: firstFloor.firstMenuNo,
            secondFloor: 0,
            thirdFloor: -1
        }
        store.commit("menuState/setMenuIndex", payload);
        router.push(menuList[payload.firstFloor].secondFloor[payload.secondFloor].url);
    }
}
//SecondFloor 화면 이동
function changeSecondFloorMenu(firstFloorIndex, secondFloor) {
    console.log("SecondFloor 기준 페이지 이동 실행");
    let payload = {
        firstFloor: 0,
        secondFloor: 0,
        thirdFloor: 0
    }
    //변경하고자 하는 화면에 ThirdFloor 메뉴가 존재할 경우 payload에 추가
    const isThirdListExists = menuList[firstFloorIndex].secondFloor[secondFloor.secondMenuNo].thirdFloor.length !== 0
    if (isThirdListExists) {
        payload = {
            firstFloor: firstFloorIndex,
            secondFloor: secondFloor.secondMenuNo,
            thirdFloor: 0
        }
        store.commit("menuState/setMenuIndex", payload);
        router.push(menuList[payload.firstFloor].secondFloor[payload.secondFloor].url);
    } else {
        payload = {
            firstFloor: firstFloorIndex,
            secondFloor: secondFloor.secondMenuNo,
            thirdFloor: -1
        }
        store.commit("menuState/setMenuIndex", payload);
        router.push(menuList[payload.firstFloor].secondFloor[payload.secondFloor].url);
    }
}
//ThirdFloor 화면 이동
function changeThirdFloorMenu(firstFloorIndex, secondFloorIndex, thirdFloor) {
    console.log("ThirdFloor 기준 페이지 이동 실행");
    let payload = {
        firstFloor: firstFloorIndex,
        secondFloor: secondFloorIndex,
        thirdFloor: thirdFloor.thirdMenuNo,
    }
    store.commit("menuState/setMenuIndex", payload);
    router.push(menuList[payload.firstFloor].secondFloor[payload.secondFloor].thirdFloor[payload.thirdFloor].url);
}

watch(() => menuIndex.value, (newMenuIndex, oldMenuIndex) => {
    //상태 데이터 -> 템플릿 바인딩
    firstFloorIndex.value = newMenuIndex.firstFloor;
    secondFloorIndex.value = newMenuIndex.secondFloor;
    thirdFloorIndex.value = newMenuIndex.thirdFloor;

    //표시되는 이름
    firstName.value = menuList[newMenuIndex.firstFloor].firstName;
    secondName.value = menuList[newMenuIndex.firstFloor].secondFloor[newMenuIndex.secondFloor].secondName;

    //메뉴 리스트 업데이트
    secondFloorList.value = menuList[newMenuIndex.firstFloor].secondFloor;
    thirdFloorList.value = menuList[newMenuIndex.firstFloor].secondFloor[newMenuIndex.secondFloor].thirdFloor;
    if (newMenuIndex.thirdFloor !== -1) {
        thirdName.value = menuList[newMenuIndex.firstFloor].secondFloor[newMenuIndex.secondFloor].thirdFloor[newMenuIndex.thirdFloor].thirdName;
    } else {
        thirdName.value = '';
    }
}, { deep: true });

watch(() => {
    //admin authentication 상태 변이 확인//////////////////////////////////////////
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#menu-wrapper {
    background-color: #f2f2f2;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
}

#menu {
    width: 1050px;
}

#home-button {
    width: 50px;
    height: 50px;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
}

#home-button:hover {
    cursor: pointer;
}

#menu>li {
    float: left;
    list-style: none;
    height: 50px;
    position: relative;
}

#menu>li>div {
    display: flex;
    align-items: center;
    height: 100%;
    border-right: 1px solid silver;
    padding-left: 20px;
    padding-right: 20px;
}

#menu>li>div>span {
    font-weight: bold;
    font-size: 0.8em;
}

#menu>li:hover>div>ul {
    display: block;
}

.submenu {
    background-color: white;
    position: absolute;
    z-index: 999;
    top: 50px;
    right: 0px;
    width: 100%;
    list-style: none;
    display: none;
}

.submenu>li {
    border: 1px solid silver;
    border-collapse: collapse;
}

/*상세 메뉴 컨테이너 스타일*/
.submenu>li>div {
    display: flex;
    justify-content: center;
    padding: 10px 5px;
}

.submenu>li>div>span {
    font-size: 0.8rem;
    font-weight: bold;
}

.submenu>li>div:hover {
    background-color: #f2f2f2;
    cursor: pointer;
}

/*아이콘 크기, 배치*/
#home-icon {
    width: 20px;
    height: 20px;
}

#drop-icon {
    margin-left: 30px;
    width: 10px;
}
</style>