import Section from './Section';
import { workExpriences } from '../utils/constants';

function Body() {
  return (
    <div className="wrapper">
      <Section heading='Experience' userMetaData={workExpriences} />
    </div>
  );
}

export default Body;
