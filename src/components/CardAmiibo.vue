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
      v-for="item in amiibo"
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
        <v-card-title>
          <b>Lançamento:</b>
          {{item.release.eu}}
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
    amiibo: [
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
        name: "Mario",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21"
        },
        tail: "00000002",
        type: "Figure"
      },
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Peach",
        gameSeries: "Super Mario",
        head: "00020000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00010002.png",
        name: "Peach",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21"
        },
        tail: "00010002",
        type: "Figure"
      }
    ]
  }),
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
      console.log(tail);
    }
  }
};
</script>
