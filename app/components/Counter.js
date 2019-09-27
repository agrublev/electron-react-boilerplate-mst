import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Counter.css';

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props.store.counterStore;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>Counter: {counter}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

export default inject('store')(observer(Counter));
