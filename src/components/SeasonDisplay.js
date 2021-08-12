import React from "react";

const determineSeason = (lat, month) => {
  let season =
    month > 0 && month < 10
      ? lat > 0
        ? "Summer"
        : "Winter"
      : lat > 0
      ? "Winter"
      : "Summer";
  return season;
};

const renderSeason = (props)=>{
  let userSeason = determineSeason(props.lat, new Date().getMonth);
  let message , reccom = "";
  let classNameOfPage = "";
  if (!props.lat && !props.err) {
    classNameOfPage = "loading";
    message = `Loading...`
    reccom=`Please allow location access`;
  }
  if (props.lat && !props.err) {
    classNameOfPage = userSeason === "summer" ? "box-summer" : "box-winter";
    message = userSeason === "summer" ? `It's hot dude` : `Brr,It's cold`;
    reccom= userSeason === "summer" ? `Grab an ice cream` : `Don't forget your girlfriend, if you have one :)`;
  }
  if (!props.lat && props.err) {
    classNameOfPage = "error";
    message = "Please allow location access";
    reccom="Your data will not be misused"
  }
  return (
    <div className={classNameOfPage}>
      <div className="display-box">
        <h1>{message}</h1>
        <p>{reccom}</p>
      </div>
    </div>
  );
}


const SeasonDisplay = (props) => {
  return(<div>
    {renderSeason(props)}
  </div>)
};

export default SeasonDisplay;
