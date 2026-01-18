import { Project } from './types';

export const DATA = {
  profiles: {
    recruiter: {
      categories: ['Latest Work', 'Telco', 'Tech', 'FMCG'],
      role: 'brandmarketing',
      label: 'Recruiter'
    },
    developer: {
      categories: ['Latest Work', 'Tech', 'Education'],
      role: 'creative',
      label: 'Developer'
    },
    stalker: {
      categories: ['Latest Work', 'Beauty', 'Education'],
      role: 'creative',
      label: 'Stalker'
    },
    adventure: {
      categories: ['Latest Work', 'Telco', 'Tech', 'Education'],
      role: 'brandmarketing',
      label: 'Adventurer'
    }
  },
  projects: [
    {
      id: 'p1',
      title: 'Telco App Redesign',
      description: {
        brandmarketing: 'Project focused on increasing user retention for a major Telco provider through data-driven marketing and UI enhancements.',
        creative: 'A visual overhaul of the Telco mobile app, focusing on modern aesthetics and smooth animations to appeal to a younger demographic.'
      },
      techUsed: 'React, Figma',
      image: { url: 'https://picsum.photos/seed/telco/400/300' },
      category: 'Telco',
      roles: ['brandmarketing', 'creative'],
      date: '2023-11-01',
      details: {
        year: '2023',
        duration: '3 months',
        rating: '9.5',
        starring: 'User Experience Team',
        createdBy: 'Design Lead',
        genre: 'Mobile App',
        gallery: [
          'https://picsum.photos/seed/telco1/800/600',
          'https://picsum.photos/seed/telco2/800/600'
        ],
        videos: []
      }
    },
    {
      id: 'p2',
      title: 'Beauty Brand Campaign',
      description: {
        brandmarketing: 'A strategic brand marketing campaign that boosted online sales by 25% through targeted social media and influencer outreach.',
        creative: 'Captivating visual storytelling and high-end photography for a luxury beauty brand, emphasizing elegance and natural beauty.'
      },
      techUsed: 'Adobe Suite, Social Media',
      image: { url: 'https://picsum.photos/seed/beauty/400/300' },
      category: 'Beauty',
      roles: ['creative', 'brandmarketing'],
      date: '2023-08-15',
      details: {
        year: '2023',
        duration: '1 month',
        rating: '9.0',
        starring: 'Creative Team',
        createdBy: 'Creative Director',
        genre: 'Marketing',
        gallery: [
          'https://picsum.photos/seed/beauty1/800/600'
        ],
        videos: []
      }
    },
    {
      id: 'p3',
      title: 'Cloud Infrastructure Tech',
      description: {
        brandmarketing: 'Showcasing technical excellence to potential investors, highlighting reliability and scalability for enterprise clients.',
        creative: 'Visualizing abstract cloud concepts through clean, technical diagrams and a professional UI dashboard.'
      },
      techUsed: 'AWS, Terraform',
      image: { url: 'https://picsum.photos/seed/tech/400/300' },
      category: 'Tech',
      roles: ['brandmarketing', 'creative'],
      date: '2023-12-10',
      details: {
        year: '2023',
        duration: '6 months',
        rating: '9.8',
        starring: 'DevOps Team',
        createdBy: 'CTO',
        genre: 'Infrastructure',
        gallery: [],
        videos: []
      }
    },
    {
      id: 'p4',
      title: 'FMCG Supply Chain',
      description: {
        brandmarketing: 'Optimizing supply chain visibility for FMCG brands, ensuring products reach consumers efficiently and sustainably.',
        creative: 'Designing an intuitive dashboard for logistics managers to track inventory and shipments in real-time.'
      },
      techUsed: 'React, Node.js',
      image: { url: 'https://picsum.photos/seed/fmcg/400/300' },
      category: 'FMCG',
      roles: ['brandmarketing'],
      date: '2023-05-20',
      details: {
        year: '2023',
        duration: '4 months',
        rating: '8.5',
        starring: 'Logistics Team',
        createdBy: 'Product Manager',
        genre: 'Logistics',
        gallery: [],
        videos: []
      }
    },
    {
      id: 'p5',
      title: 'Education Platform',
      description: {
        brandmarketing: 'Driving student enrollment through a user-friendly education platform with integrated progress tracking.',
        creative: 'Creating an engaging and colorful learning environment for children, focusing on accessibility and gamification.'
      },
      techUsed: 'React, Typescript',
      image: { url: 'https://picsum.photos/seed/edu/400/300' },
      category: 'Education',
      roles: ['brandmarketing', 'creative'],
      date: '2024-01-05',
      details: {
        year: '2024',
        duration: '5 months',
        rating: '9.2',
        starring: 'Education Content Team',
        createdBy: 'Academic Lead',
        genre: 'E-Learning',
        gallery: [],
        videos: []
      }
    }
  ]
};
