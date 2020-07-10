import cron from 'node-cron';
import Job from "../model/job";
import Runnable from "../command/runnable";
import CommandLine from "../command/command-line";
import SchedulingResult from "../model/scheduling-result";

class CommandLineCronJob {
    private job: Job;
    private task: Runnable;
    private scheduledInstance: any;

    constructor(job: Job) {
        this.job = job;
        this.task = new CommandLine(this.job.action);
    }

    public getJobKey(): string {
        return this.job.jobName;
    }

    public getStatus(): string {
        return this.scheduledInstance.status;
    }

    public getSchedulingResult() {
        const result = new SchedulingResult();

        result.error = false;
        result.job = this.job;
        result.status = this.getStatus();

        return result;
    }

    /**
     * Start the CronJob
     */
    public start() : any {
        this.scheduledInstance = cron.schedule(this.job.time, () => {
            console.log('Firing jobName',this.job.jobName);
            this.task.run();
        });
    }

    /**
     * Stop the CronJob by destroying from the underlying engine.
     */
    public stop() {
        this.scheduledInstance.stop();
    }

    public remove(){
        this.scheduledInstance.destroy();
    }

    public logInstanceData() {
        console.log(this.scheduledInstance);
    }

}

export default CommandLineCronJob;
