import React from "react";
import './Disputes.scss'

function RefundAssurance() {
  return (
    <div className="ref-assurance">
      <div className="ref-assurance-inner">
        <div className="refund">
          <p className="ref-ass">Refund Assurance</p>
          <p className="ass-text">
            As long as your payment scenario falls within the coverage of our
            Payment Protection Promise, you will be entitled to a complete
            refund of your purchase.
          </p>
        </div>
        <div className="assured">
          <p className="you-assured">You’re assured if:</p>

          <div className="img-text">
            <img
              src={process.env.PUBLIC_URL + "/images/refund-connector.svg"}
              alt="progress"
            />
           <p className="assured-text">The received order differs significantly from the displayed and described item.</p>
          </div>
          <div className="img-text">
            <img
              src={process.env.PUBLIC_URL + "/images/refund-connector.svg"}
              alt="progress"
            />
            <p className="assured-text">You were billed for something you didn't buy.</p>
          </div>
          <div className="img-text">
            <img
              src={process.env.PUBLIC_URL + "/images/connector.svg"}
              alt="progress"
            />
           <p className="assured-text">Your order did not reach its destination.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundAssurance;
