import React from "react";
import "./styleEducation.css";

const Education: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-details-part">
        <div className="details-content-wrapper">
          <h2 className="section-title">Освіта</h2>
          <div className="education-cards-container">
            <div className="education-card">
              <h3 className="card-title">Магістерський ступінь</h3>
              <p className="card-university">Херсонський державний університет</p>
              <p className="card-specialty">Інженерія програмного забезпечення</p>
              <p className="card-dates">вер. 2025 р. - гру 2026 р.</p>
            </div>
            <div className="education-card">
              <h3 className="card-title">Бакалаврський ступінь</h3>
              <p className="card-university">Херсонський державний університет</p>
              <p className="card-specialty">Інженерія програмного забезпечення</p>
              <p className="card-dates">жов. 2023 р. - чер. 2025 р.</p>
            </div>
            <div className="education-card">
              <h3 className="card-title">Ступінь молодшого спеціаліста</h3>
              <p className="card-university">Херсонський національний технічний університет</p>
              <p className="card-specialty">Інженерія програмного забезпечення</p>
              <p className="card-dates">вер. 2019 р. - чер. 2023 р.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;