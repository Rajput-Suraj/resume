import { skills } from '../utils/constants';

function SkillSection() {
  return (
    <>
      <div className="section" style={{ gap: '131px' }}>
        <div className="text-upper">Skillset</div>
        <div className="section-wrapper mb-40">
          <div className="section-details">
            <div className="title">Technologies</div>
            {skills.join(', ')}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSection;
