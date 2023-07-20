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
        res.data.push(this.newTask);

        this.tasks.push(this.newTask);
        this.newTask = '';
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
