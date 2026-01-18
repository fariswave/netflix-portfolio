import { ProfileBanner } from "../types";

/* --------------------------------------------------------------- */
/*  Data banner per‑profil (contoh sederhana).                     */
/*  Pada proyek nyata biasanya data di‑ambil dari server/API.     */
/* --------------------------------------------------------------- */

const BANNERS: Record<string, ProfileBanner> = {
  creative: {
    backgroundImage: {
      url: "https://via.placeholder.com/1200x400?text=Recruiter+Banner",
    },
    headline: "Zahra Pratiwi - Senior Creative",
    resumeLink: { url: "https://example.com/recruiter-resume.pdf" },
    linkedinLink: "https://linkedin.com/in/recruiter",
    profileSummary:
      "Creative marketer with 9+ years of experience turning products into meaningful brand stories through sharp positioning, deep consumer insight, and full-funnel campaigns, bridging product value with real user relevance to drive tangible business outcomes.",
  },
  brandmarketing: {
    backgroundImage: {
      url: "https://via.placeholder.com/1200x400?text=Developer+Banner",
    },
    headline: "Zahra Pratiwi - Brand Marketer",
    resumeLink: { url: "https://example.com/developer-resume.pdf" },
    linkedinLink: "https://linkedin.com/in/developer",
    profileSummary:
      "Creative brand marketer with 9+ years of experience translating strategy into resonant campaigns across telco, FMCG, beauty, education, and tech brands. Fluent in both strategic and creative thinking, transforming brand direction into relevant, multi-platform campaigns that drive trust, engagement, and growth.",
  },
  // stalker: {
  //   backgroundImage: {
  //     url: "https://via.placeholder.com/1200x400?text=Stalker+Banner",
  //   },
  //   headline: "Security Analyst & Ethical Hacker",
  //   resumeLink: { url: "https://example.com/stalker-resume.pdf" },
  //   linkedinLink: "https://linkedin.com/in/stalker",
  //   profileSummary:
  //     "Finding vulnerabilities before the bad guys do. Skilled in penetration testing.",
  // },
  // adventure: {
  //   backgroundImage: {
  //     url: "https://via.placeholder.com/1200x400?text=Adventurer+Banner",
  //   },
  //   headline: "Adventure Seeker & Content Creator",
  //   resumeLink: { url: "https://example.com/adventure-resume.pdf" },
  //   linkedinLink: "https://linkedin.com/in/adventurer",
  //   profileSummary:
  //     "Exploring the world and sharing stories. Passionate about travel photography.",
  // },
};

/* --------------------------------------------------------------- */
/*  Fungsi yang dipanggil oleh komponen.                           */
/*  Parameter `profileName` menentukan banner mana yang dikembalikan.*/
/* --------------------------------------------------------------- */
export async function getProfileBanner(
  profileName: string
): Promise<ProfileBanner> {
  // Jika nama tidak dikenal, fallback ke banner default (misal recruiter)
  const banner = BANNERS[profileName] ?? BANNERS["recruiter"];
  return banner;
}
