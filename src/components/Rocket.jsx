import React, { useEffect, useState } from 'react';

export default function Rocket({ el }) {
  const [count, setCount] = useState(1000);
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div
        className="cardTable"
        style={{
          marginBottom: '10px',
        }}
      >
        <div className="card">
          <div style={{
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
          }}
          >
            <img className="image pull-left" src={el.image} alt="q" />

          </div>
          <div className="block-text content pull-left">
            <h1>
              {el.name}
            </h1>
            <h3>
              Дата запуска (
              {el.net}
              )
            </h3>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <div>{count}</div>
            <button className="btn btn-default btn-read">
              Read more
            </button>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </>
  );
}
