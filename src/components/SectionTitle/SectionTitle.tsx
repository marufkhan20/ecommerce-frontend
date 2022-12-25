interface IProps {
  subTitle: String;
  title?: String;
  icon: any;
  color: String;
}

const SectionTitle = ({ subTitle, title, icon, color }: IProps) => {
  return (
    <div>
      <h5 className={`text-${color} text-sm mb-3 flex items-center gap-2`}>
        <span
          className={`h-6 w-6 rounded-full bg-${color} text-white flex items-center justify-center`}
        >
          {icon}
        </span>
        {subTitle}
      </h5>
      {title && <h2 className="text-3xl leading-[1.2]">{title}</h2>}
    </div>
  );
};

export default SectionTitle;
