<template>
  <transition name="fade">
    <div class="modal-container" v-if="show" @click.self="$emit('close')">
      <div class="modal-content" :style="{'max-width': width+'px'}">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ve-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: Number,
      default: 500,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.25s;
  }
  .modal-content {
    width: 100%;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
  }
}
</style>
