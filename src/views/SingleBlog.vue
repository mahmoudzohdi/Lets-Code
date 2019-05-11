<template>
  <div v-if="blog">
    <app-header>
      <router-link to="/" type="button" class="back-button">Back</router-link>
      <h1>
        {{ blog.title }}
      </h1>
    </app-header>

    <div class="blog-container">
      <div class="blog-image">
        <div class="ratio-content">
          <img :src="blog.image" alt="">
        </div>
      </div>

      <h2 class="blog-title">{{ blog.title }}</h2>
      <p class="blog-content">{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/app-header'
import axios from 'axios';
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      blog: null
    }
  },
  mounted(){
    axios.get('http://localhost:3000/blog/'+ this.$route.params.id).then(res => {
      this.blog = res.data;
    });
  }
}
</script>

<style lang="scss" scoped>
  .blog-container {
    max-width: 1024px;
    margin: auto;
    margin-top: 50px;
  }
  .blog-image{
    position: relative;
    &::before{
      content: '';
      display: block;
      padding-top: 30%;
    }
    .ratio-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      img{
        width: 100%;
        max-height: 100%;
      }
    }
  }
  .blog-title{
    color: #990099;
  }
  .blog-content{
    color: #9e9c9c;
    font-style: italic;
  }
</style>
