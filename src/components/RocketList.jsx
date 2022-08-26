import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import HardCodeRocket from './HardCodeRocket';
import Rocket from './Rocket';
import param from './testobj';

export default function RocketList() {
  const [rocketState, setRocketState] = useState([]);

  useEffect(() => {
    setRocketState(param);
    // const options = {
    //   method: 'GET',
    //   url: 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/ ',
    //   headers: {
    //     accept: 'application/json',
    //   },
    // };

    // axios.request(options).then((response) => {
    //   setRocketState(response.data.results);
    //   console.log(response.data.results);
    // }).catch((error) => {
    //   console.error(error);
    // });
  }, []);
  console.log(rocketState);
  return (
    <>
      <div className="container">
        <h1 style={{
          marginTop: '10px',
          color: 'rgba(255, 255, 255, 0.5)',
        }}
        >
          Как тебе такое, Илон Маск?

        </h1>
        {rocketState.map((el, i) => (<Rocket key={i} el={el} />))}
      </div>
    </>
  );
}
