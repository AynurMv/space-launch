import React, { useEffect, useState } from 'react';

export default function HardCodeRocket({ el }) {
  const [count, setCount] = useState(1000);
  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      {/* {setCount(1000)} */}
      <div className="cardTable">
        <div className="card">
          <img className="image pull-left" src={el} alt="q" />
          <div className="block-text content pull-left">
            <h1>
              Title Goes Here
            </h1>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            {/* <div>{count}</div> */}

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
