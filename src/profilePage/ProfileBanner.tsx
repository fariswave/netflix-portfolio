import React, { useEffect, useState } from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";
import { getProfileBanner } from "../queries/getProfileBanner";
import { ProfileBanner as ProfileBannerType } from "../types";

type Props = {
  /** nama profil yang dipilih, misalnya "developer" */
  profileName: string;
};

/* --------------------------------------------------------------- */
/*  ProfileBanner – menampilkan banner utama pada halaman profil.  */
/*  Mengambil data secara async, lalu menampilkan judul, ringkasan,*/
/*  serta tombol “Resume” (buka PDF) dan “LinkedIn”.               */
/* --------------------------------------------------------------- */
const ProfileBanner: React.FC<Props> = ({ profileName }) => {
  /* ----------------------------------------------------------- */
  /*  State untuk menyimpan data banner yang di‑fetch dari API.   */
  /*  Awalnya null → menandakan data belum tersedia.             */
  /* ----------------------------------------------------------- */
  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  /* ----------------------------------------------------------- */
  /*  useEffect dengan dependency array kosong [] berarti:       */
  /*  - kode di dalamnya dijalankan sekali, setelah komponen      */
  /*    pertama kali dirender (mirip componentDidMount).          */
  /*  - di sini kita memanggil fungsi async `fetchData` untuk    */
  /*    mengambil banner lewat `getProfileBanner()`.               */
  /* ----------------------------------------------------------- */
  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner(profileName); // ambil data dari server
      setBannerData(data); // simpan ke state
    }
    fetchData();
  }, [profileName]); // ← kosong → hanya sekali

  /* ----------------------------------------------------------- */
  /*  Jika data belum selesai di‑fetch, tampilkan indikator      */
  /*  loading sederhana.                                         */
  /* ----------------------------------------------------------- */
  if (!bannerData) return <div>Loading...</div>;

  /* ----------------------------------------------------------- */
  /*  Handler untuk tombol “Resume”. Buka link PDF di tab baru.  */
  /* ----------------------------------------------------------- */
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, "_blank");
  };

  /* ----------------------------------------------------------- */
  /*  Handler untuk tombol “LinkedIn”. Buka profil LinkedIn di    */
  /*  tab baru.                                                  */
  /* ----------------------------------------------------------- */
  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">
          {bannerData.headline}
        </h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
