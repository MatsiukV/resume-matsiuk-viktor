import React from 'react';
import SkillCard from '../components/SkillCard/SkillCard';
import './style.css';

const programmingLangs = [
  { 
    iconSrc: '/Skills/Next.js.png', 
    name: 'Next.js', 
    level: 'Вивчаю', 
  },
  { 
    iconSrc: '/Skills/React.js.png', 
    name: 'React.js', 
    level: 'Знайомий з технологією' 
  },
  { 
    iconSrc: '/Skills/TypeScript.png', 
    name: 'TypeScript', 
    level: 'Початковий рівень' 
  },
  { 
    iconSrc: '/Skills/HTML.png', 
    name: 'HTML5', 
    level: 'Професійне володіння' 
  },
  { 
    iconSrc: '/Skills/CSS.png', 
    name: 'CSS3', 
    level: 'Глибокі знання' 
  },
  { 
    iconSrc: '/Skills/JavaScript.png', 
    name: 'JavaScript', 
    level: 'Активно використовую' 
  },
];

const databases = [
  { 
    iconSrc: '/Skills/PostgreSQL.png', 
    name: 'PostgreSQL', 
    level: 'Розумію основи' 
  },
  { 
    iconSrc: '/Skills/MySQL.png', 
    name: 'MySQL', 
    level: 'Є досвід використання' 
  },
];

const tools = [
  { 
    iconSrc: '/Skills/Git.png', 
    name: 'Git', 
    level: 'Вільно володію' 
  },
  { 
    iconSrc: '/Skills/GitHub.png', 
    name: 'GitHub', 
    level: 'Глибокі знання' 
  },
  { 
    iconSrc: '/Skills/VSCode.png', 
    name: 'VSCode', 
    level: 'Основний інструмент' 
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Мови програмування</h2>
      <div className="skills-grid">
        {programmingLangs.map((skill) => (
          <SkillCard
            key={skill.name}
            iconSrc={skill.iconSrc}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
      <h2 className="skills-title">Бази даних</h2>
      <div className="skills-grid">
        {databases.map((skill) => (
          <SkillCard
            key={skill.name}
            iconSrc={skill.iconSrc}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
      <h2 className="skills-title">Інструменти</h2>
      <div className="skills-grid">
        {tools.map((skill) => (
          <SkillCard
            key={skill.name}
            iconSrc={skill.iconSrc}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;