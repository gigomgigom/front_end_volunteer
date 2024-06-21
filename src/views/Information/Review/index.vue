  <template>
      <TextHeader title="자원봉사 후기" style="margin-bottom: 0px;"/>
      <BoardDetail/>
      <likeUnlike/>
      <comment/>
  </template>

  <script setup>
  import TextHeader from '@/components/Common/TextHeader.vue';
  import BoardDetail from '@/components/BoardDetail.vue';
  import likeUnlike from './likeUnlike.vue'
  import comment from '@/components/comment.vue'
  </script>

  <style scoped>
  /* 스타일을 여기에 작성하세요 */
  </style>
