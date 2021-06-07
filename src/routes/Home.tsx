import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import fallImg from '../fall.png';
import summerImg from '../summer.png';

export default function Home() {
  let [scroll, setScroll] = useState(0);
  let [timerText, setTimerText] = useState('');

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  // Run this code once
  useEffect(() => {
    // Trigger a date update every .2 seconds
    const eventDate = new Date('July 5, 2021 15:37:25');
    let interval = setInterval(() => {
      setTimerText(parseDate(eventDate));
    }, 200);

    // in useEffect, you return the cleanup function. This will be run when the component unmounts.
    return () => clearInterval(interval);
  }, []); // useEffect will fire whenever the variables in the array change. Since it's empty, it will only run once.

  return (
    <div>
      <div className="section" id="title-section">
        <div className = "title">FEAR OF GOATS</div>
      </div>
      <div className ="section" id = "title-section">
         <div className="title">{timerText}</div>
      </div>


      
      <div className="section" id="summer-section">
        <div className="section-header">&gt; THE SUMMER COLLECTION</div>
        <div className="section-big-desc">
          NEW. <br />
          CLASSY. <br />
          GOATS.
        </div>

        {/* Inefficient but whatever, also imagine commenting in jsx */}
        <div className="img-decal">
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS
        </div>

        <img src={summerImg} alt="skateboarder" className="section-img" id="summer-img" />
      </div>
      <div className="section" id="fall-section">
        <div className="section-header">&gt; THE FALL COLLECTION</div>

        <div className="section-big-desc">
          UNIQUE. <br />
          DEFINITIVE. <br />
          GOATS.
        </div>

        {/* Inefficient but whatever, also imagine commenting in jsx */}
        <div className="img-decal">
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS <br />
          FEAR OF GOATS
        </div>

        <img src={fallImg} alt="hoodie" className="section-img" id="fall-img" />
      </div>
      <div className="section" id="spring-section">
        <div className="section-header">&gt; WHISPERS OF SPRING</div>
        <div className="spring-decal">WHISPERS OF SPRING WHISPERS OF SPRING WHISPERS OF SPRING</div>
        <div className="spring-decal s1">WHISPERS OF SPRING WHISPERS OF SPRING WHISPERS OF SPRING</div>
        <div className="spring-decal s2">WHISPERS OF SPRING WHISPERS OF SPRING WHISPERS OF SPRING</div>

        <div className="center">THE GOATS COME OUT TO PLAY</div>
        <div className = "centerindent">NEXT RELEASE:</div>
        <div className="timer">{timerText}</div>
     
      </div>
      {scroll > window.innerHeight / 2 && <Footer opacity={(scroll - window.innerHeight / 2) / (window.innerHeight / 6)} />}
    </div>
  );
}

function parseDate(date: Date) {
  let diff = new Date(date.getTime() - Date.now()).getTime();

  console.log(diff, date.getTime(), Date.now());

  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = String(Math.floor(diff / 1000 / 60 / 60) % 24).padStart(2, '0');
  let m = String(Math.floor(diff / 1000 / 60) % 60).padStart(2, '0');
  let s = String(Math.floor(diff / 1000) % 60).padStart(2, '0');

  if (d > 0) return `${d}:${h}:${m}:${s}`;
  else return `${h}:${m}:${s}`;
}
