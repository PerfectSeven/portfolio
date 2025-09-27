import React, { useEffect, useRef } from "react"; 
import Typed from "typed.js";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";


function Body(){
    const el = useRef(null);
   

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "Data Analyst"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div>
                <section id="home">
                    <div>
                        <h1>Crystal Obidike</h1>
                        <h2><span ref={el} className="highlight"></span></h2>
                        <p><i>Turning ideas into beautiful, functional solutions.</i></p>
                        <a href="mailto:obidikecrystal@gmail.com" target="_blank">
                        <button className="firstbtn ">Work with me</button>
                        </a>
                    </div>
                    <div className="home-image">
                        <div className="img-container">
                        <img src="Photo7.JPG" alt="Photo1" />
                        </div>
                    </div>
                </section>

                <section className="aboutpage">
                     <div className="about-me">
                            <div className="about-image">
                                <img src="Photo1.jpeg" alt="Photo1" />
                            </div>
                        </div>
                     
                    <div id="about">
                            <div>
                                <h1>About Me</h1>
                                <p>Hi, I'm Crystal Obidike. I bridge the gap between design, code, and data.<br />
                                    As a Frontend Developer, I craft responsive, accessible, and engaging web experiences.<br />
                                    As a Data Analyst, I work with numbers and patterns to uncover insights that support better decision-making.<br />
                                    My journey has been fueled by curiosity, continuous learning, and a drive to solve problems creatively.<br />
                                    I'm excited to keep growing while contributing to projects that make an impact.<br /></p>
                                <div className="btns">
                                    <button className="download-btn"><i class="fa-solid fa-download"></i> Download CV</button>
                                    <a href="#projects">
                                    <button className="project-btn">
                                        View Projects
                                    </button>
                                    </a>
                                </div>
                            </div>
                            
                    </div>
                       

                   
                    
                </section>
                <section className="Skill-sec">
                            <div>
                                <h2 className="Skills">Skills</h2>
                                <div className="icons">
                                    <DiHtml5 className="css-icon"  color="#E34F26"/>
                                    <DiCss3 className="css-icon" color="#1572B6" width="20px"/>
                                    <DiJsBadge className="css-icon" color="yellow" />
                                    <DiReact className="css-icon" color="purple"/>
                                    <DiNodejs className="css-icon" color="green" width="50px"/>
                                    <img className="css-icon" src="./logo.png" />
                                    <img className="css-icon" src="./mysql.png" width="50px"/>
                                    <img className="css-icon"src="icons8-tableau-software-48.png" width="50px"/>
                                </div>
                            </div>
                        </section>
            </div>
        </>
    );
};
export default Body;