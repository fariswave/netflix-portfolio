import { ProfileBanner } from '../types';

const PROFILE_BANNER_DATA: ProfileBanner = {
  backgroundImage: { url: 'https://via.placeholder.com/1200x400?text=Profile+Banner' },
  headline: 'Full Stack Developer & Tech Enthusiast',
  resumeLink: { url: 'https://example.com/resume.pdf' },
  linkedinLink: 'https://linkedin.com/in/johndoe',
  profileSummary: 'Building innovative solutions with modern web technologies. Passionate about clean code and great user experiences.'
};

export async function getProfileBanner(): Promise<ProfileBanner> {
  return PROFILE_BANNER_DATA;
}
