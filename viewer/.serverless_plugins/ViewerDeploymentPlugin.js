const fs = require('fs');
const AWS = require('aws-sdk');

class ViewerDeploymentPlugin {
  constructor(serverless) {
    this.hooks = {
      'after:deploy:deploy': this.afterDeploy.bind(null, serverless)
    };
  }

  afterDeploy(serverless) {
    return new Promise(function (resolve, reject) {
      const provider = serverless.service.provider;
      const custom = serverless.service.custom;
      const service = serverless.service.service;

      const region = provider.region;
      const stage = custom.stage;
      const cloudFormation = new AWS.CloudFormation({ region });

      const params = {
        StackName: `${service}-${custom.stage}`
      };
      let apiUrl = '';

      cloudFormation.describeStackResources(params, function (err, response) {
        if (err) {
          console.log(err, err.stack);
          return reject(err);
        } else {
          const apiGatewayRestApi = response.StackResources.find(
            resource => resource.LogicalResourceId === 'ApiGatewayRestApi'
          ).PhysicalResourceId;
          if (stage === 'prod' && provider.environment.CUSTOM_API_URL) {
            apiUrl = provider.environment.CUSTOM_API_URL;
          } else {
            apiUrl = `https://${apiGatewayRestApi}.execute-api.${region}.amazonaws.com/${stage}`;
          }
          const fileContents = `const url = { url: '${apiUrl}' };\nexport default url;`;
          const path = custom.config_path;

          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }

          fs.writeFileSync(`${path}/${service}.js`, fileContents);
          return resolve(response);
        }
      });
    });
  }
}

module.exports = ViewerDeploymentPlugin;
