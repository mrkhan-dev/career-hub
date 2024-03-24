const Banner = () => {
  return (
    <div className="md:flex md:w-[1320px] md:justify-between w-full  mx-auto md:mt-16 gap-20 ">
      <div className="mb-7">
        <h1 className="md:text-[80px] text-3xl leading-10 font-extrabold md:leading-[100px] pt-24">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-[#9873FF]">Dream Job</span>
        </h1>
        <p className="mt-6 text-lg font-medium text-[#757575]">
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. Manage all <br /> your job
          application from start to finish.
        </p>
        <button className="mt-8 px-8 py-4 bg-[#9873FF] rounded-lg text-white text-xl font-bold">
          Get Start
        </button>
      </div>
      <div>
        <img className="mt-14 bottom-0" src="/images/user.png" alt="img" />
      </div>
    </div>
  );
};

export default Banner;
