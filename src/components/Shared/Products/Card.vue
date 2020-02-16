<template>
  <div class="product-card">
    <div class="card-image">
      <img :src="data.imageUrl" :alt="data.name" />
    </div>

    <div class="card-body">
      <h2 class="card-title">{{ data.name }}</h2>

      <p class="price">${{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.product-card {
  margin-bottom: 30px;
  .card-image {
    img {
      max-width: 100%;
      display: block;
      border-radius: 5px 5px 0 0;
    }
  }
  .card-title {
    margin-top: 0;
  }
  .card-body {
    padding: 20px 15px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0 0 5px 5px;
  }
}
</style>