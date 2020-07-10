import Scheduler from "./scheduler";
import Job from "../model/job";
import SchedulingResult from "../model/scheduling-result";

class SchedulerManager {

    private scheduler: Scheduler;

    constructor() {
        this.scheduler = new Scheduler();
    }

    /**
     * Schedule a Job into the internal simple scheduler.
     *
     * @param aJob
     */
    public scheduleJob(aJob: Job): SchedulingResult {
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
