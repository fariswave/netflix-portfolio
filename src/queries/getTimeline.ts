import { TimelineItem } from '../types';

const TIMELINE_DATA: TimelineItem[] = [
  {
    name: 'Tech Company ABC',
    timelineType: 'work',
    title: 'Senior Full Stack Developer',
    techStack: 'React, Node.js, PostgreSQL, AWS',
    summaryPoints: [
      'Led development of microservices architecture',
      'Reduced API response time by 40%',
      'Mentored junior developers'
    ],
    dateRange: '2021 - Present'
  },
  {
    name: 'University XYZ',
    timelineType: 'education',
    title: 'Bachelor of Science in Computer Science',
    techStack: 'Data Structures, Algorithms, Database Design',
    summaryPoints: [
      'GPA: 3.8/4.0',
      'Dean\'s List for 4 semesters',
      'Computer Science Club President'
    ],
    dateRange: '2017 - 2021'
  },
  {
    name: 'Startup DEF',
    timelineType: 'work',
    title: 'Full Stack Developer',
    techStack: 'React, Firebase, Node.js',
    summaryPoints: [
      'Built real-time collaboration features',
      'Implemented user authentication system',
      'Improved code coverage to 85%'
    ],
    dateRange: '2020 - 2021'
  }
];

export async function getTimeline(): Promise<TimelineItem[]> {
  return TIMELINE_DATA;
}
