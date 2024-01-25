import Info from './Info';

interface UserMetaDataType {
  id: number;
  title: string;
  position?: string;
  duration: string;
  description: string;
}
interface SectionProps {
  heading: string;
  userMetaData: UserMetaDataType[];
}

function Section({ heading, userMetaData }: SectionProps) {
  return (
    <>
      <div className="section">
        <div className="text-upper">{heading}</div>
        <div>
          {userMetaData.map((data) => (
            <Info
              key={data.id}
              title={data.title}
              subTitle={data.position}
              duration={data.duration}
              description={data.description}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default Section;
