import { GetterTree } from 'vuex';
import { RootState, UserState, User } from '@/types/types';

export const getters: GetterTree<UserState, RootState> = {
  currentUser(state): User | undefined {
    return state.user;
  },
};
