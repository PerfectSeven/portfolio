import React, { useState } from "react";

function ProjectCard({ title, imgSrc, description, githubLink }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      
      <div className="project-card" onClick={() => setShowModal(true)}>
        <img src={imgSrc} alt={title} className="card-img" />
        <h3>{title}</h3>
      </div>

      
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <img src={imgSrc} alt={title} className="modal-img" />
            <h2>{title}</h2>
            <p className="modal-description">{description}</p>
            <div className="modal-buttons">
              <button onClick={() => setShowModal(false)}>Close</button>
              <a href={githubLink}  target="_blank" rel="noopener noreferrer">
                <button>View on GitHub</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
