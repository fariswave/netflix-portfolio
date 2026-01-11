import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import { DATA } from '../data';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; 
  const { profileName } = useParams<{ profileName: string }>();

  const profileKey = ['recruiter', 'developer', 'stalker', 'adventure'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'recruiter';

  const profileConfig = DATA.profiles[profileKey];
  // Filter projects by role first
  const roleProjects = DATA.projects.filter(p => p.roles.includes(profileConfig.role));

  return (
    <div className="profile-page-container">
      <div
        className="profile-hero"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>

      <div className="sections-container">
        {profileConfig.categories.map(cat => {
          // Filter projects by category, or show all for 'Latest Work'
          const catProjects = roleProjects.filter(p => p.category === cat || cat === 'Latest Work');
          if (catProjects.length === 0) return null;

          return (
            <div key={cat} className="project-section">
              <h2 className="section-title">{cat}</h2>
              <div className="project-row">
                {catProjects.map(project => (
                  <div 
                    key={project.id} 
                    className="project-card"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <img src={project.image.url} alt={project.title} />
                    <div className="project-card-info">
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;

