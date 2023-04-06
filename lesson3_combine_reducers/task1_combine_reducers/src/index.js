import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.dispatch(addUser({ id: 1, name: 'Anatolyi' }));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(increment());
store.dispatch(addUser({ id: 2, name: 'Vova' }));
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(addUser({ id: 4, name: 'Rachock' }));
store.dispatch(reset());
store.dispatch(deleteUser(2));
store.dispatch(increment());
store.dispatch(updateUser(1, { name: 'kazakh', work: 'vodila' }));
