import { Module } from 'vuex';
import { RootState, TodoListState } from '@/types/types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export const state: TodoListState = {
  tasks: [],
  error: false,
}

export const TodoList: Module<TodoListState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
