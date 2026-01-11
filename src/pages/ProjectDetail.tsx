import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DATA } from '../data';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = DATA.projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail">
      <div className="hero-section" style={{ backgroundImage: `url(${project.image.url})` }}>
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
          <p className="description">{project.description}</p>
          <div className="info-grid">
            <div>
              <span className="label">Starring:</span> {project.details?.starring}
            </div>
            <div>
              <span className="label">Created by:</span> {project.details?.createdBy}
            </div>
            <div>
              <span className="label">Genre:</span> {project.details?.genre}
            </div>
          </div>
        </div>

        {project.details?.gallery && project.details.gallery.length > 0 && (
          <div className="gallery-section">
            <h3>Gallery</h3>
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
