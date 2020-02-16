<template>
  <div class="category-card">
    {{
    category.name
    }}
    <ve-button
      color="error"
      class="delete-button"
      @click="$emit('deleteCategory', category.id)"
    >DELETE</ve-button>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style lang="scss" scoped>
.category-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 5px;
  margin: 15px 10px 0;
  &:nth-child(odd) {
    margin-left: 0;
  }
  &:nth-child(even) {
    margin-right: 0;
  }
  .delete-button {
    font-size: 11px;
  }
}
</style>
