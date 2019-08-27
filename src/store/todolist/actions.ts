import { ActionTree } from 'vuex';
import { RootState, Task, TodoListState } from '@/types/types';

export const actions: ActionTree<TodoListState, RootState> = {
  fetchTasks({ commit }) {
    // TODO: replace with actual API call
    const fetchedPromise: Promise<ReadonlyArray<Task>> = Promise.resolve([{
      title: 'Implement backend',
      content: 'this is all frontend right now',
      dateCreated: 1566871840140,
      done: false,
    },{
      title: 'Implement state',
      content: 'state should work',
      dateCreated: 1566871840140,
      done: true,
    }]);

    fetchedPromise.then(taskList => {
      commit('updateTasks', taskList);
    }).catch(error => {
      commit('errorTasks', error);
    });
  },

  removeTask({ commit }, id) {
    commit('removeTask', id);
  }
}