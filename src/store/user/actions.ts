import { ActionTree } from 'vuex';
import { RootState, UserState, User } from '@/types/types';

export const actions: ActionTree<UserState, RootState> = {
  login({ state, commit }, user: User) {
    if (state.user) {
      return;
    }
    commit('login', user);
  },
};
