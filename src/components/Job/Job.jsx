const Job = ({job}) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = job;
  return (
    <div className="card  bg-base-100 shadow-sm border mt-12">
      <figure>
        <img
          className="justify-start flex mt-3"
          src={logo}
          alt="Company Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4">
          <button className="border-2 border-[#9873FF] px-5 py-2 rounded text-[#9873FF] text-base font-extrabold">
            {" "}
            {remote_or_onsite}{" "}
          </button>
          <button className="border-2 border-[#9873FF] px-5 py-2 rounded text-[#9873FF] text-base font-extrabold">
            {" "}
            {job_type}{" "}
          </button>
        </div>
        <div className="flex">
          <p> {location} </p>
          <p> {salary} </p>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary bg-[#9873FF] text-white border-0">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
