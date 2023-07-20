const { createApp } = Vue;

const app = createApp({
  name: 'TODO List',
  data() {
    return {
      tasks: ['Comprare le bistecche', 'Prendere da Bere', 'Pulire casa', 'Preparare la brace', 'Cucinare'],
    };
  },
});

app.mount('#root');
