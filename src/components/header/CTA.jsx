import CV from "../../assets/docs/CV-HV-AUG22_CarlosLucas.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
