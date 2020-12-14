<template>
  <div class="Todo">
    <h2>Todo Manager</h2>

    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todo",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]),

  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #cccccc;
  background: #42b983;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: #f2faff;
  font-weight: bold;
  font-size: 20px;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #ffffff;
  cursor: pointer;
}
</style>
