const { createApp } = Vue;
createApp({
  data() {
    return {
      header: "todolist",
      newTodo: "",
      todo: [
        { status: false, text: "看電視" },
        { status: false, text: "打電動" },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo == "") {
        return;
      }
      const temp = { status: false, text: this.newTodo };
      this.todo.push(temp);
      console.table(this.todo);
    },
    deleteTodo(i) {
      this.todo.splice(i, 1);
    },
    finishTodo(i) {
      this.todo[i].status = true;
      console.table(this.todo);
    },
  },
}).mount("#app");
