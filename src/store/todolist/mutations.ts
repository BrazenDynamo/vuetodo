import { MutationTree } from 'vuex';
import { TodoListState } from '@/types/types';

export const mutations: MutationTree<TodoListState> = {
  updateTasks(state, tasks) {
    state.error = false;
    state.tasks = tasks;
  },

  removeTask(state, id) {
    state.tasks = state.tasks.filter((task, n) => n !== id);
  },

  errorTasks(state, error) {
    state.error = true;
    state.tasks = [];
  }
}