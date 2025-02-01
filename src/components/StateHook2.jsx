import { useState } from 'react';

const StateHook2 = () => {
  const [car, setCar] = useState({
    brand: 'Ferrari',
    color: 'red',
    model: 'Roma',
    year: 2023,
  });

  const changeColor = () => {
    setCar((prev) => ({ ...prev, color: 'blue' }));
  };
  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default StateHook2;
