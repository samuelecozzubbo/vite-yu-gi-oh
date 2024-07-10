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
        <div class="p-2 card-counter">Found {{ store.charactersList.length }} cards</div>
      </div>
    </div>
  </section>
  <section class="card-list container pb-4">
    <div v-if="!store.loading" class="row">
      <div v-for="(character, i) in store.charactersList" :key="i"
        class="col-6 col-md-3 my-col-lg-12-5 mb-2 d-flex align-items-stretch">
        <!-- Card singola -->
        <SingleCharacters :info="character" />
      </div>
    </div>
    <AppLoader v-else label="Yu-gi-oh"/>
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

.my-col-lg-12-5 {
  @media (min-width: 960px) {
    max-width: calc(100% / 5);
  }
}
</style>