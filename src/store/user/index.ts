import { Module } from 'vuex';
import { RootState, UserState } from '@/types/types';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export const state: UserState = {
  user: undefined,
  error: false,
}

export const User: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
