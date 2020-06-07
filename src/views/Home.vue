<template>
  <v-container>
    <div class="home">
      <v-row justify="center">
        <v-btn color dark @click.stop="dialogFilter = true">Pesquisar</v-btn>
        <v-progress-circular
          v-if="this.$store.state.amiibo.GET_CARREGANDO"
          indeterminate
          color="purple"
        ></v-progress-circular>
        <v-dialog v-model="dialogFilter" max-width="290">
          <v-card>
            <v-card-title class="headline">
              Pesquisar por:
              <v-row align="center">
                <v-select
                  :items="listaamiiboSeries"
                  v-model="amiiboSerie"
                  item-text="name"
                  item-value="name"
                  label="Game Série"
                  options="todos"
                ></v-select>
              </v-row>
              <v-row align="center">
                <v-select
                  :items="listaTipo"
                  v-model="tipo"
                  item-text="name"
                  item-value="name"
                  label="Tipo de Amiibo"
                ></v-select>
              </v-row>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="pesquisar()">Pesquisar</v-btn>

              <v-btn color="green darken-1" text @click="dialogFilter = false">Cancelar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <!-- <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"></v-btn> -->
      <div>
        <CardAmiibo :listAmiibo="listAmiiboFilter" />
      </div>
      <infinite-loading
        v-if="this.listAmiiboFilter.length !== 0"
        :identifier="infiniteId"
        @infinite="infiniteHandler"
      ></infinite-loading>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardAmiibo from "@/components/CardAmiibo.vue";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Home",
  components: {
    CardAmiibo,
    InfiniteLoading
  },
  data: () => ({
    qtd: 10,
    dialogFilter: false,
    listAmiibo: [],
    listAmiiboFilter: [],
    listaTipo: [],
    listaamiiboSeries: [],
    tipo: "",
    amiiboSerie: "",
    infiniteId: +new Date()
  }),

  methods: {
    async requestAmiibo() {
      await this.$store
        .dispatch("amiibo/REQUEST_AMIIBOS", "listaamiibo.json")
        .then(() => {
          this.listAmiibo = this.$store.state.amiibo.GET_LISTAGEM_AMIIBOS;
          this.tratarListaAmiibo();
        });
      await this.$store
        .dispatch("amiibo/REQUEST_GAMES_SERIE", "listagameserie.json")
        .then(() => {
          this.listaamiiboSeries = this.$store.state.amiibo.GET_GAMES_SERIE;
          this.listaamiiboSeries.unshift({ key: "0", name: "Todos" });
        });
      await this.$store
        .dispatch("amiibo/REQUEST_TIPOS", "listatipo.json")
        .then(() => {
          this.listaTipo = this.$store.state.amiibo.GET_TIPOS;
          this.listaTipo.unshift({ key: "0", name: "Todos" });
        });
    },
    pesquisar() {
      this.qtd = 10;
      this.infiniteId += 1;

      this.dialogFilter = false;
      this.listAmiiboFilter = this.$store.state.amiibo.GET_LISTAGEM_AMIIBOS;

      // console.log("iniciando pesquisa " + this.tipo + this.gameSerie);
      if (
        this.tipo !== "" &&
        this.tipo !== "Todos" &&
        this.tipo !== undefined
      ) {
        this.listAmiiboFilter = this.listAmiiboFilter.filter(
          x => x.type === this.tipo
        );
      }
      if (
        this.amiiboSerie !== "" &&
        this.amiiboSerie !== "Todos" &&
        this.amiiboSerie !== undefined
      ) {
        this.listAmiiboFilter = this.listAmiiboFilter.filter(
          x => x.amiiboSeries === this.amiiboSerie
        );
      }
      this.listAmiibo = this.listAmiiboFilter;
      this.tratarListaAmiibo();
    },
    tratarListaAmiibo() {
      this.listAmiiboFilter = this.listAmiibo.slice(0, this.qtd);
    },
    infiniteHandler($state) {
      if (this.qtd > this.listAmiibo.length || this.listAmiibo.length < 11) {
        $state.complete();
      }
      this.qtd += 10;
      this.tratarListaAmiibo();
      $state.loaded();
      //$state.complete();
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.requestAmiibo();
  }
};
</script>
