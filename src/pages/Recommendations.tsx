import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Professional Reference" className="profile-pic" />
          <div>
            <h3>Professional Reference</h3>
            <p>Senior Lead at Tech Co</p>
            <p className="date">2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Zahra, who has consistently demonstrated exceptional technical expertise and a passion for building high-quality products. Her ability to translate complex strategies into resonant experiences is truly impressive.</p>
          <p>During our time working together, Zahra showed a collaborative spirit that greatly contributed to our team’s success. She played a pivotal role in developing and maintaining key features, consistently delivering high-quality results while meeting project deadlines. Her proactive approach to finding innovative solutions truly sets her apart."</p>
          <p>💼 "Zahra also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams, including product managers, designers, and developers. Her professionalism, positive attitude, and dedication to her work make her an asset to any team."</p>
          <p>🌟 "I have no doubt that Zahra will be a valuable addition to any organization, and I wholeheartedly recommend her for any future opportunities."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
