<template>
    <div id="app">
        <body><Todo /></body>
        <Copyright />
    </div>
</template>

<script>
import Todo from './components/Todo';
import Copyright from './components/Copyright';

export default {
    name: "App",
    components: {Todo, Copyright},
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
body {
    min-height: calc(100vh - 80px);
}
</style>
