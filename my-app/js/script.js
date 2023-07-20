const url = 'http://localhost/php-todo-list-json/backend/api/';

const { createApp } = Vue;

const app = createApp({
  name: 'TODO List',
  data() {
    return {
      tasks: [],
      newTask: '',
      currentId: null,
    };
  },
  methods: {
    addTask() {
      const data = { task: this.newTask };

      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      axios.post(url, data, config).then((res) => {
        this.tasks = res.data;
        this.newTask = '';
      });
    },

    setDone(currentId) {
      const data = { id: currentId };
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      axios.post(url, data, config).then((res) => {
        res.data.forEach((task, i) => {
          if (task.id == currentId) {
            this.tasks[i].done = !this.tasks[i].done;
          }
        });
      });
    },

    deleteTask(currentId) {
      const data = { id: currentId, deleted: true };
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      axios.post(url, data, config).then((res) => {
        res.data.forEach((task, i) => {
          if (task.id == currentId) {
            this.tasks[i].deleted = !this.tasks[i].deleted;
          }
        });
      });
    },
  },
  created() {
    axios.get(url).then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount('#root');
