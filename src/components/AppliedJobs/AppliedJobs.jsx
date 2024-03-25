import {useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {getStoredJobApplication} from "../../uitlity/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => job.id === id);
    }
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center">Applied Jobs</h2>
    </div>
  );
};

export default AppliedJobs;
