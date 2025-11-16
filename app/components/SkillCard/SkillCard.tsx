import React from 'react';
import Image from 'next/image';
import './styleSkillCard.css';

interface SkillCardProps {
  iconSrc: string;      
  name: string;         
  level: string;        
  iconHasBg?: boolean;  
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  iconSrc, 
  name, 
  level, 
  iconHasBg = false 
}) => {
  const iconContainerClassName = `skill-icon-container ${iconHasBg ? 'has-bg' : ''}`;
  return (
    <div className="skill-card">
      <div className={iconContainerClassName}>
        <Image 
          src={iconSrc} 
          alt={name} 
          width={40} 
          height={40}
          className="skill-icon"
        />
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{level}</p>
    </div>
  );
};

export default SkillCard;