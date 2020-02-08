<template>
  <form @submit.prevent="submit">
    <label class="form-input-holder">
      <span class="input-title">Category Name:</span>
      <input type="text" v-model="categoryName" class="form-input" />
    </label>
    <div class="form-footer">
      <ve-button
        class="action"
        :disabled="loading"
        :loading="loading"
        type="submit"
        color="success"
      >Submit</ve-button>
      <ve-button class="action" @click="cancel">cancel</ve-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      categoryName: null,
      loading: false
    };
  },
  methods: {
    cancel() {
      this.categoryName = null;
      this.$emit("cancelForm");
    },
    submit() {
      this.loading = true;
      this.$store
        .dispatch("AdminStore/submitCategoryForm", {
          name: this.categoryName
        })
        .then(() => {
          this.categoryName = null;
          this.$emit("cancelForm");
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-footer {
  .action {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
