import { types as t } from 'mobx-state-tree';
import { createHashHistory } from 'history';
// eslint-disable-next-line import/extensions
import CounterStore from './CounterStore.js';

export const history = createHashHistory();

const { model, optional } = t;

export const RootStore = model('RootStore', {
  isTest: false,
  counterStore: optional(CounterStore, {})
}).actions(self => {
  return {
    afterCreate() {
      console.info('STORE CREATED');
    }
  };
});
