import React from "react";
import "./styleBriefDescription.css";

const BriefDescription: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-details-part">
        <div className="details-content-wrapper">
          <h2 className="section-title">Коротка відомість</h2>
          <div className="content-box">
            <p className="about-paragraph">
              Цілеспрямований студент факультету комп'ютерних наук, фізики та математики (ХДУ). 
              Моя пристрасть — це веб-розробка, зі спеціалізацією на створенні full-stack 
              додатків з використанням сучасних фреймворків.
            </p>
            <p className="about-paragraph">
              Маю практичний досвід роботи над реальним проектом — сайтом фандрайзингу 
              для університету. Проект успішно функціонує та виконує поставлені вимоги, 
              що дозволило мені відточити навички на практиці.
            </p>
            <p className="about-paragraph">
              Моя мета — розпочати кар'єру у web development. Я активно шукаю можливості 
              для стажування або позицію Junior Full-stack / Frontend Developer, де я 
              зможу застосувати свої знання для вирішення складних завдань.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefDescription;