interface InfoProps {
  title: string;
  subTitle?: string;
  duration?: string;
  description?: string;
}

function Info({ title, subTitle, duration, description }: InfoProps) {
  return (
    <div className="">
      <div className="section-wrapper mb-40">
        <div className="section-details">
          <div className="title">
            {title} <span className="sub-title">{subTitle ? `- ${subTitle}` : ''}</span>
          </div>
          <div className="duration">{duration}</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Info;
