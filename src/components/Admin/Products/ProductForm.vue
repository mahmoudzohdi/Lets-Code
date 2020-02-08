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
  data() {
    return {
      imageFile: null,
      imagePreview: null,
      form: initForm(),
      loading: false
    };
  },
  methods: {
    cancel() {
      this.resetForm();
      this.$emit("cancelForm");
    },
    imageInputChangeHandler(e) {
      this.imageFile = e.target.files[0];
    },
    submit() {
      this.loading = true;
      this.$store
        .dispatch("AdminStore/ProductsModule/submitProductForm", {
          product: this.form,
          imageFile: this.imageFile
        })
        .then(() => {
          this.resetForm();
          this.$emit("cancelForm");
          this.loading = false;
        });
    },
    resetForm() {
      this.form = initForm();
    }
  }
};
</script>