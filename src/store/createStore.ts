import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from '../containers/TodoListPage/store';

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
