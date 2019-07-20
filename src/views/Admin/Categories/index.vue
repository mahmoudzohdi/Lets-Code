<template>
  <div>
    <section-header :add-method="showModalHandler" @addModalEvent="showModalHandler">
      <template #title>there is title here</template>
    </section-header>

    <div class="page">
      <div class="categories-container" v-if="categories">
        <category-card
          v-for="category in categories"
          :category="category"
          @deleteCategory="showDeleteModalHandler"
          :key="category.id"
        ></category-card>
      </div>
      <ve-loader class="page-loader" v-else></ve-loader>
    </div>

    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <category-form @cancelForm="hideModalHandler"></category-form>
    </ve-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      :loading="deleteLoading"
      @deleteCategory="deleteCategory"
    ></delete-modal>
  </div>
</template>






<script>
import CategoryForm from "./CategoryForm";
import DeleteModal from "./DeleteModal";
import CategoryCard from "./CategoryCard";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
export default {
  components: {
    SectionHeader,
    CategoryForm,
    DeleteModal,
    CategoryCard
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectedCategoryToDelete: null,
      deleteLoading: false
    };
  },
  computed: {
    categories() {
      return this.$store.state.admin.categories;
    }
  },
  mounted() {
    this.$store.dispatch("admin/getCategories");
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectedCategoryToDelete = id;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    deleteCategory() {
      this.deleteLoading = true;
      this.$store
        .dispatch("admin/deleteCategory", this.selectedCategoryToDelete)
        .then(() => {
          this.hideModalHandler();
          this.selectedCategoryToDelete = null;
          this.deleteLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.categories-container {
  display: flex;
  flex-wrap: wrap;
}
.page-loader {
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
}
</style>
