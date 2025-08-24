type HeadLineProps = {
  icon: React.ReactNode;
  title: string;
};

const HeadLine: React.FC<HeadLineProps> = ({ icon, title }) => {
  return (
    <>
      <div className="flex mx-4 lg:mx-50 gap-2 items-center">
        {icon}
        <div className="text-lg lg:text-2xl font-bold">{title}</div>
      </div>
      <div className="h-1 bg-[#FFDADA] mx-4 lg:mx-50" />
    </>
  );
};

export default HeadLine;
