import React from "react";
import { Section } from "../../styles/GlobalComponents";

const h2Style = {
  fontSize: "56px",
  fontWeight: "800",
  margin: "20px auto",
  WebkitTextFillColor: "transparent",
  background: "linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%)",
  WebkitBackgroundClip: "text",
};

const listStyle = {
  margin: "20px auto",
};

const liStyle = {
  margin: "10px auto",
};

const h3Style = {
  margin: "30px 0px 0px 0px",
  textDecoration: "underline",
};

const LinkStyles = {
  color: "#e4e6e7",
  textDecoration: "underline",
};


const Acomplishments = () => {
   return (
  <Section id="achievements">
    <div>
      <h2 style={h2Style}>Achievements</h2>
      <ul style={listStyle}>
        <h3 style={h3Style}><a href="https://github.com/blaze-fire/Job-A-Thon" style={LinkStyles}>Analytics Vidhya JOB-A-THON</a></h3>
        <li style={liStyle}>
          Health Insurance Lead Prediction <br /> <a href="https://datahack.analyticsvidhya.com/contest/job-a-thon/#LeaderBoard" style={LinkStyles}><b>Private LB</b></a>: 133rd Rank
        </li>
        
        <h3 style={h3Style}><a style={LinkStyles} href="https://mclick.udacity.com/z/yuxrxexjx?uid=97404e21-0103-45bb-991d-fcd609f101f6&mid=11897349-9bc8-4dde-bdc4-c64093929f17&bsft_ek=2021-06-25T16%3A32%3A51Z&bsft_mime_type=html&bsft_tv=6&bsft_lx=5">AWS Machine Learning Scholarship</a></h3>        
        <li style={liStyle}>Recipient of AWS MLE Foundations course for the AWS Machine Learning Scholarship program offered by AWS and Udacity.</li>
        
        <h3 style={h3Style}><a style={LinkStyles} href="https://github.com/blaze-fire/Hackerearth_Image_classification">HackerEarth Image Classification competition</a></h3>
        <li style={liStyle}>Developed a model that classifies images based on decor or holiday season vacations using Deep Learning. <br />
        <a style={LinkStyles} href="https://www.hackerearth.com/challenges/competitive/hackerearth-deep-learning-challenge-holidays/leaderboard/holiday-season-11-2c924626/"><b>Private LB</b></a> : 44th Rank</li>
        
        <h3 style={h3Style}><a style={LinkStyles} href="https://drive.google.com/file/d/1Me0Xfc18mXZMFhaXhMIAmSuT4Ur_D0X_/view?usp=sharing">Code with SAP Labs India</a></h3>
        <li style={liStyle}>Developed a Model agnostic Explainable AI (XAI) framework/ library that can explain the classification of different kinds of datasets.</li>

      </ul>
    </div>
  </Section>
  );
};

export default Acomplishments;
