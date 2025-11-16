import React from 'react';
import Image from 'next/image';
import './styleSkillCard.css';

interface SkillCardProps {
  iconSrc: string;      
  name: string;         
  level: string;        
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  iconSrc, 
  name, 
  level, 
}) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-container">
        <Image 
          src={iconSrc} 
          alt={name} 
          width={50} 
          height={50}
          className="skill-icon"
        />
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{level}</p>
    </div>
  );
};

export default SkillCard;