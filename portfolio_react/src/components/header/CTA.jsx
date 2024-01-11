import React from "react";
import CV from "../../assests/Parth's Resume updated.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Parth Gupta Resume" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
