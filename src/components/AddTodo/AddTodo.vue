<template>
  <div class="AddTodo">
    <h3>Add Todo</h3>
    <form @submit.prevent="onSubmit" @keypress.enter="onSubmit">
      <input type="text" v-model="title"  placeholder="Add todos..." />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data(){
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e){
      e.preventDefault();
      this.addTodo(this.title)
      this.clear()
    },
    clear(){
      this.title = ''
    }
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #42b983;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #42b983;
  color: #fff;
  border: 1px solid #42b983;
  cursor: pointer;
}
</style>
