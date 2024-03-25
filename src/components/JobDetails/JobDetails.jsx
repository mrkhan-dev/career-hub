import {useLoaderData, useParams} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {saveJobApplication} from "../../uitlity/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("Apply Successful");
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold">Job Details</h1>
      <div className="flex gap-6 mt-32">
        <div className="w-2/3">
          <h1> Job descriptions: {job.job_description} </h1>
          <h1> Job responsibility: {job.job_responsibility} </h1>
          <h1>
            {" "}
            Educational Requirements:
            <p> {job.educational_requirements} </p>
          </h1>
          <h2>
            Experience:
            <p> {job.experiences} </p>
          </h2>
        </div>
        <div className="w-1/3">
          <h1 className="border">Job Details</h1>
          <div className="mt-4">
            <button
              onClick={handleApplyJob}
              className="w-full bg-blue-500 rounded-md text-white py-5 font-bold"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
