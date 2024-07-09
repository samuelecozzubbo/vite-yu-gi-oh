<script>
export default {
    name: 'AppHeader',
    props: {
        message: String,
    }
}
</script>

<template>
    <header>
        <div class="container p-2">
            <h1>{{ message }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: white;
}
</style>