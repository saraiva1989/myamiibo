<style>
.mycard {
  margin-bottom: 20px;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear !important;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  /* background-color: black; */
}
.mycard__content--back b {
  padding-right: 5px;
}
.mycard__content--back {
  margin-top: 40px;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  transform: scale(-1, 1);
  position: absolute;
  width: 100%;
  display: none;
  /* display: contents; */
}

.mycard__content--front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.mycard.is-flipped {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>

<template>
  <v-container>
    <v-card
      class="mx-auto mycard"
      :id="item.tail"
      @click="detalhes(item.tail)"
      max-width="400"
      v-for="item in listAmiibo"
      :key="item.tail"
    >
      <div class="mycard__content--back" :class="item.tail">
        <v-card-title>
          <b>Game Série:</b>
          {{ item.amiiboSeries}}
        </v-card-title>
        <v-card-title>
          <b>Personagem:</b>
          {{item.character}}
        </v-card-title>
        <v-card-title v-if="item.release.eu">
          <b>Lançamento US:</b>
          {{item.release.eu}}
        </v-card-title>
        <v-card-title v-else>
          <b>Lançamento JP:</b>
          {{item.release.jp}}
        </v-card-title>
        <v-card-title>
          <b>Tipo:</b>
          {{item.type}}
        </v-card-title>
      </div>
      <div class="mycard__content--front" :class="item.tail">
        <v-img class="white--text align-end" height="100%" :src="item.image">
          <v-card-title class>{{item.character}}</v-card-title>
        </v-img>
      </div>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */

export default {
  name: "CardAmiibo",

  data: () => ({
    front: true,
    amiibo: []
  }),
    props: ["listAmiibo"],



  methods: {
    detalhes(tail) {
      document.getElementById(tail).classList.toggle("is-flipped");

      if (
        document
          .getElementById(tail)
          .getAttribute("class")
          .includes("is-flipped")
      ) {
        document.getElementsByClassName(
          "mycard__content--back " + tail
        )[0].style = "display:block";
      } else {
        document.getElementsByClassName(
          "mycard__content--back " + tail
        )[0].style = "display:none";
      }
    }
  }
};
</script>
