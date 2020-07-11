import CommandLineCronJob from "../job/command-line-cron-job";
import SchedulingResult from "../model/scheduling-result";

class Storage {

    private scheduledTasks = new Map();

    constructor() {}

    /**
     * Add a JobData into the JobStorage.
     *
     * @param aJob
     */
    save(aJob: CommandLineCronJob){
        this.scheduledTasks.set(aJob.getJobKey(), aJob);
    }

    /**
     * Return hte scheduled JobData Mapping the name.
     *
     * @param jobName
     */
    getJob(jobName): CommandLineCronJob {

        if(this.scheduledTasks.has(jobName)) {
            return this.scheduledTasks.get(jobName);
        }

        return null;
    }

    /**
     * Remove the scheduled JobData Mapping the name.
     *
     * @param jobName
     */
    removeJob(jobName): void {

        if(this.scheduledTasks.has(jobName)) {
            this.scheduledTasks.delete(jobName);
        }
    }

    getJobs(): Array<SchedulingResult> {
        const result = [];
        this.scheduledTasks.forEach((job: CommandLineCronJob) => {
            result.push(job.getSchedulingResult());
        })
        return result;
    }

}
export default Storage;
