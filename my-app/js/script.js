const url = 'http://localhost/php-todo-list-json/backend/api/';

const { createApp } = Vue;

const app = createApp({
  name: 'TODO List',
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    axios.get(url).then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount('#root');
