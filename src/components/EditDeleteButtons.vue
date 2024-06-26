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
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    background: #ff6f4e;
    border: none; /* 테두리 제거 */
    color: white;
    transition: background-color 0.1s, color 0.2s;
  }
  

.delete-btn{
    background: #ff613e;

}

  button:hover {
    background-color: #e04e2e; /* 호버 시 더 어두운 주황색 */
    color: white;
  }
  </style>
  