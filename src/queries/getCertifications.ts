import { Certification } from '../types';

const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issuedDate: '2023-06',
    link: 'https://aws.amazon.com/',
    iconName: 'SiAmazon'
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    issuedDate: '2023-03',
    link: 'https://cloud.google.com/',
    iconName: 'SiGoogle'
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'Linux Foundation',
    issuedDate: '2022-12',
    link: 'https://www.cncf.io/',
    iconName: 'SiKubernetes'
  },
  {
    title: 'React Advanced Certification',
    issuer: 'Udemy',
    issuedDate: '2022-09',
    link: 'https://www.udemy.com/',
    iconName: 'SiReact'
  }
];

export async function getCertifications(): Promise<Certification[]> {
  return CERTIFICATIONS_DATA;
}
