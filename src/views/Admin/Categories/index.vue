<template>
  <div>
    <section-header :add-method="showModalHandler" @addModalEvent="showModalHandler">
      <template #title>
        there is title here
      </template>
    </section-header>

    <ve-modal :show="showModal" :width="800">
      <ve-button @click="hideModalHandler">
        close modal
      </ve-button>
    </ve-modal>
  </div>
</template>






<script>
import SectionHeader from "@/components/Admin/SectionHeader.vue"
export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    showModalHandler() {
      this.showModal = true;
    },
    hideModalHandler() {
      this.showModal = false;
    },
  }
}
</script>

<style>

</style>
