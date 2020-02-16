<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>Products List</template>
    </section-header>
    <div class="container">
      <ve-loader class="page-loader" position="center" v-if="loading"></ve-loader>
      <div class="row" v-else>
        <div class="col-md-4 col-sm-6 col-xs-12 " v-for="product in products" :key="product.id">
          <product-card :data="product"></product-card>
        </div>
      </div>
    </div>
    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <product-form @cancelForm="hideModalHandler"></product-form>
    </ve-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      :loading="deleteLoading"
      @deleteCategory="deleteProduct"
    ></delete-modal>
  </div>
</template>

<script>
import DeleteModal from "@/components/Admin/Categories/DeleteModal";
import ProductCard from "@/components/Shared/Products/Card";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import ProductForm from "@/components/Admin/Products/ProductForm.vue";
export default {
  components: {
    DeleteModal,
    SectionHeader,
    ProductForm,
    ProductCard
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectedProductToDelete: null,
      deleteLoading: false,
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.state.AdminStore.ProductsModule.products;
    }
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    deleteProduct() {
      // this.deleteLoading = true;
      // this.$store
      //   .dispatch("AdminStore/deleteCategory", this.selectedCategoryToDelete)
      //   .then(() => {
      //     this.hideModalHandler();
      //     this.selectedCategoryToDelete = null;
      //     this.deleteLoading = false;
      //   });
    }
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch("AdminStore/ProductsModule/getProducts").finally( () => {
      this.loading = false;
    });
  }
};
</script>

<style>
</style>
