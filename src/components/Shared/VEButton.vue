<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['ve-btn', `ve-btn-${color}`]"
    @click="$emit('click')"
  >
    <slot v-if="!loading"></slot>
    <ve-loader color="white" size="small" v-else></ve-loader>
  </button>
</template>

<script>
export default {
  name: "ve-button",
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "button",
      validator: function(value) {
        // The value must match one of these strings
        return ["button", "submit"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "success", "error", "info"].indexOf(value) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.ve-btn {
  border: none;
  background: #eee;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &-success {
    background: #42b983;
    color: #fff;
  }
  &-error {
    background: #f44336;
    color: #fff;
  }
  &-info {
    background: #29b6f6;
    color: #fff;
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
