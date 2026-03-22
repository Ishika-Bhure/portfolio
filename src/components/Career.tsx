import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Experience & Achievements</h4>
                <h5>Smart India Hackathon (SIH 2025)</h5>
              </div>
              <h3>2024–2025</h3>
            </div>
            <p>
              Participated in 5 hackathons across 2024–2025 including Smart India Hackathon (SIH 2025). Selected in internal round of SIH 2025. Worked as a frontend developer in team-based hackathon projects. Developed solutions under real-world constraints and deadlines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coding</h4>
                <h5>Data Structures and Algorithms</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively practicing Data Structures and Algorithms on LeetCode. Focused on improving problem-solving skills and coding consistency. Familiar with patterns like Arrays, Binary Search, and Hashing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently Learning</h4>
                <h5>Backend & Full Stack</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Backend Development (Node.js, APIs). Full Stack Development concepts. Strengthening problem-solving and coding skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>B.Tech in Artificial Intelligence and Data Science</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
               Yeshwantrao Chavan College of Engineering, Nagpur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
