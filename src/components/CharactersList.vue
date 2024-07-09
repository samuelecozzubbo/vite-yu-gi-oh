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
  <section class="container pt-4">
    <div class="row ">
      <div class="col-12">
        <div class="px-2 card-counter">Found {{ store.charactersList.length }} cards</div>
      </div>
    </div>
  </section>
  <section class="card-list container pb-4">
    <div class="row">
      <div v-for="(character, i) in store.charactersList" :key="i"
        class="col-6 col-md-3 col-lg-2 mb-2 d-flex align-items-stretch">
        <!-- Card singola -->
        <SingleCharacters :info="character" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  background-color: white;
}

.card-counter {
  background-color: #212529;
  color: white;
}
</style>