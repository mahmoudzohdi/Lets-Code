<template>
  <div class="blog-card">

    <div class="card-image">
      <div class="ratio-content">
        <img :src="data.image" alt="artical title">
      </div>
    </div>

    <div class="card-content">

      <h2 class="card-title">
        {{ data.title }}
      </h2>

      <p class="card-summary">
        {{ data.summary }} 
      </p>

      <router-link :to="`/blog/${data.id}`" class="read-more">
        continue reading
      </router-link>

    </div>

  </div>
</template>


<style lang="scss">
  .blog-card{
    box-sizing: border-box;
    padding: 30px 10px 0;
    
    width: 33%;
    @media(max-width: 900px){
      width: 50%;
    }
    @media(max-width: 600px){
      width: 100%;
    }
  }
  .card-image{
    position: relative;
    &:before{
      content: '';
      display: block;
      padding-top: 66.5%;
    }
    .ratio-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      border-radius: 5px;
    }
    img{
      width: 100%;
      min-height: 100%;
    }
  }
  .card-title{
    color: #990099;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
  }
  .card-summary{
    margin-top: 0;
    font-weight: 300;
    color: #333;
  }
  .read-more{
    color: #333;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
  }
</style>


<script>
export default {
  props: {
    data: {
      required: true
    }
  }
}
</script>

