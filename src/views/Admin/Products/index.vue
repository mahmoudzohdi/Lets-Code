<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>Products List</template>
    </section-header>
    <div class="container">
      <ve-loader class="page-loader" position="center" v-if="loading"></ve-loader>
      <div class="row" v-else>
        <div class="col-md-4 col-sm-6 col-xs-12 " v-for="product in products" :key="product.id">
          <product-card :data="product" :is-admin="true" @editProduct="showModalHandler" @deleteProduct="showDeleteModalHandler"></product-card>
        </div>
      </div>
    </div>
    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <product-form @cancelForm="hideModalHandler" :product="selectedProduct"></product-form>
    </ve-modal>
    <delete-modal
      :show="showDeleteModal"
      @close="hideModalHandler"
      :loading="deleteLoading"
      @deleteCategory="callDeleteProduct"
    ></delete-modal>
  </div>
</template>

<script>
import DeleteModal from "@/components/Admin/Categories/DeleteModal";
import ProductCard from "@/components/Shared/Products/Card";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import ProductForm from "@/components/Admin/Products/ProductForm.vue";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions} = createNamespacedHelpers('AdminStore/ProductsModule');
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
      loading: false,
      selectedProduct: null
    };
  },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    ...mapActions(['deleteProduct', 'getProducts']),
    showModalHandler(product) {
      this.selectedProduct = product;
      this.showModal = true;
    },
    hideModalHandler() {
      this.showModal = false;
      this.showDeleteModal = false;
    },
    showDeleteModalHandler(id) {
      this.showDeleteModal = true;
      this.selectedProductToDelete = id;
    },
    callDeleteProduct() {
      this.deleteLoading = true;
      this.deleteProduct(this.selectedProductToDelete)
        .then(() => {
          this.hideModalHandler();
          this.selectedProductToDelete = null;
          this.deleteLoading = false;
        });
    }
  },
  mounted() {
    this.loading = true;
    this.getProducts().finally( () => {
      this.loading = false;
    });
  }
};
</script>

<style>
</style>
