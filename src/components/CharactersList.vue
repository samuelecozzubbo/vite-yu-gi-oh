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
      <div class="col-6 col-md-4 col-lg-3 mb-2">
        <!-- Card singola -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>