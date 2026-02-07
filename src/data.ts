import { Project, Skill, Certification, TimelineItem, ContactMe, ProfileBanner, WorkPermit } from './types';

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
  banners: {
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
    }
  } as Record<string, ProfileBanner>,
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
  ],
  skills: [
    { name: 'TypeScript', category: 'Programming Language', description: 'Strongly typed JavaScript', icon: 'SiTypescript' },
    { name: 'React', category: 'Frontend Framework', description: 'JavaScript library for building UIs', icon: 'SiReact' },
    { name: 'Node.js', category: 'Backend Runtime', description: 'JavaScript runtime for server-side', icon: 'SiNodedotjs' },
    { name: 'GraphQL', category: 'API Query Language', description: 'Query language for APIs', icon: 'SiGraphql' },
    { name: 'PostgreSQL', category: 'Database', description: 'Relational database', icon: 'SiPostgresql' },
    { name: 'Docker', category: 'DevOps', description: 'Containerization platform', icon: 'SiDocker' }
  ],
  certifications: [
    { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', issuedDate: '2023-06', link: 'https://aws.amazon.com/', iconName: 'SiAmazon' },
    { title: 'Google Cloud Professional', issuer: 'Google Cloud', issuedDate: '2023-03', link: 'https://cloud.google.com/', iconName: 'SiGoogle' },
    { title: 'Certified Kubernetes Administrator', issuer: 'Linux Foundation', issuedDate: '2022-12', link: 'https://www.cncf.io/', iconName: 'SiKubernetes' },
    { title: 'React Advanced Certification', issuer: 'Udemy', issuedDate: '2022-09', link: 'https://www.udemy.com/', iconName: 'SiReact' }
  ],
  timeline: [
    { name: 'Tech Company ABC', timelineType: 'work', title: 'Senior Full Stack Developer', techStack: 'React, Node.js, PostgreSQL, AWS', summaryPoints: ['Led development of microservices architecture', 'Reduced API response time by 40%', 'Mentored junior developers'], dateRange: '2021 - Present' },
    { name: 'University XYZ', timelineType: 'education', title: 'Bachelor of Science in Computer Science', techStack: 'Data Structures, Algorithms, Database Design', summaryPoints: ['GPA: 3.8/4.0', 'Dean\'s List for 4 semesters', 'Computer Science Club President'], dateRange: '2017 - 2021' },
    { name: 'Startup DEF', timelineType: 'work', title: 'Full Stack Developer', techStack: 'React, Firebase, Node.js', summaryPoints: ['Built real-time collaboration features', 'Implemented user authentication system', 'Improved code coverage to 85%'], dateRange: '2020 - 2021' }
  ],
  contact: {
    profilePicture: { url: "/images/avataar.png" },
    name: "Zahra Sausan Pratiwi",
    title: "The Most Amazing Woman in the World",
    summary: "Passionate about building amazing web experiences with modern technologies",
    companyUniversity: "Tech Company ABC",
    linkedinLink: "https://linkedin.com/in/johndoe",
    email: "john@example.com",
    phoneNumber: "+1 (555) 123-4567",
  },
  workPermit: {
    visaStatus: 'H-1B Visa',
    expiryDate: new Date('2026-10-01'),
    summary: 'Currently authorized to work in the United States under H-1B visa sponsorship',
    additionalInfo: 'Valid work permit allowing employment with current employer until October 2026. Can be extended upon request.'
  }
};
