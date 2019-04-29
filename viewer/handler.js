/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
/* we want to allow console logging in Lambda functions in order to use AWS CloudWatch */

const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const dynamodbError = (error) => {
  throw new Error(`dynamodb error: ${JSON.stringify(error)}`);
};

const all = (event, context, callback) => {

};

const first = (event, context, callback) => {

};

const last = (event, context, callback) => {

};

module.exports = {
  all,
  first,
  last
};
