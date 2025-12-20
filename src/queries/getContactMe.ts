import { ContactMe } from '../types';

const CONTACT_DATA: ContactMe = {
  profilePicture: { url: '/images/avataar.png' },
  name: 'John Doe',
  title: 'Full Stack Developer',
  summary: 'Passionate about building amazing web experiences with modern technologies',
  companyUniversity: 'Tech Company ABC',
  linkedinLink: 'https://linkedin.com/in/johndoe',
  email: 'john@example.com',
  phoneNumber: '+1 (555) 123-4567'
};

export async function getContactMe(): Promise<ContactMe> {
  return CONTACT_DATA;
}
