import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row mt-5 p-3">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row text-muted"
        style={{ lineHeight: "1.8em", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\WhatsApp Image 2024-07-20 at 02.21.04_19bfb6fb.jpg"
            style={{ width: "50%", borderRadius: "100%" }}
            className="ml-5"
          />
          <h4 className="mt-5">Dhruv chauhan</h4>
          <h6>Founder CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Dhruv bootstrapped and founded Zerodha in 2024 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href=""style={{textDecoration:"none"}}>TradingQnA</a> / <a href=""style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
