const Amazing = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 p-2 md:px-4 mx-aut0 ">
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="max-w-sm m-2 mx-aut shadow" key={i}>
          <img
            src="https://placehold.co/200"
            className="object-cover w-full h-30"
            alt=""
          />
          <div className="div p-2">
            <div className="mb-2">
              <h2 className="font-bold text-sm sm:text-base">Amazing Card</h2>
              <p className="text-gray-700 text-[0.6rem] sm:text-xs dark:text-gray-300">
                This is a description for the amazing card.
              </p>
            </div>
            <button className="px-2 sm:px-4 py-1 sm:py-2 bg-black text-white rounded text-[0.6rem] sm:text-xs cursor-pointer dark:bg-black/70 dark:shadow shadow-white/20">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Amazing;
