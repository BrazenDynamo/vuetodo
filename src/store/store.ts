import { RootState } from '@/types/types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { TodoList as todolist } from './todolist';
import { User as user } from './user';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.1',
  },
  modules: {
    todolist,
    user,
  },
};

export default new Vuex.Store<RootState>(store);
