<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>Categories List</template>
    </section-header>

    <div class="page">
      <ve-loader class="page-loader" position="center" v-if="loading"></ve-loader>
      <div class="container" v-else>
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12 ">
            <category-card
              v-for="category in categories"
              :category="category"
              @deleteCategory="showDeleteModalHandler"
              :key="category.id"
            ></category-card>
          </div>
        </div>
      </div>
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
import CategoryForm from "@/components/Admin/Categories/CategoryForm";
import DeleteModal from "@/components/Admin/Categories/DeleteModal";
import CategoryCard from "@/components/Admin/Categories/CategoryCard";
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
      deleteLoading: false,
      loading: false
    };
  },
  computed: {
    categories() {
      return this.$store.state.AdminStore.categories;
    }
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch("AdminStore/getCategories").finally( () => {
      this.loading = false;
    });
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectedCategoryToDelete = id;
    },
    deleteCategory() {
      this.deleteLoading = true;
      this.$store
        .dispatch("AdminStore/deleteCategory", this.selectedCategoryToDelete)
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

</style>
