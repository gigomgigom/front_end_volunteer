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

const selectedRegionCode = inject('data').selectedRegionCode;
const regionList = store.state.regionCode.regionList;

const cityCenter = ref({});

onMounted(() => {
    for(let city of regionList) {
        if(city.cityCode === selectedRegionCode.value) {
            cityCenter.value = city;
        }
    }
});

watch(() => selectedRegionCode.value, (newRegionCode, oldRegionCode) => {
    for(let city of regionList) {
        if(city.cityCode === newRegionCode) {
            cityCenter.value = city;
        }
    }
});

function openVolCenterPage(url) {
    window.open(url, '_blank');
}

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