import process from 'child_process';
import Runnable from './runnable';

/**
 * A command line executor
 */
class CommandLine implements Runnable {

    private command: string;

    constructor (command: string) {
        this.command = command;
    }

    /**
     * Execute the provided command.
     */
    public run(){
        console.log('Executing ',this.command);

        let executedCommand = process.exec(this.command,
            (error, stdout, stderr) => {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
        });

    }
}

export default CommandLine;
