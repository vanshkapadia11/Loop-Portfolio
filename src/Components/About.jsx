import React from "react";

const About = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="container1 hero uppercase md:mt-32 mt-32 "
      >
        <div className="flex flex-col items-center justify-center lg:p-16 py-20 sm:p-8 p-4 md:ring-1 md:ring-inset md:ring-[#242424] md:rounded-lg md:shadow-lg">
          <div className="heading">
            <h2 className="text-3xl font-semibold text-white heading-2 dark:text-black">
              what can i offer for your organization!!
            </h2>
            <p className="text-gray-400 mt-4 text-sm font-medium md:w-10/12 tracking-wider heading-2 dark:text-zinc-800">
              I have worked with a number of clients ranging from nascent
              startup to Fortune 500 companies. Check what I can do.
            </p>
          </div>
          <div className="cards grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-14 grid-cols-1">
            <div className="ring-1 ring-inset ring-[#242424] rounded-lg shadow-lg lg:w-80 w-full p-8 h-full">
              <div className="flex flex-col justify-start mt-6">
                <span
                  className="material-symbols-rounded text-white dark:text-black heading-1"
                  style={{ fontSize: "40px" }}
                >
                  account_tree
                </span>
                <h2 className="text-gray-400 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-black">
                  Ideation and Prototyping
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:w-10/12 tracking-wide heading-2 dark:text-zinc-800">
                  Idea generation and prototyping are two of the most important
                  aspects of product development.
                </p>
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#242424] rounded-lg shadow-lg w-full lg:w-80 p-8 h-full">
              <div className="flex flex-col justify-start mt-6">
                <span
                  className="material-symbols-rounded text-white dark:text-black heading-1"
                  style={{ fontSize: "40px" }}
                >
                  globe_asia
                </span>
                <h2 className="text-gray-400 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-black">
                  Headless Web Development
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:w-10/12 tracking-wide heading-2 dark:text-zinc-800">
                  Headless architecture can improve performance since the
                  frontend is optimized to render content efficiently
                </p>
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#242424] rounded-lg shadow-lg w-full lg:w-80 p-8 h-full">
              <div className="flex flex-col justify-start mt-6">
                <span
                  className="material-symbols-rounded text-white dark:text-black heading-1"
                  style={{ fontSize: "40px" }}
                >
                  construction
                </span>
                <h2 className="text-gray-400 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-black">
                  Redesigning Products
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:w-10/12 tracking-wide heading-2 dark:text-zinc-800">
                  Sometimes you don't need to start everything from scratch.
                  Redesigning existing apps can be cost effective.
                </p>
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#242424] rounded-lg shadow-lg w-full lg:w-80 p-8 h-full">
              <div className="flex flex-col justify-start mt-6">
                <span
                  className="material-symbols-rounded text-white dark:text-black heading-1"
                  style={{ fontSize: "40px" }}
                >
                  school
                </span>
                <h2 className="text-gray-400 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-black">
                  Coach teams
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:w-10/12 tracking-wide heading-2 dark:text-zinc-800">
                  In can coach team of small and medium size. Topics I can coach
                  on are frontend development and UI design.
                </p>
              </div>
            </div>
            <div className="ring-1 ring-inset ring-[#242424] rounded-lg shadow-lg w-full lg:w-80 p-8 h-full">
              <div className="flex flex-col justify-start mt-6">
                <span
                  className="material-symbols-rounded text-white dark:text-black heading-1"
                  style={{ fontSize: "40px" }}
                >
                  groups
                </span>
                <h2 className="text-gray-400 mt-4 text-base font-semibold md:w-10/12 tracking-wider heading-2 dark:text-black">
                  Team Building
                </h2>
                <p className="text-gray-400 mt-4 text-sm md:w-10/12 tracking-wide heading-2 dark:text-zinc-800">
                  Team building is crucial for any enterprise, regardless of the
                  size. I can help building a team of suitable professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
