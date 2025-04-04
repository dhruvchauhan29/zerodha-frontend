import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mb-5">
          <img src={imageUrl} className="p-5"/>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try demo<i class="fa-solid fa-arrow-right-long"></i></a>
            <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn more<i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"30px"}}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
