#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { SlackIntegrationStack } = require('../lib/slack-integration-stack');
const awsAccount = {
  //account: XXXXX
  //region: XXXXX
}

const app = new cdk.App();
new SlackIntegrationStack(app, 'SlackIntegrationStack', {
  env: awsAccount,
});