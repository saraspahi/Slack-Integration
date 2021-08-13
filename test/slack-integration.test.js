const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const SlackIntegration = require('../lib/slack-integration-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SlackIntegration.SlackIntegrationStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
