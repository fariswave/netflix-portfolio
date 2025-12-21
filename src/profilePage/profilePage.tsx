import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";

/* --------------------------------------------------------------- */
/*  Type that lists all valid profile identifiers.                 */
/*  Helps TypeScript ensure we only use one of these strings.      */
/* --------------------------------------------------------------- */
type ProfileType = "creative" | "brandmarketing" | "stalker" | "adventure";

const ProfilePage: React.FC = () => {
  /* ----------------------------------------------------------- */
  /*  1️⃣  Get the navigation state that was passed from Browse.   */
  /*      `useLocation()` returns an object like:                */
  /*      { pathname: '/profile/recruiter', state: { … } }       */
  /* ----------------------------------------------------------- */
  const location = useLocation();

  /* ----------------------------------------------------------- */
  /*  2️⃣  Extract the background GIF URL from that state.        */
  /*      If the previous page didn’t provide one, fall back to */
  /*      a default GIF so the page always has a background.    */
  /* ----------------------------------------------------------- */
  const backgroundGif =
    location.state?.backgroundGif ||
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF

  /* ----------------------------------------------------------- */
  /*  3️⃣  Baca segmen dinamis dari URL (misalnya /profile/:profileName) */
  /*      - Route didefinisikan dengan placeholder `:profileName`   */
  /*        yang akan berisi nama profil yang dipilih (recruiter,   */
  /*        developer, dst.).                                      */
  /*      - `useParams()` (hook react‑router) mengembalikan sebuah  */
  /*        objek berisi semua parameter yang ada di URL.          */
  /*      - Dengan destructuring `{ profileName }` kita dapat      */
  /*        nilai aktual dari URL, misalnya "recruiter".           */
  /*      - Nilai ini selanjutnya dipakai untuk menyesuaikan      */
  /*        konten halaman profil.                                 */
  /* ----------------------------------------------------------- */
  const { profileName } = useParams<{ profileName: string }>();

  /* ----------------------------------------------------------- */
  /*  4️⃣  Validate the `profileName` against the list of allowed  */
  /*      profiles. If the URL contains an unknown name we       */
  /*      default to "recruiter". This prevents TypeScript errors */
  /*      and ensures the rest of the UI receives a valid value. */
  /* ----------------------------------------------------------- */
  const profile = [
    "creative",
    "brandmarketing",
    "stalker",
    "adventure",
  ].includes(profileName!)
    ? (profileName as ProfileType)
    : "brandmarketing";
  return (
    <>
      {/* ------------------------------------------------------- */}
      {/*  Page container with the chosen background GIF as CSS   */}
      {/*  background-image. The inline style lets us use the URL */}
      {/*  from `backgroundGif` directly.                         */}
      {/* ------------------------------------------------------- */}
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        {/* Header/banner for the profile (e.g., name, avatar) */}
        <ProfileBanner profileName={profile} />
      </div>
      {/* ------------------------------------------------------- */}
      {/*  Below the banner we render two sections that depend on */}
      {/*  the selected profile:                               */}
      {/*   • TopPicksRow – shows recommended items for that    */}
      {/*     profile type.                                      */}
      {/*   • ContinueWatching – shows content the user was     */}
      {/*     previously watching, also filtered by profile.    */}
      {/* ------------------------------------------------------- */}
      {/* <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} /> */}
    </>
  );
};

export default ProfilePage;
