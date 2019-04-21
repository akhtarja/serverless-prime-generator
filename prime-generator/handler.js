/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
/* we want to allow console logging in Lambda functions in order to use AWS CloudWatch */

const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

const dynamodbError = (error) => {
  throw new Error(`dynamodb error: ${JSON.stringify(error)}`);
};

const getPrevIteration = () => {
  const params = {
    TableName: process.env.PRIMES_TABLE,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ':id': 'prevIteration'
    }
  };

  return dynamodb.query(params).promise()
    .then(response => response.Items[0].value)
    .catch(() => {
      return 0;
    });
};

const getPrevSeq = () => {
  const params = {
    TableName: process.env.PRIMES_TABLE,
    KeyConditionExpression: 'id = :id',
    ExpressionAttributeValues: {
      ':id': 'prevSeq'
    }
  };

  return dynamodb.query(params).promise()
    .then(response => response.Items[0].value)
    .catch(() => {
      return 0;
    });
};

const isPrime = (number) => {
  if (number % 2 === 0 && number !== 2) return false;

  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }

  return number >= 1;
};

const updatePrevIteration = (prevIteration) => {
  const params = {
    TableName: process.env.PRIMES_TABLE,
    Item: {
      id: 'prevIteration',
      value: prevIteration
    }
  };

  return dynamodb.put(params).promise()
    .then(response => response)
    .catch(error => {
      dynamodbError(error);
    });
};

const writePrime = (prime, seq) => {
  const params = {
    TableName: process.env.PRIMES_TABLE,
    Item: {
      id: `prime${prime}`,
      seq: seq,
      timestamp: Date.now(),
      value: prime
    }
  };

  return dynamodb.put(params).promise()
    .then(response => response)
    .catch(error => {
      dynamodbError(error);
    });
};

const updatePrevSeq = (prevSeq) => {
  const params = {
    TableName: process.env.PRIMES_TABLE,
    Item: {
      id: 'prevSeq',
      value: prevSeq
    }
  };

  return dynamodb.put(params).promise()
    .then(response => response)
    .catch(error => {
      dynamodbError(error);
    });
};

const findPrime = async () => {
  try {
    const prevIteration = await getPrevIteration();
    const thisIteration = prevIteration + 1;

    await updatePrevIteration(thisIteration);
    if (isPrime(thisIteration)) {
      const prevSeq = await getPrevSeq();
      const thisSeq = prevSeq + 1;
      await writePrime(thisIteration, thisSeq);
      await updatePrevSeq(thisSeq);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  findPrime
};
