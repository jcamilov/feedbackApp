import React from "react";
import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  const numbers = Array.from(Array(10).keys()).map((i) => i + 1);

  return (
    <ul className="rating">
      {numbers.map((item) => {
        return (
          <li key={item}>
            <input
              type="radio"
              id={`num${item}`}
              name="rating"
              value={`${item}`}
              checked={selected === item}
              onChange={handleChange}
            />
            <label htmlFor={`num${item}`}>{item}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
