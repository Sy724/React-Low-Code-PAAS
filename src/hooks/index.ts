// @ts-ignore
import React from 'react';
import { action, AnnotationsMap } from 'mobx';
import { useLocalObservable as useLocalObservableOriginal } from 'mobx-react-lite';

export function useLocalObservable<TStore extends Record<string, any>>(
  initializer: () => TStore,
  annotations?: AnnotationsMap<TStore, never>,
) {
  const store = useLocalObservableOriginal(initializer, annotations);
  const updateStore = action((state: Partial<typeof store>) => {
    Object.assign(store, state);
  });
  const resetStore = () => {
    updateStore(initializer());
  };
  return {
    store,
    updateStore,
    resetStore,
  };
}


export const MobXProviderContext = React.createContext<any>({});

export function useStores<T>(): T {
  return React.useContext(MobXProviderContext);
}
