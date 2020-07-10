import Job from "./job";

class SchedulingResult {
    public job: Job;
    public status: string;
    public error: boolean;
    public errorMessage: string;
}

export default SchedulingResult;
