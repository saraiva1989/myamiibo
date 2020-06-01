<template>
  <div class="home">
    <CardAmiibo msg="Card Amiibo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardAmiibo from '@/components/CardAmiibo.vue'

export default {
  name: 'Home',
  components: {
    CardAmiibo
  }
}
</script>
