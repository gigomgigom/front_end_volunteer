<template>
    <div>
        <div class="aa" style="height: 100vh;">
            <div style="position: relative;">
                <h4>{{ firstName }}</h4>
            </div>
            <div v-for="(menu, index) in secondFloorList" :key="index">
                <div :class="menu.thirdFloor.length !== 0 ? menu.secondMenuNo === secondFloorIndex ? 'menu-item main-active' : 'menu-item' : menu.secondMenuNo === secondFloorIndex ? 'menu-item nochild main-active' : 'menu-item nochild'"
                    @click="selectMenu($event, menu.secondMenuNo, menu.thirdFloor)">
                    <span>{{ menu.secondName }}</span>
                    <img v-show="menu.thirdFloor.length !== 0" id="drop-icon" src="@/assets/dropdown.png">
                </div>
                <ul v-if="menu.thirdFloor.length !== 0" class="submenu-items">
                    <li v-for="(submenu, index) in menu.thirdFloor" :key="index"
                        :class="menu.secondMenuNo === secondFloorIndex ? submenu.thirdMenuNo === thirdFloorIndex ? 'submenu-item sub-active' : 'submenu-item' : 'submenu-item'"
                        @click="selectSubMenu($event, menu.secondMenuNo, submenu.thirdMenuNo)">
                        <span>{{ submenu.thirdName || '' }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const menuIndex = ref(store.state.menuState.menuIndex);
const menuList = store.state.menuState.menuList;
const firstFloorIndex = ref(menuIndex.value.firstFloor);
const secondFloorIndex = ref(menuIndex.value.secondFloor);
const thirdFloorIndex = ref(menuIndex.value.thirdFloor);

const firstName = ref(menuList[firstFloorIndex.value].firstName);
const secondFloorList = ref(menuList[firstFloorIndex.value].secondFloor);

//SecondFloor 메뉴 클릭이벤트 함수
function selectMenu(event, secondMenuNo, thirdFloor) {
    let targetClassList;
    let target;
    //만약 이벤트를 발생한 타겟이 menu-item이라면
    if (event.target.classList.contains('menu-item')) {
        //올바른 DOM객체이므로 그에 맞는 값들을 넣어준다.
        target = event.target;
        targetClassList = target.classList;
    } else { //만일 menu-item의 하위 개체라면
        //부모 객체(menu-item)으로 맞춰준다.
        target = event.target.parentElement;
        targetClassList = target.classList
    }
    //도큐먼트에서 active 클래스를 갖는 DOM객체를 찾는다.
    const findActiveElement = document.querySelector('.main-active');

    //만약 해당 DOM객체가 존재하고 현재 타겟과 ActiveElement가 일치하지 않다면 activeElement의 active속성을 제거한다.

    if (findActiveElement !== null && target !== findActiveElement) {
        findActiveElement.classList.remove('main-active');
    }
    //타겟의 클래스가 active이고 nochild가 아닐 경우 active 속성을 삭제한다.
    if (targetClassList.contains('main-active') && !targetClassList.contains('nochild')) {
        targetClassList.remove('main-active');
    } else {
        //그것이 아니라면 active 속성을 추가한다.
        targetClassList.add('main-active');
    }
    let payload;
    if (thirdFloor.length === 0) {
        payload = {
            firstFloor: firstFloorIndex.value,
            secondFloor: secondMenuNo,
            thirdFloor: -1
        };
        store.commit("menuState/setMenuIndex", payload);
    } else {
        console.log('자식있음');
    }
}
//ThirdFloor 메뉴 클릭이벤트 함수
function selectSubMenu(event, secondMenuNo, thirdMenuNo) {
    let targetClassList;
    let target;

    if (event.target.classList.contains('submenu-item')) {
        target = event.target;
        targetClassList = target.classList;
    } else {
        target = event.target.parentElement;
        targetClassList = target.classList;
    }
    const findActiveElement = document.querySelector('.sub-active');
    if (findActiveElement !== null) {
        findActiveElement.classList.remove('sub-active');
    }
    if (!targetClassList.contains('sub-active')) {
        targetClassList.add('sub-active');
    }
    let payload;
    payload = {
        firstFloor: firstFloorIndex.value,
        secondFloor: secondMenuNo,
        thirdFloor: thirdMenuNo
    };
    store.commit("menuState/setMenuIndex", payload);
}

watch(() => menuIndex.value, (newMenuIndex, oldMenuIndex) => {
    console.log(newMenuIndex.firstFloor);
    firstFloorIndex.value = newMenuIndex.firstFloor;
    secondFloorIndex.value = newMenuIndex.secondFloor;
    thirdFloorIndex.value = newMenuIndex.thirdFloor;

    firstName.value = menuList[firstFloorIndex.value].firstName;
    secondFloorList.value = menuList[firstFloorIndex.value].secondFloor;
}, { deep: true });
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.aa {
    border: 1px solid silver;
}

h4 {
    text-align: center;
    line-height: 90px;
    height: 90px;
    color: #fff;
    background: linear-gradient(to right, #f69210 0%, #f06704 100%);
    text-shadow: rgba(0, 0, 0, 0.2) 0px 5px 0px;
    margin: 0;
    font-weight: bold;
}

h4::after {
    position: absolute;
    top: 20px;
    left: 50px;
    display: block;
    content: "";
    width: 100px;
    height: 1px;
    background: #fff
}

.submenu-items {
    list-style: none;
    border-bottom: 1px solid silver;
    display: none;
}

.submenu-item {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
}

.submenu-item>span {
    font-size: 0.8em;
    color: #666;
    cursor: pointer;
}

.submenu-item.sub-active>span {
    font-weight: bold;
    color: black;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    border-bottom: 1px solid silver;
    border-collapse: collapse;

    cursor: pointer;
}

.menu-item>span {
    font-size: 1em;
    color: #666;
}

img {
    width: 10px;
}

.menu-item.main-active {
    background-color: #f2f2f2;
}

.menu-item.main-active>span {
    color: black;
}

.menu-item.main-active+.submenu-items {
    display: block;
}
</style>
