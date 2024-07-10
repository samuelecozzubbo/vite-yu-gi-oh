<script>
export default {
  name: "AppLoader",
  props: ['label'],
}
</script>

<template>
  <div class="loader">
    <div class="lightning"></div>
    <div class="text">{{ label }}</div>
  </div>
</template>



<style lang="scss" scoped>
@keyframes lightning {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  75% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #bababa;
}

.image {
  width: 50px;
  height: 100px;
  background: url('../assets/vue.svg') no-repeat center center;
  background-size: contain;
  animation: image 1.5s infinite;
  border: 5px solid #fff; 
}

.text {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
}
</style>
