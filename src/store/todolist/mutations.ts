import { MutationTree } from 'vuex';
import { Task, TodoListState } from '@/types/types';

export const mutations: MutationTree<TodoListState> = {
  addTask(state, task: Task) {
    state.tasks = [...state.tasks, task];
  },

  updateTasks(state, tasks) {
    state.error = false;
    state.tasks = tasks;
  },

  removeTask(state, id) {
    state.tasks = state.tasks.filter((task, n) => n !== id);
  },

  toggleDoneTask(state, id: number) {
    const task = state.tasks.find(task => task.id === id);
    if (!task) {
      state.error = true;
      return;
    }

    task.done = !task.done;
  },

  errorTasks(state, error) {
    state.error = true;
    state.tasks = [];
  },
};
