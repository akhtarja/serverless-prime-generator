/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
/* we want to allow console logging in Lambda functions in order to use AWS CloudWatch */

const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const successResponse = (response, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(response)
  });
};

const errorResponse = (error, callback) => {
  console.error('error:', error);
  callback(null, {
    statusCode: 401
  });
};

const dynamodbError = (error) => {
  throw new Error(`dynamodb error: ${JSON.stringify(error)}`);
};

const getAllPrimes = () => {
  const params = {
    TableName: process.env.PRIMES_TABLE
  };

  return dynamodb.scan(params).promise()
    .then(response => ({
      primes: response.Items.filter(item => item.type === 'prime')
    }))
    .catch((error) => {
      dynamodbError(error);
    });
};

const all = async (event, context, callback) => {
  try {
    const primes = await getAllPrimes();
    const response = primes.primes.map(prime => ({
      value: prime.value,
      timestamp: prime.timestamp
    }));

    return successResponse(response, callback);
  } catch (error) {
    return errorResponse(error, callback);
  }
};

module.exports = {
  all
};
