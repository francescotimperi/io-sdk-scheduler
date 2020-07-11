import Scheduler from "./scheduler";
import JobData from "../model/job-data";
import SchedulingResult from "../model/scheduling-result";

class SchedulerManager {

    private scheduler: Scheduler;

    /**
     * @TODO Place code to re-initialize the scheduler from persisted configuration.
     */
    constructor() {
        this.scheduler = new Scheduler();
    }

    /**
     * Schedule a JobData into the internal simple scheduler.
     *
     * @param aJob
     */
    public scheduleJob(aJob: JobData): SchedulingResult {
        return this.scheduler.scheduleJob(aJob);
    }

    public getScheduledJobs(): Array<SchedulingResult> {
        return this.scheduler.getScheduledJobs();
    }

    public stopJob(jobName: string){

    }

    public startJob(jobName: string){

    }

    public removeJob(jobName: string){
        this.scheduler.removeScheduledJob(jobName);
    }
}

export default SchedulerManager;
