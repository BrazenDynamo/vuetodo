import { ActionTree } from 'vuex';
import { RootState, Task, TodoListState } from '@/types/types';

export const actions: ActionTree<TodoListState, RootState> = {
  fetchTasks({ commit }) {
    // TODO: replace with actual API call
    const fetchedPromise: Promise<ReadonlyArray<Task>> = Promise.resolve([{
      id: 1,
      title: 'Implement backend',
      content: 'this is all frontend right now',
      dateCreated: 1566871840140,
      done: false,
    }, {
      id: 2,
      title: 'Implement state',
      content: 'state should work',
      dateCreated: 1566871840140,
      done: true,
    }]);

    fetchedPromise.then((taskList) => {
      commit('updateTasks', taskList);
    }).catch((error) => {
      commit('errorTasks', error);
    });
  },

  addTask({ commit }, task: Task) {
    // TODO: API
    Promise.resolve(task) // replace with http request
      .then(() => {
        commit('addTask', task);
      });
  },

  toggleDoneTask({ commit }, id: number) {
    commit('toggleDoneTask', id);
  },

  removeTask({ commit }, id) {
    commit('removeTask', id);
  },
};
