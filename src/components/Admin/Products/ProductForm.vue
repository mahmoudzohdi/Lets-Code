<template>
  <form @submit.prevent="submit">
    <label class="form-input-holder">
      <span class="input-title">Name:</span>
      <input type="text" v-model="form.name" class="form-input" />
    </label>
    <label class="form-input-holder">
      <span class="input-title">Price:</span>
      <input type="text" v-model="form.price" class="form-input" />
    </label>
    <label class="form-input-holder">
      <span class="input-title">Image:</span>
      <div class="preview-image">
        <img :src="imageUrl">
      </div>
      <input type="file" @change="imageInputChangeHandler" accept="image/*" class="form-input" />
    </label>
    <div class="form-footer">
      <ve-button
        class="action"
        :disabled="loading"
        :loading="loading"
        type="submit"
        color="success"
      >Submit</ve-button>
      <ve-button class="action" @click="cancel">cancel</ve-button>
    </div>
  </form>
</template>

<script>
const initForm = () => ({
  name: null,
  price: null
});
export default {
  props: ['product'],
  data() {
    return {
      imageFile: null,
      imageUrl: null,
      form: initForm(),
      loading: false,
      reader: new FileReader()
    };
  },
  created(){
    this.reader.onload = () => {
      this.imageUrl = this.reader.result;
    };
  },
  computed: {
    isEditMode(){
      return !!this.product;
    }
  },
  methods: {
    cancel() {
      this.resetForm();
      this.$emit("cancelForm");
    },
    imageInputChangeHandler(e) {
      this.imageFile = e.target.files[0];
      this.reader.readAsDataURL(this.imageFile);
    },
    editProduct(){
      return this.$store
        .dispatch("AdminStore/ProductsModule/submitEditProductForm", {
          product: this.form,
          imageFile: this.imageFile,
          id: this.product.id
        })
    },
    addProduct(){
      return this.$store
        .dispatch("AdminStore/ProductsModule/submitProductForm", {
          product: this.form,
          imageFile: this.imageFile
        })
    },
    submit() {
      this.loading = true;
      const callMethod = this.isEditMode ? 'editProduct' : 'addProduct';
      this[callMethod]().then(() => {
          this.resetForm();
          this.$emit("cancelForm");
          this.loading = false;
        });
    },
    resetForm() {
      this.form = initForm();
      this.imageUrl = null;
    },
    fillFormData(){
      const {name, price, imageUrl} = this.product;
      this.form = {name, price};
      this.imageUrl = imageUrl;
    }
  },
  mounted(){
    this.isEditMode && this.fillFormData()
  }
};
</script>
<style lang="scss" scoped>
.preview-image{
  max-width: 150px;
  img{
    width: 100%;
  }
}
</style>