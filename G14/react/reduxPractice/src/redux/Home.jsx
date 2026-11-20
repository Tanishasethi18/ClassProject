import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Home = () => {
  const ctx = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(ctx);

  return (
    <div style={{ backgroundColor: "brown", color: "white" }}>
      <h1>This is Home page</h1>
      <h1>Counter: {ctx.value}</h1>

      {/* Only render user info if it exists */}
      {ctx.user && (
        <>
          <h2>User name = {ctx.user.Name}</h2>
          <h3>User email = {ctx.user.email}</h3>
        </>
      )}

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Home;
