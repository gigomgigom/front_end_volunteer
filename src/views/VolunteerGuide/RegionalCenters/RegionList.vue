<template>
    <div>
        <div class="mb-4">
            <h4 style="font-weight: bold">{{ cityCenter.cityName }}</h4>
        </div>
        <div style="border: 1px solid black"></div>
        <div id="listContainer">
            <div id="listWrapper" class="row pt-3 pb-3">
                <div class="col-sm-8 col">
                    <span style="font-size: 18px; font-weight: bold;">
                        {{ cityCenter.cityName }}
                    </span>
                    <div style="height: 10px;"></div>
                    <div class="col">
                        <div>
                            <span style="font-size: 14px">
                                [전화번호] {{ cityCenter.tel }}
                            </span>
                        </div>
                        <div>
                            <span style="font-size: 12px">
                                [주소] {{ cityCenter.addr }}
                            </span>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4 d-flex justify-content-center align-items-center">
                    <HighlightButton text="홈페이지" class="me-1" @buttonClick="openVolCenterPage(cityCenter.url)"/>
                    <NormalButton text="주소보기" @buttonClick="openVolCenterMap(cityCenter.cityName)"/>
                </div>
            </div>
            <div id="listWrapper" class="row pt-3 pb-3" v-for="(county, index) in cityCenter.county" :key="index">
                <div class="col-sm-8 col">
                    <span style="font-size: 18px; font-weight: bold;">
                        {{ cityCenter.cityName + ' ' + county.countyName }}
                    </span>
                    <div style="height: 10px;"></div>
                    <div class="col">
                        <div>
                            <span style="font-size: 14px">
                                [전화번호] {{ county.tel }}
                            </span>
                        </div>
                        <div>
                            <span style="font-size: 12px">
                                [주소] {{ county.addr }}
                            </span>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4 d-flex justify-content-center align-items-center">
                    <HighlightButton text="홈페이지" class="me-1" @buttonClick="openVolCenterPage(county.url)"/>
                    <NormalButton text="주소보기" @buttonClick="openVolCenterMap(cityCenter.cityName + ' ' + county.countyName)"/>
                </div>
            </div>
        </div>
        <div style="height: 100px;"></div>
    </div>
</template>

<script setup>
import { inject, ref, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import HighlightButton from '@/components/Common/HighlightButton.vue';
import NormalButton from '@/components/Common/NormalButton.vue';

const store = useStore();
//상위 컴포넌트에게 선택한 지역코드 데이터를 받아온다.
const selectedRegionCode = inject('data').selectedRegionCode;
//전역상태에 저장되어있는 지역목록을 가져온다.
const regionList = store.state.regionCode.regionList;
//선택한 지역에 대한 상태 데이터 선언
const cityCenter = ref({});

//만약 이 컴포넌트가 마운트된다면
onMounted(() => {
    //선택한 지역코드와 동일한 정보를 찾아 화면에 뿌려줄 데이터를 세팅해준다.
    for(let city of regionList) {
        if(city.cityCode === selectedRegionCode.value) {
            cityCenter.value = city;
        }
    }
});

//만약 선택한 지역코드가 변경되었다면 화면에 뿌려줄 데이터를 다시 세팅해준다.
watch(() => selectedRegionCode.value, (newRegionCode, oldRegionCode) => {
    for(let city of regionList) {
        if(city.cityCode === newRegionCode) {
            cityCenter.value = city;
        }
    }
});

//봉사센터 홈페이지(외부 페이지)를 새탭으로 뜨게 하는 함수
function openVolCenterPage(url) {
    window.open(url, '_blank');
}

//봉사센터의 위치를 검색한 카카오맵(외부 페이지)을 새탭으로 뜨게 하는 함수
function openVolCenterMap(location) {
    const url = 'https://map.kakao.com/?q=' + location + '자원봉사센터'
    window.open(url, '_blank');
}

</script>

<style scoped>
#listWrapper {
    border-bottom: 1px solid silver;
}
</style>