import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    title: 'Netflix Portfolio',
    description: 'A portfolio website styled like Netflix interface',
    techUsed: 'React, TypeScript, CSS3',
    image: { url: 'https://via.placeholder.com/300x200?text=Portfolio' }
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    techUsed: 'React, Node.js, PostgreSQL, Stripe',
    image: { url: 'https://via.placeholder.com/300x200?text=Ecommerce' }
  },
  {
    title: 'Real Estate Dashboard',
    description: 'Interactive dashboard for property management',
    techUsed: 'React, GraphQL, Node.js',
    image: { url: 'https://via.placeholder.com/300x200?text=RealEstate' }
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application with WebSocket support',
    techUsed: 'React, Node.js, Socket.io, MongoDB',
    image: { url: 'https://via.placeholder.com/300x200?text=Chat' }
  }
];

export async function getProjects(): Promise<Project[]> {
  return PROJECTS_DATA;
}
