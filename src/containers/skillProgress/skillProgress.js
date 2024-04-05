import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Skill Sets</h1>
            <div className="repo-cards-div-main">
              <p className="skill-line">⚡ Programming Languages: C, Java, Python, R</p>
              <p className="skill-line">⚡ Deep Understanding of ML, DL and Data Science</p>
              <p className="skill-line">⚡ Databases: MySQL, MS SQL, PostgreSQL, Snowflake</p>
              <p className="skill-line">⚡ Big Data, Data Modeling, Data Mining, Data Warehousing</p>
              <p className="skill-line">⚡ ETL Pipelines, Databricks, Spark, MS Power Query, MS Excel</p>
              <p className="skill-line">⚡ Business Intelligence: Power BI and Tableau</p>
              <p className="skill-line">⚡ Cloud Computing: AWS, GCP, Azure</p>
              <p className="skill-line">⚡ Web Development: Flask APIs and React JS</p>
            </div>
            {/* {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })} */}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
