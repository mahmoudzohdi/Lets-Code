<template>
  <ve-modal :show="show" @close="close" :width="400">
    <h4 class="modal-title">Delete Confirmation</h4>
    <div class="actions">
      <ve-button
        class="action"
        :disabled="loading"
        :loading="loading"
        color="error"
        @click="deleteCategory"
      >DELETE</ve-button>
      <ve-button @click="close">close</ve-button>
    </div>
  </ve-modal>
</template>

<script>
export default {
  props: ["show", "loading"],
  methods: {
    close() {
      this.$emit("close");
    },
    deleteCategory() {
      this.$emit("deleteCategory");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}
.actions {
  text-align: center;
}
.action {
  margin-right: 10px;
}
</style>
