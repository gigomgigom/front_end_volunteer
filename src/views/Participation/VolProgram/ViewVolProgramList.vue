<template>
  <div id="view-programlist-wrapper">
    <h5>🔶봉사조회</h5>
    <SearchVolPgrm />
    <VolPrgmList>
      <template v-slot:right-side>
        <div class="right-side">
          <span>마감</span>
          <span style="color: rgb(240, 103, 4);">14일전</span>
        </div>
      </template>
    </VolPrgmList>
  </div>
</template>

<script setup>
import SearchVolPgrm from '@/components/SearchVolPgrm.vue';
import VolPrgmList from '@/components/VolPrgmList.vue';
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

h5 {
  font-weight: bold;
  padding-bottom: 10px;
}

#view-programlist-wrapper {
  padding-top: 30px;
}

.right-side {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid silver;
  color: gray;
}
</style>