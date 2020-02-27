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
  props: ['selectedCategory'],
  data() {
    return {
      categoryName: null,
      loading: false
    };
  },
  computed: {
    isEditMode(){
      return !!this.selectedCategory;
    }
  },
  methods: {
    cancel() {
      this.categoryName = null;
      this.$emit("cancelForm");
    },
    addCategory(){
      return this.$store
        .dispatch("AdminStore/submitCategoryForm", {
          name: this.categoryName
        });
    },
    editCategory(){
      return this.$store
        .dispatch("AdminStore/submitEditCategoryForm", {
          category: { name: this.categoryName },
          id: this.selectedCategory.id
        })
    },
    submit() {
      this.loading = true;
      const callMethod = this.isEditMode ? 'editCategory' : 'addCategory';

        this[callMethod]().then(() => {
          this.categoryName = null;
          this.$emit("cancelForm");
          this.loading = false;
        });
    },
    fillFormData(){
      this.categoryName = this.selectedCategory.name;
    }
  },
  mounted(){
    this.isEditMode && this.fillFormData()
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
