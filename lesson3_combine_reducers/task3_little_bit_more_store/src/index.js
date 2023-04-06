import store from './store';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());
store.dispatch(setUser({ name: 'misha' }));
store.dispatch(setUser({ name: 'vasya' }));
store.dispatch(removeUser());
store.dispatch(setLanguage('ua'));
store.dispatch(addProduct({ id: 15, name: 'sperma konya' }));
store.dispatch(addProduct({ id: 1, name: 'lopata' }));
store.dispatch(removeProduct(15));
