import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  calculate,
} from './counterSlice';
import styles from './Counter.module.css';


export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [toppings,settopping]=useState('select');
  const [people,setpeople]=useState('');
  return (
    <div>
      <div className={styles.row}>
        <p>No of people</p>
        <input value={people} type="text" onChange={e =>setpeople(e.target.value)}></input>
      </div>
      <div className={styles.row}>
        <p>enter pizza toppings : </p>
       
        <select className={styles.select}
        value={toppings}
        onChange={e =>settopping(e.target.value)}>
          <option value="cheese">cheese</option>
          <option value="onion">onion</option>
          <option value="pepperoni">pepperoni</option>
          <option value="olives">olives</option>
        </select>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(calculate(Number(people)))
          }
        >
          count pizza needed
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Total price
        </button>
      </div>
    </div>
  );
}
