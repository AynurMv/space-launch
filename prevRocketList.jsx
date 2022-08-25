import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function RocketList() {
  const [rocketState, setRocketState] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  const curDate = new Date();
  const futureDate = new Date('December 17, 2022 03:24:00');

  const options = {
    method: 'GET',
    url: 'https://ll.thespacedevs.com/2.2.0/launch/upcoming/ ',
    headers: {
      accept: 'application/json',
    },
  };

  axios.request(options).then((response) => {
    setRocketState(response.data.results);
    console.log(response.data.results);
  }).catch((error) => {
    console.error(error);
  });
  const photos = [
    'https://naked-science.ru/wp-content/uploads/2016/07/field_image_00roket2016.jpg',
    'https://cdni.rt.com/russian/images/2019.12/article/5e08973802e8bd0fd23e9dc9.jpg',
    'https://images.nplus1.ru//images/2020/09/10/4e553fffbe9fd0d6cfbf1433b0342018.jpg',
    'https://ksonline.ru/wp-content/uploads/2020/12/1568051900_e-news.su_1X.jpg',
    'https://www.inform.kz/radmin/news/2022/05/14/220514203030747a3933100i.jpg',
  ];
  return (
    <>
      <div className="container">
        <h1>Upcoming launches</h1>
        {rocketState.length ? rocketState.map((el) => (
          <>
            {setCount(1000)}
            {/* rocketState.net - curDate */}
            <div className="cardTable">
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
                  <h4>
                    {el.name}
                  </h4>
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
        ))
          : photos.map((el) => (
            <>
              {setCount(1000)}
              {/* futureDate - curDate */}
              <div className="cardTable">
                <div className="card">
                  <img className="image pull-left" src={el} alt="q" />
                  <div className="block-text content pull-left">
                    <h4>
                      Title Goes Here
                    </h4>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <div>{count}</div>
                    <br />

                    <button className="btn btn-default btn-read">
                      Read more
                    </button>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
