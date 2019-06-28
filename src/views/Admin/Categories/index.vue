<template>
  <div>
    <section-header :add-method="consoleMethod">
      <template #title>
        there is title here
      </template>
      <template #action>
        
      </template>
    </section-header>
  </div>
</template>

<script>
import SectionHeader from "@/components/Admin/SectionHeader.vue"
export default {
  components: {
    SectionHeader
  },
  methods: {
    consoleMethod() {
    }
  }
}
</script>

<style>

</style>
