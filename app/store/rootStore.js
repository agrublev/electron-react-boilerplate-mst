import { types as t } from 'mobx-state-tree';
const { model, optional } = t;

import CounterStore from './CounterStore.js';

const Stores = model('Stores', {
  isTest: false,
  applicationStore: optional(ApplicationStore, {}),
  componentStore: optional(ComponentStore, {}),
  sessionStore: optional(SessionStore, {}),
  groupStore: optional(GroupStore, {}),
  projectStore: optional(ProjectStore, {}),
  userStore: optional(UserStore, {})
}).actions(self => {
  return {
    afterCreate() {
      if (!self.isTest) {
        self.sessionStore.fetchSession();
      }
    }
  };
});

export default Stores;
