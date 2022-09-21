import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
export const Projects = () => {
  return (
    <>
      <div className='section'>
        <h2 className='section__title different'>Projects</h2>
        <div className='allProjects'>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97455068/176983440-fb08f9d9-1379-4d90-8222-affa3ed80864.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Get Movie Detail</h2>
                <p>
                  This is a React app created with React, Redux. This App
                  provides trending and searched movies and TV shows.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiReactrouter />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://get-movie-details.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/Ajay-Maury/Get-Movie-Details.git'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97455068/169433809-322cecc7-866a-46cc-a24c-caa63bd48f0e.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Live Weather Update</h2>
                <p>
                  It is an app created with React.js. You can search any city
                  name to get that's place weather details in real time.
                </p>
                <div>
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://weather-update.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/Ajay-Maury/Weather-Update.git'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src={project1} />
                </div>
              </div>
              <div className='project_information'>
                <h2>FAB BAG</h2>
                <p>
                  An e-commerce website that provides monthly subscriptions for
                  lady's beauty-care, skin-care, and hair-care products.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href='https://fab-bag2-0.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/Ajay-Maury/Fabbag-2.0'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img src={project2} />
                </div>
              </div>
              <div className='project_information'>
                <h2>Mamaearth</h2>
                <p>
                  An e-commerce website providing toxin-free, natural baby-care,
                  skin-care, and hair-care products.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <FaNodeJs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href='https://mamaearth-unit4.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/rasheed8123/Mamaearth-main.git'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://user-images.githubusercontent.com/97455068/166886776-8772fb11-026a-408f-b6aa-805add1c3be1.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>Weather Forecast</h2>
                <p>
                  This is a website created with HTML, CSS, JavaScript, Weather
                  API. You can gets weather updates along with google map of the
                  given city.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://weather-update-with-map.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/Ajay-Maury/Weather-Forecast.git'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DropBox Clone -Backend</h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
