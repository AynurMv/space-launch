import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HardCodeRocket from './HardCodeRocket';
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
        <h1 style={{
          marginTop: '10px',
        }}
        >
          Как тебе такое, Илон Маск?

        </h1>
        {
            rocketState.length
              ? rocketState.map((el) => (<Rocket el={el} />))
              : photos.map((el) => (<HardCodeRocket el={el} />))
        }
      </div>
    </>
  );
}
