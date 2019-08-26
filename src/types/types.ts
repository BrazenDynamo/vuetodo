export interface Task {
  title?: string,
  content: string,
  dateCreated: number,
  dateDue?: number,
  done: boolean,
}

export interface User {
  id: number,
  username: string,
}

export interface RootState {
  version: string;
}

export interface TodoListState {
  tasks: ReadonlyArray<Task>,
  error: boolean,
}

export interface UserState {
  user?: User,
  error: boolean;
}
