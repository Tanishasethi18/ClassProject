import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const About = () => {
  const globalData = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(globalData);

  return (
    <div style={{ backgroundColor: "yellow", color: "black" }}>
      <h1>This is About page</h1>
      <h1>Counter: {globalData.value}</h1>

      {/* Only render user info if it exists */}
      {globalData.user && (
        <>
          <h2>User name = {globalData.user.Name}</h2>
          <h3>User email = {globalData.user.email}</h3>
        </>
      )}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default About;
