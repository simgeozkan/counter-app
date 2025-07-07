import React, { useState } from 'react';
import './App.css'; // Eğer CSS ayrı dosyadaysa

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Sayı Sayacı</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Artır</button>
        <button onClick={() => setCount(count - 1)}>Azalt</button>
        <button onClick={() => setCount(0)}>Sıfırla</button>
      </div>
    </div>
  );
}

export default App;
