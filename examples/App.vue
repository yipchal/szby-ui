<template>
  <div id="app">
    <MyCard imgSrc="bg-top.png" summary="Hello World1"></MyCard>
    <MyCard imgSrc="dashboard1920.png" summary="Hello World2">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">A</div>
          <div class="price">188$</div>
        </div>
      </template>
    </MyCard>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
