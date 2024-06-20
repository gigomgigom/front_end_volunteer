<template>
    <div class="card">
        <div class="card-header">카카오맵 api</div>
        <div class="card-body">
            <div ref="mapContainer" style="width: 100%; height: 400px">

            </div>
        </div>
    </div>
</template>

<script setup>
//------------------------------------
// 마운트 될때마다 무한적으로 script가 추가가된다. fix해야함
//------------------------------------

import { onMounted, ref } from 'vue';

//카카오맵이 올라갈 DOM객체 선언 (이 컴포넌트가 마운트 되었을때 DOM객체(mapContainer)의 값이 들어감.)
const mapContainer = ref(null);

const lat = ref(37.5519660609558);
const lng = ref(126.836641912834);

//컴포넌트가 마운트되었다면 카카오맵을 로드한다.
onMounted(() => {
    loadKakaoMap(mapContainer.value);
});

const loadKakaoMap = (container) => {
    const script = document.createElement('script');
    script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}`;
    document.head.appendChild(script);

    script.onload = () => {
        window.kakao.maps.load(() => {
            const options = {
                center: new window.kakao.maps.LatLng(lat.value, lng.value),
                level: 3,
            }
            const mapInterface = new window.kakao.maps.Map(container, options);
            var markerPosition = new window.kakao.maps.LatLng(lat.value, lng.value);

            var marker = new window.kakao.maps.Marker({
                position: markerPosition
            });

            marker.setMap(mapInterface);
        });
    }



}

</script>

<style scoped></style>