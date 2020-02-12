export default {
  state: {
    tasks: [{id: 1, title: 'Hello', completed: false}]
  },
  getters: {
    taskList(state) {
      return state.tasks
    }
  },
  mutations: {
    updateTasks(state, posts) {
      state.tasks = posts;
    }
  },
  actions: {
    async fetchTasks() {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
      );
      const posts = res.json();
      return posts
    }
  },
}
