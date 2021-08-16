const https = require('https')
exports.handler = function(event,context,callback) {
    const messsage ={
        text: event.Records[0].Sns.Message
    }
    const options = {
        hostname: process.env.HOSTNAME,
        method: 'POST',
        path: process.env.WEBHOOKSPATH
    }

    const req =  https.request(options,
        (res) => res.on("data", ()=>callback(null,'OK')))
        req.write(JSON.stringify(message));
        req.end();
        callback(null,"Success");
}
