import { types as t, flow, getRoot } from 'mobx-state-tree';

const {
  model,
  optional,
  map,
  union,
  reference,
  string,
  frozen,
  boolean,
  number,
  array
} = t;

const Model = {
  counter: 0
};

const Actions = self => ({
  increment() {
    self.counter += 1;
  },
  decrement() {
    self.counter -= 1;
  }
});

const Views = self => ({
  get getCount() {
    return self.counter;
  }
});

const CounterStore = model('CounterStore', Model)
  .views(Views)
  .actions(Actions);

export default CounterStore;
