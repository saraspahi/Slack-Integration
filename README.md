<br />
<p align="center">


  <h1 align="center">Slack-Integration</h1>

  <br>

  <p align="center">
 This project sends  messages from a SNS topic to Slack using an AWS Lambda function which is subscribed to the SNS topic.
    <br >
    <br>
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
     

</li>
    <li>
      <a href="#deployment">Deployment</a>    

</li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

 In the current implementation AWS CDK is used to built the cloud infrastructure. It creates  a SNS topic and a  Lambda function in your AWS account. The lambda function subscribes to the topic and therefore gets triggerd every time a new message is published to the SNS topic. The topic's message is then sent to a Slack channel of your preference using IncomingWebhooks.

<!--The project uses AWS CDK to define the cloud infrastructure. It creates a SNS Topic and a Lambda function which subscribes to the topic and serves as the http endpoint. -->

###

* [NodeJS]()
* [AWS CDK]()
* [cdk-assume-role-credential-plugin](https://github.com/aws-samples/cdk-assume-role-credential-plugin.git)
* [npm]()
* [IncomingWebhooks]()


<!-- Installation -->

### Installation

1. Create an [IncomingWebHook](https://api.slack.com/messaging/webhooks#getting_started) from Slack api which will generate a WebHook url
2. Clone the repo
   ```sh
   git clone git@github.com:ServerCentral/Slack-Integration.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy  .env.example file in the root .env file. Modify the path by adding the path from your WebHook url
Example:   WebHook url = https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX

```sh
 WEBHOOKSPATH = /services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```
<!-- Deployment example-->
## Deployment

AWS CDK defines the cloud infrastructure and the code in slack-integration-stack.js creates cloud resources within stacks.
<h6>Useful cdk commands</h6>

* ``` cdk synth```
Synthesizes and prints the CloudFormation template for the specified stack(s)
* ```cdk diff ```
Compares the specified stack with the deployed stack or a local CloudFormation template
* ``` cdk deploy ```
cdk deploys the slack-integration-stack

Run the above commands from slack-integration directory

<!-- USAGE EXAMPLES -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
