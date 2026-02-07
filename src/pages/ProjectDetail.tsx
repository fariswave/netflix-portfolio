import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { DATA } from "../data";
import "./ProjectDetail.css";

// Functional component untuk halaman detail proyek
const ProjectDetail: React.FC = () => {
  // Mendapatkan parameter projectId dari URL (misal: /projects/123)
  const { projectId } = useParams<{ projectId: string }>();

  // useLocation untuk mengakses state yang dikirim via navigasi
  const location = useLocation();

  // Mencari proyek berdasarkan ID dari data yang tersedia
  const project = DATA.projects.find((p) => p.id === projectId);

  // Mengambil role dari state navigasi (jika ada), default ke 'brandmarketing'
  // location.state berisi data yang dikirim via navigate('/path', { state: { role: 'creative' } })
  const role = (location.state as { role?: string })?.role || "brandmarketing";

  // Fallback UI jika proyek tidak ditemukan
  if (!project)
    return (
      <div style={{ color: "white", padding: "100px" }}>Project not found</div>
    );

  // WARNING: Line ini mengandung type error TypeScript!
  // TypeScript tidak tahu bahwa `role` (string) bisa jadi key dari `project.description`
  // project.description mungkin bertipe: { brandmarketing: string; creative: string; }
  const projectDescription =
    (project.description as any)[role] || project.description["brandmarketing"];

  return (
    <div className="project-detail">
      {/* Hero section dengan background gambar proyek */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${project.image.url})` }}
      >
        {/* Overlay gelap untuk kontras teks */}
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <div className="meta">
            {/* Menampilkan detail metadata proyek */}
            <span>{project.details?.year}</span>{" "}
            {/* Optional chaining untuk handle undefined */}
            <span>{project.details?.duration}</span>
            <span>{project.details?.rating} ★</span>
          </div>
        </div>
      </div>

      {/* Container utama untuk konten */}
      <div className="content-container">
        {/* Tab navigation (saat ini hanya OVERVIEW yang aktif) */}
        <div className="tabs">
          <button className="active">OVERVIEW</button>
          <button>GALLERY</button>
          <button>DETAILS</button>
        </div>

        {/* Bagian overview proyek */}
        <div className="overview-section">
          {/* Deskripsi proyek berdasarkan role yang dipilih */}
          <p className="description">{projectDescription}</p>

          {/* Grid informasi tambahan */}
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

        {/* Conditional rendering untuk gallery - hanya tampil jika ada data */}
        {project.details?.gallery && project.details.gallery.length > 0 && (
          <div className="gallery-section">
            <h3 style={{ margin: "40px 0 20px" }}>Gallery</h3>
            <div className="gallery-grid">
              {/* Loop melalui semua gambar gallery */}
              {project.details.gallery.map((img, i) => (
                <img
                  key={i} // Index sebagai key (baik untuk data statis, hindari untuk data dinamis)
                  src={img}
                  alt={`Gallery ${i}`} // Alt text bisa diperbaiki dengan deskripsi lebih baik
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
