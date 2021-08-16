require('dotenv').config()
const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const sns = require('@aws-cdk/aws-sns');
const subscriptions = require('@aws-cdk/aws-sns-subscriptions');
const path = require('path');

class SlackIntegrationStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    const myTopic = new sns.Topic(this,'testTopic',{
      displayName: 'testTopic'
    });

    const lambdaFunction = new lambda.Function(this,'TestFuncion',{
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: slackLambda.handler,
      code: lambda.Code.fromAsset(path.join(__dirname,'../slackLambda')),
      environment: {
        'HOSTNAME': process.env.HOSTNAME,
        'WEBHOOKSPATH': process.env.WEBHOOKSPATH
      }
    })
    myTopic.addSubscription(new subscriptions.LambdaSubscription(lambdaFunction));


  }
}

module.exports = { SlackIntegrationStack }
