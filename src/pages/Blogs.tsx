import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "Brand Storytelling in the Digital Age",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@zahrapratiwi",
    description: "Exploring the evolution of brand narratives in a multi-platform world.",
  },
  {
    title: "User-Centric Design Principles",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@zahrapratiwi",
    description: "How to place empathy at the core of your creative process.",
  },
  {
    title: "Modern Marketing Frameworks",
    platform: "Dev.to",
    icon: <FaDev />,
    link: "https://dev.to/zahrapratiwi",
    description: "A deep dive into agile marketing strategies for growth.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on brand marketing and creative strategy.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
