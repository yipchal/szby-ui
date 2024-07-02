<template>
  <div id="app">
    <MyTable :columns="columns" :data="data" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      columns: [
        { label: 'Name', prop: 'name' },
        { label: 'Age', prop: 'age' },
        { label: 'Address', prop: 'address' }
      ],
      data: [
        { id: 1, name: 'John Doe', age: 28, address: '123 Main St' },
        { id: 2, name: 'Jane Smith', age: 34, address: '456 Maple Ave' },
        { id: 3, name: 'Sam Johnson', age: 45, address: '789 Oak Dr' }
      ]
    }
  }
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
