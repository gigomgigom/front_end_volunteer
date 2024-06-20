<template>
    <div id="mapwrapper">
    </div>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import * as d3 from 'd3'

onMounted(() => {
    drawMap('#mapwrapper');
});

const selectedRegionCode = inject('data').selectedRegionCode;
//지도 그리기
function drawMap(target) {
    //지도를 그리기 위한 초기 세팅값 설정
    var width = 200; //지도의 넓이
    var height = 400; //지도의 높이
    var initialScale = 2800; //확대시킬 값
    var initialX = -6144; //초기 위치값 X
    var initialY = 2093; //초기 위치값 Y

    //프로젝션 생성 및 인자(확대비율, 초기위치값) 세팅
    var projection = d3.geoMercator()
        .scale(initialScale)
        .translate([initialX, initialY]);
    //프로젝션 태그 내부에 들어갈 path태그 생성
    var path = d3.geoPath().projection(projection);
    //target으로 지정했던 #mapcontainer 태그에 svg태그를 추가해주고 속성값을 세팅해준다.
    //속성[너비, 높이, id, class]
    var svg = d3
        .select(target)
        .append('svg')
        .attr('width', width + 'px')
        .attr('height', height + 'px')
        .attr('id', 'map')
        .attr('class', 'map');
    //svg 내부에 g태그를 넣어주고 id속성을 states로 부여해준다.
    var states = svg
        .append('g')
        .attr('id', 'states')
    //g태그 내부에 rect태그 생성
    states
        .append('rect')
        .attr('class', 'background')
        .attr('width', width + 'px')
        .attr('height', height + 'px');

    //Geo데이터(JSON) 데이터를 읽고(promise타입, 비동기) Geo데이터를 파싱하여 지도를 그린다.
    d3.json('/korea.json').then(function (json) {
        //지역 설정(경기도, 서울, 인천 이러한 지역정보들이 각각 고유한 path태그 내부에 들어가게 된다.)
        states
            .selectAll('path') 
            .data(json.features)
            .enter()
            .append('path')
            .attr('d', path)
            //CSS 적용을 위한 클래스 속성 추가코드
            .attr('class', function (d) {
                if(selectedRegionCode.value === Number(d.properties.code)) {
                    return 'on r' + d.properties.code;
                } else {
                    return 'r' + d.properties.code;
                }
            })
            //JSON 데이터에서 선택한 지역 코드를 찾아 상태 데이터에 대입해준다. 
            .on("click", function (d) {
                selectedRegionCode.value = Number(d.properties.code);
            });
    }).catch(function (error) {
        console.error('Error loading or parsing JSON:', error);
    });
}
</script>

<style>
#mapwrapper {
    width: 200px;
    min-height: 400px;
    float: left;
    margin: 15px 35px;
}

.background {
    fill: white;
}

#states path {
    fill: silver;
    stroke: white;
    stroke-width: 0.5px;
}

#states path:hover {
    fill: darkorange;
}

#states .active {
    fill: #00b700;
}

#states .activeDetail {
    fill: #00b700;
}

#states path {
    cursor: pointer;
}

#states .on {
    fill: darkorange;
}
</style>