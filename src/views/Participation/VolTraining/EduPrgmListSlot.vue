<template>
    <EduPrgmList>
      <template v-slot:body>
        <div class="row_container mt-3 mb-3" v-for="(education) in eduListOnOurDB" :key="education.no">
          <div class="row">
            <div class="col-sm-12" style="padding: 0;">
              <span style="font-weight: bold; font-size: 18px; cursor: pointer;" @click="router.push('/Details/Participation/VolTraining/ViewEduProgramDetail')">
                {{ education.title }}
              </span>
            </div>
          </div>
          <div class="row" style="font-size: 14px; border-bottom: 1px solid gray; padding-bottom: 10px; ">
            <div class="col-sm-3 mt-1" style="padding: 0;">
              <span>[교육센터]
                <span style="color: gray;">
                  {{ education.center }}
                </span>
              </span>
            </div>
            <div class="col-sm-7">
              <span class="ms-5" style="">[모집기간]
                <span style="color: gray;">
                  {{ education.recruitDate }}
                </span>
              </span>
            </div>
            <div class="row">
              <div class="col-sm-12" style="padding: 0; margin-bottom: 4px;">
                <span class="">[교육기간]
                  <span style="color: gray;">
                    {{ education.eduDate }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </EduPrgmList>
  </template>
  
  <script setup>
  import EduPrgmList from '@/components/EduPrgmList.vue';
import router from '@/router';
  import  { ref } from 'vue';
  const eduListOnOurDB = ref([
      { no: 1, title: "2012. 봉사", center: "경기도 경기도", recruitDate: "2012.02.10 - 2012.02.11", eduDate: "2012.03.12 - 2012.03.16" },
      { no: 2, title: "2013. 봉사", center: "인천광역시 광역시", recruitDate: "2013.02.10 - 2013.02.11", eduDate: "2013.03.12 - 2013.03.16" },
      { no: 3, title: "2014. 봉사", center: "서울특별시 노원구", recruitDate: "2014.02.10 - 2014.02.11", eduDate: "2014.03.12 - 2014.03.16" },
      { no: 4, title: "2015. 봉사", center: "부산광역시 해운대구", recruitDate: "2015.02.10 - 2015.02.11", eduDate: "2015.03.12 - 2015.03.16" },
      { no: 5, title: "2016. 봉사", center: "제주특별시 서귀포시", recruitDate: "2016.02.10 - 2016.02.11", eduDate: "2016.03.12 - 2016.03.16" }
  ]);
  </script>
  
  <style scoped></style>