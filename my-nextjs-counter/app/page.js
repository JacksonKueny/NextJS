// app/page.js
"use client";  // Required to use React hooks

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
      <main style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Welcome to My Next.js Counter App! By: Jackson Kueny</h1>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement} style={{ marginLeft: '10px' }}>-</button>
      </main>
  );
}
