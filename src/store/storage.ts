import CommandLineCronJob from "../job/command-line-cron-job";

class Storage {

    private scheduledTasks = new Map();

    constructor() {}

    /**
     * Add a Job into the JobStorage.
     *
     * @param aJob
     */
    save(aJob: CommandLineCronJob){
        this.scheduledTasks.set(aJob.getJobKey(), aJob);
    }

    /**
     * Return hte scheduled Job Mapping the name.
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
     * Remove the scheduled Job Mapping the name.
     *
     * @param jobName
     */
    removeJob(jobName): void {

        if(this.scheduledTasks.has(jobName)) {
            this.scheduledTasks.delete(jobName);
        }
    }

    getJobs(): any {
        const result = [];
        this.scheduledTasks.forEach((job: CommandLineCronJob) => {
            job.logInstanceData();
            result.push(job.getSchedulingResult());
        })
        return result;
    }

}
export default Storage;
