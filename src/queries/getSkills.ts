import { Skill } from '../types';

const SKILLS_DATA: Skill[] = [
  {
    name: 'TypeScript',
    category: 'Programming Language',
    description: 'Strongly typed JavaScript',
    icon: 'SiTypescript'
  },
  {
    name: 'React',
    category: 'Frontend Framework',
    description: 'JavaScript library for building UIs',
    icon: 'SiReact'
  },
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    description: 'JavaScript runtime for server-side',
    icon: 'SiNodedotjs'
  },
  {
    name: 'GraphQL',
    category: 'API Query Language',
    description: 'Query language for APIs',
    icon: 'SiGraphql'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Relational database',
    icon: 'SiPostgresql'
  },
  {
    name: 'Docker',
    category: 'DevOps',
    description: 'Containerization platform',
    icon: 'SiDocker'
  }
];

export async function getSkills(): Promise<Skill[]> {
  return SKILLS_DATA;
}
