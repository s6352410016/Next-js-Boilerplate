interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({
  children
}) => {
  return (
    <div className="h-full">
      <div className="max-w-[1700px] w-full mx-auto mt-5">
        {children}
      </div>
    </div>
  );
}

export default Body;