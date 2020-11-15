import { Action, ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

const browserStorageEnabled = (storage: Storage): boolean => {
  try {
    storage.setItem('olegacy.storage-check', 'enabled');
    storage.removeItem('olegacy.storage-check');
    return true;
  } catch (error) {
    return false;
  }
};

function memoryStorageSync<T>(reducer: ActionReducer<T>): ActionReducer<T> {
  return (state: T, action: Action): T => reducer(state, action);
}

function browserStorageSync<T>(reducer: ActionReducer<T>, keys: string[], storage: Storage): ActionReducer<T> {
  const storageEnabled = browserStorageEnabled(storage);

  if (storageEnabled) {
    return localStorageSync({
      keys,
      storage,
      rehydrate: true
    })(reducer);
  }
  return memoryStorageSync(reducer);
}

export function browserLocalStorageSync<T>(reducer: ActionReducer<T>, keys: string[]): ActionReducer<T> {
  return browserStorageSync(reducer, keys, localStorage);
}

export function browserSessionStorageSync<T>(reducer: ActionReducer<T>, keys: string[]): ActionReducer<T> {
  return browserStorageSync(reducer, keys, sessionStorage);
}
