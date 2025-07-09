import React from "react";

const Hero = () => {
  return (
    <>
      <section className="container hero uppercase md:mt-20 mt-24">
        <div className="">
          <div className="">
            <div className="">
              <img
                src="/images/image.png"
                height={150}
                width={150}
                className="rounded-full shadow-lg grayscale"
                alt="Hero"
              />
            </div>
            <div className="">
              <h1 className="text-4xl font-bold text-gray-200 md:mt-6 mt-10 tracking-normal heading-1 dark:text-black">
                Hi I'm Solo, Product Designer and Developer
              </h1>
              <p className="text-gray-400 mt-4 text-sm font-medium md:w-9/12 tracking-wider heading-2 dark:text-zinc-800">
                I am an freelance developer and designer remotely working
                globally. From 2020, I have been living in Thailand. I make
                useful applications for the web. In my spare times, I enjoy
                cooking, reading comics and travelling.
              </p>
              <button className="uppercase mt-6 px-8 py-3 text-gray-200 font-semibold rounded-full ring-1 ring-inset ring-gray-200 dark:ring-black flex items-center gap-4 dark:text-black">
                get in touch
                <span className="material-symbols-rounded ">Email</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
