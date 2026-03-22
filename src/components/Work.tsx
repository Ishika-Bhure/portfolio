import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AEROPulse",
    category: "Air Quality & Health Dashboard",
    bullets: [
      "Developed a responsive dashboard to visualize real-time air quality and weather data",
      "Integrated APIs and Geolocation for location-based data",
      "Built interactive charts using Chart.js for data visualization"
    ],
    tools: "HTML, CSS, JavaScript, Chart.js",
    link: "https://github.com/ishika25062007/Vision-coders_3.21_SDG_3.git",
    image: "/images/radix.png",
  },
  {
    title: "Fake Profile Detection Interface",
    category: "Frontend Interface",
    bullets: [
      "Built a frontend interface for detecting fake profiles",
      "Implemented dynamic input handling and result display using JavaScript",
      "Focused on clean UI and usability"
    ],
    tools: "HTML, CSS, JavaScript",
    link: "https://github.com/ishika25062007/Fake-Profile-Detection-TA-Assignment.git",
    image: "/images/bond.png",
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', color: '#ccc', fontSize: '0.95rem' }}>
                          {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>

                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <p>{project.tools}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '15px', color: '#ff3b3b', textDecoration: 'underline' }}>
                          View on GitHub
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
