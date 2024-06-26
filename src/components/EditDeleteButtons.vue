<template>
    <div class="button-component">
      <button class="edit-btn" @click="edit">수정</button>
      <button class="delete-btn" @click="remove">삭제</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EditDeleteButtons',
    methods: {
      edit() {
        this.$emit('edit');
      },
      remove() {
        this.$emit('remove');
      }
    }
  }
  </script>
  
  <style scoped>
  .button-component {
    margin-top: 7px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
  }
  
  button {
    padding: 8px 16px; /* 패딩 크기 줄임 */
    border: 2px solid;
    border-radius: 4px; /* 더 작은 반경 */
    cursor: pointer;
    font-size: 14px; /* 폰트 크기 줄임 */
    background: transparent;
    color: #FF5733; /* 주황색 */
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }
  
  .edit-btn {
    border-color: #FF5733; /* 주황색 */
  }
  
  .delete-btn {
    border-color: #ff6341; /* 주황색 */
  }
  
  button:hover {
    background-color: #FF5733; /* 호버 시 배경색 주황색 */
    color: white; /* 호버 시 글자색 흰색 */
  }
  </style>
  