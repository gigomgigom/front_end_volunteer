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
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
  }
  
  button {
    padding: 8px 16px;
    border: 2px solid;
    border-radius: 4px; 
    cursor: pointer;
    font-size: 14px; 
    background: transparent;
    color: #FF5733; /* 주황색 */
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }
  
  .edit-btn {
    border-color: #FF5733; /* 주황색 */
  }
  
  .delete-btn {
    border-color: #FF5733; /* 주황색 */
    background-color: #FF5733;
    color: white;
  }
  

  </style>
  