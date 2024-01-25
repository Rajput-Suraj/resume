import Section from './Section';
import { workExpriences, educations } from '../utils/constants';

function Body() {
  return (
    <div className="wrapper">
      <Section heading='Experience' userMetaData={workExpriences} />
      <Section heading='Education' userMetaData={educations} />
    </div>
  );
}

export default Body;
