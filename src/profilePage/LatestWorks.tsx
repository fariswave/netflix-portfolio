import React from "react";
import { useNavigate } from "react-router-dom"; // Hook untuk navigasi antar halaman
import "./LatestWorks.css";
// Import ikon-ikon dari react-icons untuk visual tambahan
import {
  FaPassport,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaHandsHelping,
  FaProjectDiagram,
  FaEnvelope,
  FaMusic,
  FaBook,
} from "react-icons/fa";

// Definisi tipe profil yang valid
type ProfileType = "creative" | "brandmarketing";

// Interface untuk props komponen
interface LatestWorksProps {
  profile: ProfileType;
}

// Konfigurasi top picks untuk setiap jenis profil
const latestWorksConfig = {
  // Konfigurasi untuk profil recruiter dengan berbagai pilihan kartu
  creative: [
    {
      title: "Project 1",
      imgSrc: "https://picsum.photos/seed/workpermit/250/200",
      icon: <FaPassport />,
      route: "/work-permit",
    },
    {
      title: "Project 2",
      imgSrc: "https://picsum.photos/seed/skills/250/200",
      icon: <FaCode />,
      route: "/skills",
    },
    {
      title: "Project 3",
      imgSrc: "https://picsum.photos/seed/workexperience/250/200",
      icon: <FaBriefcase />,
      route: "/work-experience",
    },
    {
      title: "Project 4",
      imgSrc: "https://picsum.photos/seed/certifications/250/200",
      icon: <FaCertificate />,
      route: "/certifications",
    },
    {
      title: "Project 5",
      imgSrc: "https://picsum.photos/seed/recommendations/250/200",
      icon: <FaHandsHelping />,
      route: "/recommendations",
    },
    {
      title: "Project 6",
      imgSrc: "https://picsum.photos/seed/projects/250/200",
      icon: <FaProjectDiagram />,
      route: "/projects",
    },
    {
      title: "Project 7",
      imgSrc: "https://picsum.photos/seed/contact/250/200",
      icon: <FaEnvelope />,
      route: "/contact-me",
    },
  ],
  brandmarketing: [
    {
      title: "Project 1",
      imgSrc: "https://picsum.photos/seed/coding/250/200",
      route: "/skills",
      icon: <FaCode />,
    },
    {
      title: "Project 2",
      imgSrc: "https://picsum.photos/seed/development/250/200",
      route: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Project 3",
      imgSrc: "https://picsum.photos/seed/badge/250/200",
      route: "/certifications",
      icon: <FaCertificate />,
    },
    {
      title: "Project 4",
      imgSrc: "https://picsum.photos/seed/work/250/200",
      route: "/work-experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Project 5",
      imgSrc: "https://picsum.photos/seed/networking/250/200",
      route: "/recommendations",
      icon: <FaHandsHelping />,
    },
    {
      title: "Project 6",
      imgSrc: "https://picsum.photos/seed/connect/250/200",
      route: "/contact-me",
      icon: <FaEnvelope />,
    },
  ],
};

// Komponen utama TopPicksRow dengan TypeScript React Functional Component
const LatestWorks: React.FC<LatestWorksProps> = ({ profile }) => {
  // Gunakan hook useNavigate untuk perpindahan halaman
  const navigate = useNavigate();

  // Ambil konfigurasi top picks sesuai dengan profil yang diberikan
  const latestWorksData = latestWorksConfig[profile];

  return (
    <div className="top-picks-row">
      {/* Judul dinamis berdasarkan profil */}
      <h2 className="row-title">Latest Works</h2>
      <div className="card-row">
        {/* Mapping setiap item top picks menjadi kartu yang dapat diklik */}
        {latestWorksData.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(pick.route)} // Navigasi ke rute terkait saat kartu diklik
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            {/* Gambar untuk setiap kartu */}
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />

            {/* Overlay dengan label */}
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
