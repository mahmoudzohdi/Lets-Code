<template>
  <div>
    <section-header :add-method="showModalHandler" @addModalEvent="showModalHandler">
      <template #title>there is title here</template>
    </section-header>

    <ve-modal :show="showModal" @close="hideModalHandler" :width="800">
      <category-form @cancelForm="hideModalHandler"></category-form>
    </ve-modal>
  </div>
</template>






<script>
import CategoryForm from "./CategoryForm";
import SectionHeader from "@/components/Admin/SectionHeader.vue";
export default {
  components: {
    SectionHeader,
    CategoryForm
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
    },
    hideModalHandler() {
      this.showModal = false;
    }
  }
};
</script>

<style>
</style>
