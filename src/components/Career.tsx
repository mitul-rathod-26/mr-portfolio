import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Self</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built 2+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>CodBizz Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained cross-platform mobile applications using Flutter (Dart).
              Built responsive UI, fixed bugs, optimized performance, and handled state management with GetX.
              Created responsive UI/UX and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Professor</h4>
                <h5>S.S. Agrawal College</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as an Assistant Professor in the MCA Department at S.S. Agrawal College.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
