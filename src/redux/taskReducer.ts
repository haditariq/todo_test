import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  title: string
}
type Tasks = {
  tasks: []
}
export const initialState: Tasks = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>): void => {
      state.tasks.push(action.payload);
    },
  },
});

export const usersSelector = state => state.tasks;

const taskReducer = tasksSlice.reducer;
export const { setList, addTask } = tasksSlice.actions;

export default taskReducer;
