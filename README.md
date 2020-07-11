# IO-SDK-SCHEDULER
A simple Node.js REST api for scheduling execution of command line based actions, implemented to be easily added to the IO-SDK platform.

 ## How to use it
 
 Start the server with `npm start` it will show a similar message if everything it is OK.

```
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `ts-node ./src/index.ts`
IO-SDK REST Api Scheduler is running on 3000
````

The API will be available in this case at the url `http:\\localhost:3000\scheduler`

### Add a new Job

Send a POST to endpoint `http://localhost:3000/scheduler` using this JSON structure as payload

```
{
    "jobName":"testJob",
    "time": "*/1 * * * *",
    "action": "echo test message logged every 1 minute"
}
```

- jobName: this is used to identify the job, using the value a key into the internal storage. It is not allowed to schedule 2 job with the same name. An HTTP 400 error it
is returned if that's the case
- time: it should be a valid cron expression. An HTTP 400 error it is returned if it is not a valid one.
- action: the shell command


Using `curl` this could be achieved with

```
curl -X POST -d '{"jobName":"testJob","time": "*/1 * * * *","action": "echo test message logged every 1 minute"}' http://localhost:3000/scheduler --header "Content-Type:application/json"
```

### Get the list of scheduled job

Send a GET to endpoint `http://localhost:3000/scheduler`

```
curl http://localhost:3000/scheduler

return an array with the scheduled job reference

[
    {
        "error": false,
        "job": {
            "jobName": "testJob",
            "time": "*/1 * * * *",
            "action": "echo test message logged every 1 minute"
        },
        "status": "scheduled"
    }
]

```

### Remove a scheduled job

Send a DELETE to endpoint `http://localhost:3000/scheduler` using this JSON structure as payload

```
{
    "jobName":"testJob"
}


curl -X DELETE -d '{"jobName":"testJob"}' http://localhost:3000/scheduler --header "Content-Type:application/json"
```

###
[ToDO]

- Additional Testing
- Input sanitization
- Docker Image

