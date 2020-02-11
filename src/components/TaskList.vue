<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="task.name" :index="index">
        <span>
          <label>
            <input type="checkbox" @change="task.completed = !task.completed">
          </label>
          <strong>{{index + 1}}.</strong>
          <span :class="{'completed-task': task.completed}">{{task.title | uppercase}}</span>
        </span>
      <button class="remove-button" @click="$emit('remove-task-event', task.id)">&times;</button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TaskList',
    props: {
      tasks: {
        type: Array,
        required: true
      }
    },
    filters: {
      uppercase(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      text-align: left;
      display: flex;
      border: 1px solid lightgray;
      justify-content: space-between;
      margin: 0.5rem;
      padding: 1rem 1rem;
      &:hover {
        background-color: #f5f5f5;
      }

      input {
        cursor: pointer;
      }

      input, strong {
        margin-right: 0.5rem;
      }

      span.completed-task {
        text-decoration: line-through;
      }

      .remove-button {
        cursor: pointer;
        border: none;
        border-radius: 50%;
        background-color: darkgray;
        color: #fff;
        opacity: 85%;
        width: 20px;
        height: 20px;
        max-width: 20px;
        max-height: 20px;
      }
    }
  }
</style>
