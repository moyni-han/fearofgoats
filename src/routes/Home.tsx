import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import fallImg from '../fall.png';
import summerImg from '../summer.png';

export default function Home() {
  let [scroll, setScroll] = useState(0);

  useEffect(() => {
    function onScroll() {
      console.log('eee');
      console.log(scroll);
      setScroll(window.scrollY);
    }

    console.log('e');
    window.addEventListener('scroll', onScroll);
    //return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <div>
      <div className="section" id="title-section">
        <div className="title">SUMMER 2021</div>
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

        <img src={summerImg} alt="hoodie" className="section-img" id="summer-img" />
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
      </div>
      {scroll > window.innerHeight / 2 && <Footer opacity={(scroll - window.innerHeight / 2) / (window.innerHeight / 6)} />}
    </div>
  );
}
