import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import blueImage from "../images/blue.png";
import greyImage from "../images/grey.png";
import redImage from "../images/red.png";
import yellowImage from "../images/yellow.png";
import "./browse.css";

/* -------------------------------------------------------------------------- */
/*  Browse – page that shows a list of profile “cards” the user can pick.     */
/* -------------------------------------------------------------------------- */
const Browse: React.FC = () => {
  const navigate = useNavigate(); // Get navigation function from react‑router

  /* ---------------------------------------------------------------------- */
  /*  Data for each profile card.                                            */
  /*  - name: identifier used in the URL and for display                     */
  /*  - image: thumbnail shown on the card                                   */
  /*  - backgroundGif: animated background passed to the profile page later  */
  /* ---------------------------------------------------------------------- */
  const profiles = [
    {
      name: "creative",
      image: blueImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif", // Dark storm clouds
    },
    {
      name: "brand & marketing",
      image: greyImage,
      backgroundGif:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif", // Flickering neon lights
    },
    // {
    //   name: "stalker",
    //   image: redImage,
    //   backgroundGif:
    //     "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif", // Dark, abstract digital lights
    // },
    // {
    //   name: "adventurer",
    //   image: yellowImage,
    //   backgroundGif:
    //     "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif", // Dark ocean waves at night
    // },
  ];

  /* --------------------------------------------------------------- */
  /*  handleProfileClick – what happens when a user clicks a card?  */
  /* --------------------------------------------------------------- */
  /*  1. The function receives a **profile** object that contains:   */
  /*     • name – the identifier for the profile (e.g. "recruiter") */
  /*     • image – the thumbnail picture that was shown on the card */
  /*     • backgroundGif – an animated GIF that will be used on the   */
  /*       next page as a background                                   */
  /*                                                               */
  /*  2. `navigate` comes from the `useNavigate` hook of React‑Router.*/
  /*     It lets us change the browser’s URL **programmatically**   */
  /*     (without the user having to click a normal link).          */
  /*                                                               */
  /*  3. `navigate(`/profile/${profile.name}`, …)` builds a new URL   */
  /*     like `/profile/recruiter`. The part `${profile.name}` is   */
  /*     replaced with the actual name of the clicked profile.      */
  /*                                                               */
  /*  4. The second argument is an **options object**. We use its   */
  /*     `state` property to attach extra data to the navigation.   */
  /*     This data travels with the navigation but **does not**     */
  /*     appear in the URL, so it stays hidden from the address bar.*/
  /*                                                               */
  /*  5. Inside `state` we store:                                   */
  /*     • `profileImage` – the image file that the card displayed. */
  /*     • `backgroundGif` – the GIF URL for the background on the  */
  /*       destination page.                                         */
  /*                                                               */
  /*  6. On the target page (`/profile/:name`) you can read this     */
  /*     state via `useLocation()` from React‑Router, e.g.:          */
  /*                                                               */
  /*        const { state } = useLocation();                        */
  /*        const { profileImage, backgroundGif } = state;          */
  /*                                                               */
  /*  In short: when a card is clicked we jump to a new route that  */
  /*  includes the profile’s name, and we also pass along the image */
  /*  and GIF so the next page can display them without needing to   */
  /*  fetch them again.                                              */

  const handleProfileClick = (profile: {
    name: string;
    image: string;
    backgroundGif: string;
  }) => {
    navigate(`/profile/${profile.name}`, {
      state: {
        profileImage: profile.image,
        backgroundGif: profile.backgroundGif,
      },
    });
  };

  return (
    <div className="browse-container">
      <p className="who-is-watching">What Are You Looking For?</p>
      {/* Render each profile as a ProfileCard component */}
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
