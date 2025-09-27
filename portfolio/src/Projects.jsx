import React from "react";
import ProjectCard from "./components/ProjectCard";

function Projects(){

    return(
        <>
         <section id="projects">
                    <h1>My Projects</h1>
                    <p className="head">Data Analysis</p>
                    <div className="data-container">
                        <p>Excel</p>
                        <div className="excel-cards">
                            <ProjectCard className="card"
                            title="Medical Insurance Costs"
                            imgSrc="/medCost.png" 
                            description="Analyzed a healthcare dataset to uncover cost drivers such as age, BMI, and smoking habits.
                             Created visualizations showing how lifestyle choices affect insurance charges. Future extension includes building a predictive model.  
                                 Tools: Excel"
                                 githubLink="https://github.com/PerfectSeven/medical-insurance-cost-analysis"
                            />
                            <ProjectCard className="card" 
                            title=" Retail Sales Overview" 
                            imgSrc="/retail.png"
                            description="This Excel-based project showcases my ability to transform raw retail sales data into meaningful insights. Using pivot tables, slicers, and an interactive dashboard, I visualized sales performance, top categories, and seasonal trends. The dashboard allows users to explore the data dynamically, supporting data-driven decision-making" 
                            githubLink="https://github.com/PerfectSeven/retail-sales-analysis"
                            />
                            <ProjectCard className="card" 
                            title=" Spotify Churn Overview" 
                            imgSrc="/spotify.png"
                            description="An interactive Spotify churn dashboard analyzing user activity, subscription types, and churn trends. It provides insights into which factors drive user retention or churn." 
                            githubLink="https://github.com/PerfectSeven/spotify-churn-analysis"
                            />
                        </div>
                        <p>SQL and Tableau</p>
                        <div className="SQL-cards">
                            <ProjectCard className="card"
                            title="Amazon Sales Project"
                            imgSrc="/amazonshot.png" 
                            description=""
                            />
                            <ProjectCard className="card"
                            title="Retail Sales Performance Analysis"
                            imgSrc="/retail_sales_shot.png" 
                            description="This project demonstrates the ability to extract actionable insights from a transactional sales dataset using SQL. Key analyses include:
                                Ranking products by sales quantity and revenue to identify best-sellers.
                                Calculating average transaction value per customer to segment high-value customers.
                                Analyzing total revenue by store, city, and customer demographics to inform strategic decisions.
                                Tracking yearly revenue trends to uncover growth patterns and seasonal effects.
                                Skills Demonstrated: SQL joins, aggregations (SUM, AVG), grouping (GROUP BY), ordering, and creating meaningful business insights from raw transactional data."
                            githubLink="https://github.com/PerfectSeven/retail-performace-analysis"
                            />
                           <ProjectCard className="card"
                            title="Retail Sales Performance Visualization"
                            imgSrc="/Tab_retail_dash.png" 
                            description=""
                            githubLink="https://github.com/PerfectSeven/Retail-data-analysis/tree/main"
                            />
                        </div>
                        
                    </div>
                    <p class="head">Frontend Development</p>
                    <div className="front-container">
                        <div className="data-cards">
                            <ProjectCard className="card"
                            title="Task App"
                            imgSrc="/task_app.png" 
                            description="A gamified React task manager for children aged 6–12. Includes progress tracking, animated interactions, and daily resets for fresh tasks."
                            githubLink="https://github.com/PerfectSeven/task_app"
                            />
                            <ProjectCard className="card"
                            title="Pepsi site"
                            imgSrc="/pepsi.png" 
                            description=""
                            githubLink="https://github.com/PerfectSeven/pepsi-site/tree/main"
                            />
                           <ProjectCard className="card"
                            title="Crystal Design site"
                            imgSrc="/crystal_design.png" 
                            description="A responsive and modern React website for a fictional design company. Showcases clean UI, branding sections, and portfolio highlights."
                            githubLink="https://github.com/PerfectSeven/crystal-designs-site"
                            />
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <h1>Let's Work together</h1>
                    <h2>CRYSTAL OBIDIKE</h2>
                    <form className="contact-me">
                        <a href="mailto:obidikecrystal@gmail.com" target="_blank">
                        <input type="email" name="name" placeholder="EMAIL ME TO GET STARTED" />
                        </a>
                        
                    </form>
                    <a href="#home" className="return">Back to Home</a>
                    <img src="Photo6.jpg"></img>
                    
                </section>
            
        </>
    )
}
export default Projects