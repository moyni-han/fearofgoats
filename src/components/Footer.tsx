import React from 'react';

export default function Footer(props: { opacity: number }) {
  return (
    <div className="footer" style={{ opacity: props.opacity }}>
      © 2021 FEAR OF GOATS. All Rights Reserved.
      <div className="links">
        <a href="/">Diversity</a>
        <div className="link-seperator">|</div>
        <a href="/">Sustainability</a>
        <div className="link-seperator">|</div>
        <a href="/">Privacy Policy</a>
      </div>
    </div>
  );
}
