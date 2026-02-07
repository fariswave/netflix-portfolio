import React, { useEffect, useState } from "react";
import "./WorkPermit.css";
import { DATA } from "../data";
import { WorkPermit as IWorkPermit } from "../types";
const WorkPermit: React.FC = () => {
  const workPermitData = DATA.workPermit;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>{workPermitData.visaStatus}</strong> 🛂,
          which allows me to work in the UK! 🇬🇧 My visa is valid until{" "}
          <strong>
            {new Date(workPermitData.expiryDate).toLocaleDateString()}
          </strong>{" "}
          📅, giving me the opportunity to build valuable experience and grow my
          career here. 🌟
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
