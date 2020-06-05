<template>
  <div class="home">
    <!-- <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"></v-btn> -->
    <div> 
    <CardAmiibo :listAmiibo="listAmiibo" />
    </div>
    <infinite-loading v-if="this.listAmiibo !== undefined" @infinite="infiniteHandler"></infinite-loading>

  </div>
</template>

<script>
// @ is an alias to /src
import CardAmiibo from "@/components/CardAmiibo.vue";
import InfiniteLoading from "vue-infinite-loading";

/* eslint-disable no-debugger */
export default {
  name: "Home",
  components: {
    CardAmiibo,
    InfiniteLoading
  },
  data: () => ({
    listaAmiibos: [],
    qtd: 0
  }),

  computed: {
    listAmiibo: {
      get() {
        //pega os dados que estão no state [pasta listarjogos]
        
        if (this.$store.state.amiibo.GET_LISTAGEM_AMIIBOS == 0) {
          return;
        }
        var lista = this.$store.state.amiibo.GET_LISTAGEM_AMIIBOS.slice(
          0,
          this.qtd
        );
        console.log(lista);
        return lista;
      },
      set(value) {
        //atualiza o dado da store usando o mutation
        this.$store.commit("amiibo/SET_LISTAGEM_AMIIBOS", value);
      }
    }
  },

  methods: {
    async requestAmiibo() {
      await this.$store.dispatch("amiibo/REQUEST_AMIIBOS", "listaamiibo.json");
    },
    infiniteHandler($state) {
      console.log(this.listAmiibo)
      this.qtd += 10;
      this.listAmiibo
      $state.loaded();
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.requestAmiibo();
  }
};
</script>
