import React from "react";
import '../getStarted/GetStarted.scss'

function BusinessOverview() {
  return (
    <div className="business-overview">
      <div className="business-overview-inner">
        <div className="progress-business-menu">
          <img
            src={process.env.PUBLIC_URL + "/images/progress-icon.svg"}
            alt="progress"
          />
          <div className="business-menu">
            {/*  eslint-disable-next-line */}
            <a href= "#" className="business-overview-text">Business OverView</a>
            <a href= "#introduction" className="text">- Introduce Your Business</a>
            <a href= "#utilise" className="text">- Utilise Flick </a>
            <a href= "#information" className="text">- Additional Information</a>
          </div>
        </div>
        <div className="icon-menu">
          <img
            src={process.env.PUBLIC_URL + "/images/short-progress-icon.svg"}
            alt="progress"
          />
          <a href= "#director" className="item">Directors</a>
        </div>
        <div className="icon-menu">
          <img
            src={process.env.PUBLIC_URL + "/images/short-progress-icon.svg"}
            alt="progress"
          />
          <a href="#person" className="item">Shareholders</a>
        </div>
        <div className="icon-menu">
          <img
            src={process.env.PUBLIC_URL + "/images/short-progress-icon.svg"}
            alt="progress"
          />
          <a  href="#political" className="item">PEPs (Optional)</a>
        </div>
        <div className="icon-menu">
          <img
            src={process.env.PUBLIC_URL + "/images/single-progress-icon.svg"}
            alt="progress"
          />
          <a href="#document" className="item">Documents</a>
        </div>
      </div>
    </div>
  );
}

export default BusinessOverview;
