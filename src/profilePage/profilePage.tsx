import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import { DATA } from "../data";

type ProfileType = "recruiter" | "developer" | "stalker" | "adventure";

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundGif =
    location.state?.backgroundGif ||
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif";
  const { profileName } = useParams<{ profileName: string }>();

  const profileKey = [
    "recruiter",
    "developer",
    "stalker",
    "adventure",
  ].includes(profileName!)
    ? (profileName as ProfileType)
    : "recruiter";

  const profileConfig = DATA.profiles[profileKey];
  const role = profileConfig.role;
  const filteredProjects = DATA.projects.filter((p) => p.roles.includes(role));

  const latestProjects = [...filteredProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const categories = [
    "Latest Work",
    "Telco",
    "Beauty",
    "Tech",
    "FMCG",
    "Education",
  ];

  return (
    <div className="profile-page-container">
      <div
        className="profile-hero"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner profileName={profileKey} />
      </div>

      <div className="sections-container">
        {categories.map((cat) => {
          let catProjects = [];
          if (cat === "Latest Work") {
            catProjects = latestProjects;
          } else {
            catProjects = filteredProjects.filter((p) => p.category === cat);
          }

          if (catProjects.length === 0) return null;

          return (
            <div key={cat} className="project-section">
              <h2 className="section-title">{cat}</h2>
              <div className="project-row">
                {catProjects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card"
                    onClick={() =>
                      navigate(`/project/${project.id}`, { state: { role } })
                    }
                  >
                    <img src={project.image.url} alt={project.title} />
                    <div className="project-card-info">
                      <h3>{project.title}</h3>
                      <p>{project.date}</p>
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
