import { User } from '@/types/types';

const register = (user: Omit<User, 'id'> & {password: string}): Promise<User> => {
  // TODO: API
  const newId = Math.floor(Math.random() * 100 + 1);

  return new Promise((resolve, reject) => {
    if (newId >= 20) {
      resolve({ ...user, id: newId });
    } else {
      reject('error while registering');
    }
  });
};

const login = (username: string, password: string): Promise<User> => {
  // TODO: API
  const hcUser = 'user';
  const hcPassword = '123456';

  return new Promise((resolve, reject) => {
    if (username === hcUser && password === hcPassword) {
      resolve({ username, id: 0 });
    } else {
      reject('error while logging in');
    }
  });
};

export const UserAPI = {
  login,
  register,
};
