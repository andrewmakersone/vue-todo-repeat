<template>
  <div>
    <AddTask @add-new-task-event="addNewTask" @filter-changed-event="selectedFilter"></AddTask>
    <Loader v-if="isLoading"></Loader>
    <TaskList v-else-if="!isLoading && filteredTasks.length" :tasks="filteredTasks" @remove-task-event="removeTask"></TaskList>
    <p v-else>No tasks. Please add one!</p>
  </div>
</template>

<script>
  import AddTask from "../components/AddTask";
  import TaskList from "../components/TaskList";
  import Loader from "../components/Loader";
  export default {
    name: "Tasks",
    data() {
      return {
        tasks: [],
        isLoading: true,
        filter: ''
      }
    },
    mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.tasks = json;
            this.isLoading = false;
          },1000);
        })
    },
    methods: {
      addNewTask(task) {
        this.tasks.push(task)
      },
      removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
      },
      selectedFilter(filter) {
        this.filter = filter
      }
    },
    computed: {
      filteredTasks() {
        if (this.filter === 'all') {
          return this.tasks
        } else if (this.filter === 'completed') {
          return this.tasks.filter(task => task.completed)
        } else if (this.filter === 'not-completed') {
          return this.tasks.filter(task => !task.completed)
        } else {
          return this.tasks
        }
      }
    },
    components: {
      AddTask, TaskList, Loader
    }
  }

</script>

<style scoped>

</style>
