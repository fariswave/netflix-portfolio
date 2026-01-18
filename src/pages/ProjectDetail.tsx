import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { DATA } from '../data';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const project = DATA.projects.find((p) => p.id === projectId);
  
  // Use the role passed via state, or fallback to 'brandmarketing'
  const role = (location.state as { role?: string })?.role || 'brandmarketing';

  if (!project) return <div style={{ color: 'white', padding: '100px' }}>Project not found</div>;

  const projectDescription = project.description[role] || project.description['brandmarketing'];

  return (
    <div className="project-detail">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${project.image.url})` }}
      >
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <div className="meta">
            <span>{project.details?.year}</span>
            <span>{project.details?.duration}</span>
            <span>{project.details?.rating} ★</span>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="tabs">
          <button className="active">OVERVIEW</button>
          <button>GALLERY</button>
          <button>DETAILS</button>
        </div>

        <div className="overview-section">
          <p className="description">{projectDescription}</p>
          <div className="info-grid">
            <div>
              <span className="label">Starring:</span>{" "}
              {project.details?.starring}
            </div>
            <div>
              <span className="label">Created by:</span>{" "}
              {project.details?.createdBy}
            </div>
            <div>
              <span className="label">Genre:</span> {project.details?.genre}
            </div>
          </div>
        </div>

        {project.details?.gallery && project.details.gallery.length > 0 && (
          <div className="gallery-section">
            <h3 style={{ margin: '40px 0 20px' }}>Gallery</h3>
            <div className="gallery-grid">
              {project.details.gallery.map((img, i) => (
                <img key={i} src={img} alt={`Gallery ${i}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
