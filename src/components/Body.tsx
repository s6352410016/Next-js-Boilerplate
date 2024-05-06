interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({
  children
}) => {
  return (
    <div className="px-4 lg:px-16">
      {children}
    </div>
  );
}

export default Body;