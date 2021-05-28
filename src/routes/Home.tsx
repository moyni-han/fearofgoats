import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import fallImg from '../fall.png';

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
        <div className="title">FEAR OF GOATS</div>
      </div>
      <div className="section" id="fall-section">
        <div className="section-header">&gt; THE FALL COLLECTION</div>
        <div className="section-big-desc">
          DEFINITIVE. <br />
          UNIQUE. <br />
          GOATS.
        </div>

        {/* Inefficient but whatever, also imagine commenting jsx */}
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
      {scroll > window.innerHeight / 2 && <Footer opacity={(scroll - window.innerHeight / 2) / (window.innerHeight / 6)} />}
    </div>
  );
}
