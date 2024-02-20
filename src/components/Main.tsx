import Section from './Section';
import { educations, workExpriences } from '../utils/constants';

function Main() {
  return (
    <>
      <Section heading="Work Experience" information={workExpriences} />
      <Section heading="Education" information={educations} />
    </>
  );
}

export default Main;
