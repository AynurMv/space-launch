import React, { useEffect, useState } from 'react';

export default function Rocket({ el }) {
  const dateOfLaunch = Date.parse(el.net);
  const currDate = Date.parse(new Date());
  const allSeconds = Math.floor((dateOfLaunch - currDate) / 1000);

  const [count, setCount] = useState(allSeconds);
  //   console.log(count);

  useEffect(() => {
    const id = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  function dhm(t) {
    const cd = 24 * 60 * 60; // SecPerDay
    const ch = 60 * 60; // SecPerHour
    let d = Math.floor(t / cd);
    let h = Math.floor((t - d * cd) / ch);
    let m = Math.round((t - d * cd - h * ch) / 60);
    const s = Math.round(t - d * cd - h * ch - m * 60 + 30);
    if (s === 0) {
      m -= 1;
    //   s = 60;
    }
    if (m === 0) {
      h -= 1;
      m = 59;
    }
    if (h === 0) {
      d -= 1;
      h = 23;
    }
    return [d, h, m, s];// moment
  }

  const dateOfLaunchNewFormat = (new Date(el.net)).toLocaleDateString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

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
            <h3>
              {el.name}
            </h3>
            <div>
              {el.launch_service_provider.name}
            </div>
            <div>
              {el.pad.location.name}
            </div>
            <h4>
              До запуска осталось:
            </h4>
            <div className="parent">
              <div className="timeContainer">
                <div className="time center">
                  <div>{dhm(count)[0]}</div>
                  <div>Дн</div>
                </div>
                <div className="time center">
                  <div>{dhm(count)[1]}</div>
                  <div>Ч</div>
                </div>
                <div className="time center">
                  <div>{dhm(count)[2]}</div>
                  <div>Мин</div>
                </div>
                <div className="time center">
                  <div>{dhm(count)[3]}</div>
                  <div>Сек</div>
                </div>
              </div>
            </div>
            <div className="dateOfLaunch">
              {dateOfLaunchNewFormat}
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </>
  );
}
