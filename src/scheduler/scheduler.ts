import Job from "../model/job";
import Storage from "../store/storage";
import CommandLineCronJob from "../job/command-line-cron-job";
import SchedulingResult from "../model/scheduling-result";

/**
 * Class Representing a simple Scheduler Engine
 * with basic operations.
 */
class Scheduler {
    private jobStore : Storage;

    constructor(){
        this.jobStore = new Storage();
    }

    /**
     *
     * @param aJob
     */
    public scheduleJob(aJob: Job) : SchedulingResult {
        let result = new SchedulingResult();

        if( this.jobStore.getJob(aJob.jobName) != null ) {
            result.error = true;
            result.errorMessage = 'you cannot schedule a Job with name '+aJob.jobName+' as it is already present into the scheduler';
            return result;
        }

        if(aJob.validate()){
            let scheduledJob = new CommandLineCronJob(aJob);
            scheduledJob.start();
            this.jobStore.save(scheduledJob);

            result.error = false;
            result.job = aJob;
            result.status = scheduledJob.getStatus();
        } else {
            result.error = true;
            result.errorMessage = 'cron expression '+aJob.time+' it is not a valid one';
        }

        return result;
    }

    public getScheduledJobs(): any {
        return this.jobStore.getJobs();
    }

    /**
     * Destroy the Job from the scheduling engine and delete it from the
     * job internal store.
     *
     * @param jobName
     */
    public removeScheduledJob(jobName: string) {
        const scheduledJob: CommandLineCronJob = this.jobStore.getJob(jobName);
        if(scheduledJob !== null) {
            scheduledJob.remove();
            this.jobStore.removeJob(jobName);
        } else {
            console.log('Could not remove a non existing Job ', jobName);
        }
    }
}

export default Scheduler;
