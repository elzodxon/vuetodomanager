<template>
  <div id="app">
    <div class="container">
      <AddTodo/>
      <FilterTodos/>
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo/Todo";
import AddTodo from "@/components/AddTodo/AddTodo";
import FilterTodos from "@/components/Filter/FilterTodos";

export default {
  name: "App",
  components: {
    FilterTodos,
    AddTodo,
    Todo,
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  background: #f2faff;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: auto;
}
</style>
