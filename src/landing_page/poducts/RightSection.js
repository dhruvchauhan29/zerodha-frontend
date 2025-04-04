import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-5 mt-5">
         <div className="p-5" style={{marginTop:"100px"}}>
         <h1>{productName}</h1>
         <p>{productDescription}</p>
         </div>
         <div>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
              className="mt-1">
              Learn more<i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mb-5">
          <img src={imageUrl} className="p-5" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
