import Section from './Section';
import SkillSection from './SkillSection';
import { workExpriences, educations } from '../utils/constants';

function Body() {
  return (
    <div className="wrapper">
      <Section heading="Experience" userMetaData={workExpriences} />
      <Section heading="Education&nbsp;" userMetaData={educations} />
      <SkillSection />
    </div>
  );
}

export default Body;
