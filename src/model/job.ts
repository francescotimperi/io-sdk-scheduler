import cron from 'node-cron';

/**
 * Represents a simple Job that could be scheduled using
 * a cron like time expression.
 */
class Job {

    public jobName: string;
    public time: string;
    public action: string;

    constructor(jobName: string, time: string, action: string) {
        this.jobName = jobName;
        this.time = time;
        this.action = action;
    }

    /**
     * Validate the cron expression.
     *
     * return true if the instance is created with a valid
     */
    public validate(): boolean {
        return cron.validate(this.time);
    }

}

export default Job;
