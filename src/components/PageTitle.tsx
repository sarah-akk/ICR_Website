interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-2 w-fit mx-auto">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="w-full h-1 bg-primary" />
    </div>
  );
};

export default PageTitle;
