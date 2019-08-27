import { MutationTree } from 'vuex';
import { UserState, User } from '@/types/types';

export const mutations: MutationTree<UserState> = {
  login(state, user: User) {
    state.error = false;
    state.user = user;
  },

  logout(state) {
    state.error = false;
    state.user = undefined;
  }
}