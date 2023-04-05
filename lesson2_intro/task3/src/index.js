import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Anatolyi' }));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addUser({ id: 2, name: 'Vova' }));
store.dispatch(addUser({ id: 4, name: 'Rachock' }));
store.dispatch(deleteUser(2));
console.log(store.getState());
