<template>
  <div>
    <section-header @addModalEvent="showModalHandler">
      <template #title>Products List</template>
    </section-header>

    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.name" width="300" />
        {{ product.name }}: {{ product.price }}
      </li>
    </ul>
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
import SectionHeader from "@/components/Admin/SectionHeader.vue";
import ProductForm from "@/components/Admin/Products/ProductForm.vue";
export default {
  components: {
    DeleteModal,
    SectionHeader,
    ProductForm
  },
  data() {
    return {
      showModal: false,
      showDeleteModal: false,
      selectedProductToDelete: null,
      deleteLoading: false
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
    this.$store.dispatch("AdminStore/ProductsModule/getProducts");
  }
};
</script>

<style>
</style>
