<template>
  <form class="add-new-task" :filter="$emit('filter-changed-event', filter)" @submit.prevent="addNewTask">
    <label>
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </label>
    <span>
      <input type="text" v-model="newTaskDescription" placeholder="Add your new task here">
      <button type="submit">Create</button>
    </span>
  </form>
</template>

<script>
  export default {
    name: "AddTask",
    props: ['index'],
    data() {
      return {
        newTaskDescription: '',
        filter: 'all'
      }
    },
    methods: {
      addNewTask() {
        const newTask = {
          id: ((Math.random() * 10000) + 200).toFixed(0),
          title: this.newTaskDescription,
          completed: false
        };

        this.$emit('add-new-task-event', newTask);
        this.newTaskDescription = '';
      },
    },
  }
</script>

<style scoped lang="scss">
  .add-new-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 10px 0;
    span:nth-child(2) {
      width: 70%;
      text-align: right;
    }
    input, button, select {
      padding: 8px;
    }
    input {
      width: 60%;
    }
    button {
      cursor: pointer;
      margin-left: -1px;
    }
  }
</style>
