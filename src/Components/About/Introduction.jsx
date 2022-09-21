import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Profile-pic.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Ram Karan</span> and I am
                from{" "}
                <span className="different">
                  {" "}
                  Hardoi , Uttar Pradesh (India).{" "}
                </span>
               i am Student of Bachelor of Technology 3rd year in Information Technology at {" "}
                <span className="different">KNIT Sultanpur</span> 
              </h4>
              <h4>to pursue my dream of becoming a Software Engineer:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Quick Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Critical thinking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
