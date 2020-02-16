<template>
  <div :class="[`size-${size}`, 'lds-ring', `color-${color}`, `position-${position}`]">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "ve-loader",
  props: {
    size: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "small", "large"].indexOf(value) !== -1;
      }
    },
    color: {
      type: String,
      required: false,
      default: "default",
      validator: function(value) {
        // The value must match one of these strings
        return ["default", "white"].indexOf(value) !== -1;
      }
    },
    position: {
      type: String,
      default: ' '
    }
  }
};
</script>

<style lang="scss" scoped>
.position- {
  &center{
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
  }
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring {
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    border: 6px solid #42b983;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #42b983 transparent transparent transparent;
  }
  &.size-small,
  &.size-small div {
    width: 20px;
    height: 20px;
    border-width: 3px;
  }
  &.color-white div {
    border-color: #fff transparent transparent transparent;
  }
  &.size-large,
  &.size-large div {
    width: 51px;
    height: 51px;
  }
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
