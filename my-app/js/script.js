const url = 'http://localhost/php-todo-list-json/backend/api/';

const { createApp } = Vue;

const app = createApp({
  name: 'TODO List',
  data() {
    return {
      tasks: [],
      newTask: '',
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
      console.log('data', data);
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      axios.post(url, data, config).then((res) => {
        res.data.forEach((task, i) => {
          if (task.id == currentId) {
            console.log('MATCHED TASK', task);
            this.tasks[i].done = !this.tasks[i].done;
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
