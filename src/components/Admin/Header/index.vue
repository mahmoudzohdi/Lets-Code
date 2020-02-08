<template>
  <header class="admin-header">
    <button type="button" class="nav-toggle-button" @click="toggleNav">
      <span class="icon">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </span>
    </button>
    <nav>
      <ul>
        <li :class="{'active': $route.name == 'admin'}">
          <router-link to="/admin">Home</router-link>
        </li>
        <li :class="{'active': $route.name == 'products'}">
          <router-link to="/admin/products">Products</router-link>
        </li>
        <li :class="{'active': $route.name == 'categories'}">
          <router-link to="/admin/categories">Categories</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    navVisibility() {
      return this.$store.state.AdminStore.navVisibility;
    }
  },
  methods: {
    toggleNav() {
      this.$store.commit("AdminStore/updateNavVisibility", !this.navVisibility);
    }
  }
};
</script>

<style lang="scss">
$adminHeaderWidth: 200px;

#admin-content-body {
  transition: padding-left 0.5s;
  padding: 50px 20px 0;
  &.nav-opened {
    padding-left: $adminHeaderWidth + 20px;
  }
}

.admin-header {
  width: $adminHeaderWidth;
  position: fixed;
  top: 0;
  left: -$adminHeaderWidth;
  transition: left 0.5s;
  bottom: 0;
  background-color: #333;
  color: #fff;
  .nav-toggle-button {
    position: absolute;
    left: 100%;
    width: 40px;
    height: 40px;
    background: #333;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    .icon {
      position: relative;
      display: block;
      width: 100%;
      .line {
        position: absolute;
        width: 100%;
        display: block;
        height: 3px;
        background-color: #fff;
        transition: 0.5s;
        &.line-1 {
          transform: translateY(-8px);
        }
        &.line-3 {
          transform: translateY(8px);
        }
        .nav-opened & {
          transform-origin: center;
          &.line-2 {
            opacity: 0;
          }
          &.line-1 {
            transform: translateY(0) rotate(45deg);
          }
          &.line-3 {
            transform: translateY(0) rotate(-45deg);
          }
        }
      }
    }
  }
  .nav-opened & {
    left: 0;
  }
  nav {
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      font-size: 16px;
      &:hover,
      &.active {
        background-color: #000;
      }
      a {
        display: block;
        color: inherit;
        padding: 15px 20px;
        text-decoration: none;
      }
    }
  }
}
</style>
