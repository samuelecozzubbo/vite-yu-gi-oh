<script>
import SingleCharacters from './SingleCharacters.vue';
import AppLoader from './AppLoader.vue';

//import state management store
import { store } from '../store';

export default {
  name: "CharactersList",
  components: {
    SingleCharacters,
    AppLoader,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <section class="card-counter container"></section>
  <section class="card-list container">
    <div class="row">
      <div v-for="(character, i) in store.charactersList" :key="i" class="col-6 col-md-3 col-lg-2 mb-2 gx-2">
        <!-- Card singola -->
        <SingleCharacters :info="character" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card-list {
  background-color: white;
}
</style>