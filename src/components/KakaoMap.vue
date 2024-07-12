<template>
    <div ref="mapContainer" style="width: 100%; height: 400px">

    </div>
</template>

<script setup>
//------------------------------------
// 마운트 될때마다 무한적으로 script가 추가가된다. fix해야함
//------------------------------------

import { onMounted, ref, inject } from 'vue';

//카카오맵이 올라갈 DOM객체 선언 (이 컴포넌트가 마운트 되었을때 DOM객체(mapContainer)의 값이 들어감.)
const mapContainer = ref(null);

let locationData = inject('detail');

//컴포넌트가 마운트되었다면 카카오맵을 로드한다.
onMounted(() => {
    loadKakaoMap(mapContainer.value);
});

const loadKakaoMap = (container) => {
    const script = document.createElement('script');
    script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_API_KEY}&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
        console.log(locationData.value.location);
        window.kakao.maps.load(() => {
            var defaultPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
            const options = {
                center: defaultPosition,
                level: 3,
            }
            const mapInterface = new window.kakao.maps.Map(container, options);

            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new window.kakao.maps.services.Geocoder();
            geocoder.addressSearch(locationData.value.location, function (result, status) {
                // 정상적으로 검색이 완료됐으면 
                if (status === window.kakao.maps.services.Status.OK) {
                    var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                    console.log('찾음')
                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new window.kakao.maps.Marker({
                        map: mapInterface,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new window.kakao.maps.InfoWindow({
                        content: '<div style="text-align:center;padding:6px 0;">' + locationData.value.location + '</div>'
                    });
                    infowindow.open(mapInterface, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    mapInterface.setCenter(coords);
                } else {
                    console.log('못찾음');
                }
            });
        });
    }
}

</script>

<style scoped></style>