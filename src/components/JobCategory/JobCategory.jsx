const JobCategory = () => {
  return (
    <div>
      <div className="text-center mt-32 md:w-[1320px] mx-auto mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Job Category List
        </h1>
        <p className="mt-4 font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-lg px-8 mt-8">
            <img
              className="md:ml-24 rounded-lg p-4 bg-blue-100 mt-10"
              src="/icons/accounts.png"
              alt=""
            />
            <h3 className="mt-8 text-xl font-extrabold">Account & Finance</h3>
            <p className="mb-10">300 Jobs Available</p>
          </div>
          <div className="bg-blue-50 rounded-lg px-8 mt-8">
            <img
              className="md:ml-24 rounded-lg p-4 bg-blue-100 mt-10"
              src="/icons/accounts.png"
              alt=""
            />
            <h3 className="mt-8 text-xl font-extrabold">Account & Finance</h3>
            <p className="mb-10">300 Jobs Available</p>
          </div>
          <div className="bg-blue-50 rounded-lg px-8 mt-8">
            <img
              className="md:ml-24 rounded-lg p-4 bg-blue-100 mt-10"
              src="/icons/accounts.png"
              alt=""
            />
            <h3 className="mt-8 text-xl font-extrabold">Account & Finance</h3>
            <p className="mb-10">300 Jobs Available</p>
          </div>
          <div className="bg-blue-50 rounded-lg px-8 mt-8">
            <img
              className="md:ml-24 rounded-lg p-4 bg-blue-100 mt-10"
              src="/icons/accounts.png"
              alt=""
            />
            <h3 className="mt-8 text-xl font-extrabold">Account & Finance</h3>
            <p className="mb-10">300 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
