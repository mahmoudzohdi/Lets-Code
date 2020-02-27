<template>
  <div class="category-card">
    {{
    category.name
    }}
    <div class="admin-actions">
      <ve-button
        color="error"
        class="delete-button"
        @click="$emit('deleteCategory', category.id)"
      >Delete</ve-button>
      <ve-button
        color="info"
        class="edit-button"
        @click="$emit('editCategory', category)"
      >Edit</ve-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"]
};
</script>

<style lang="scss" scoped>
.category-card {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 5px;
  margin: 15px 0 0;
}
.admin-actions{
  margin-top: 15px;
}
</style>
