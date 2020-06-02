<template>
  <div class="home">
    <!-- <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"></v-btn> -->

    <CardAmiibo msg="Card Amiibo" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardAmiibo from "@/components/CardAmiibo.vue";

export default {
  name: "Home",
  components: {
    CardAmiibo
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
