const SkeletonHome: React.FC = () => {
    return (
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gray-100 gap-[80px]"
      >
        <div className="flex flex-col items-center animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-[250px] mb-4" />
          <div className="h-[56px] bg-gray-300 rounded w-[300px] mb-4" />
          <div className="h-4 bg-gray-300 rounded w-[500px] mb-2" />
          <div className="h-4 bg-gray-300 rounded w-[450px] mb-6" />
  
          <div className="flex gap-4 mt-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-[55px] w-[55px] bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
  
        <div className="animate-pulse">
          <div className="w-[247px] h-[266px] bg-gray-300 rounded-[100px]" />
        </div>
      </section>
    );
  };
  
  export default SkeletonHome;
  