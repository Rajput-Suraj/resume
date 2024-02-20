interface Info {
  id?: number;
  title?: string;
  position?: string;
  duration?: string;
  description?: string;
}
interface Props {
  heading: string;
  information: Info[];
}

function Section({ heading, information }: Props) {
  return (
    <div className="my-10">
      <div className="">{heading}</div>
      {
        information?.map(({ id, title, position, duration, description }) => {
          return (
            <div key={id} className="flex items-start flex-row my-5 gap-5">
              <div className="text-neutral-500 font-semibold text-md w-1/4">
                {duration}
              </div>
              <div className="w-9/12">
                <div className="text-lg font-semibold">{title}</div>
                <p className="text-neutral-400">{position}</p>
                <p className="text-neutral-400 my-1">
                  {description}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Section;
