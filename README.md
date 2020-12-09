# Prime Number Generator

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=akhtarja_serverless-prime-generator&metric=alert_status)](https://sonarcloud.io/dashboard?id=akhtarja_serverless-prime-generator)
[![Test status](https://github.com/akhtarja/serverless-prime-generator/workflows/test/badge.svg)](https://github.com/akhtarja/serverless-prime-generator/actions)
[![Deploy status](https://github.com/akhtarja/serverless-prime-generator/workflows/deploy/badge.svg)](https://github.com/akhtarja/serverless-prime-generator/actions)

This application is running and publicly available at https://primes.tinyrobot.co/.

Once every hour, this application picks a new number, checks if it's a prime, and records it if so. The front end renders the recorded values in table format.

This application uses React and Material UI for the front end, and NodeJS running on AWS Lambda on the back end. Deployment is done using Serverless.

## ESLint Configuration

This step is only needed if you're doing dev work on the project and want to use ESLint (recommended). From the project's root:

```
npm install
```

## Setting up a Local Dev Environment

### Deploying the Back End

1. Clone this repo

2. Create an AWS IAM user with programmatic access. Add the keys to your local AWS credential files using the name `prime-generator`.

3. The application expects the following environment variables:

| Variable name                         | Description                                                                                                                               |
| :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| `PRIME_GENERATOR_CUSTOM_ENDPOINT_URL` | The absolute URL of a custom endpoint URL, if desired. If this is left blank, the API endpoint URL will be generated automatically by AWS |

5. Deploy the `generator` service. From the project's root:

```
cd generator
npm install
serverless deploy --profile prime-generator --stage dev
```

6. Deploy the `viewer` service. From the project's root:

```
cd viewer
npm install
serverless deploy --profile prime-generator --stage dev
```

### Building the Front End

Build the application front end. Go back to the project's root and do the following for a **development environment**:

```
cd app
npm install
npm run start
```

This will run the application in a local developement server at `localhost:3000`.

## Production Deployment

When a pull request is merged to the `master` branch, the GitHub Actions pipeline will deploy it to AWS and invalidate the CloudFront distribution cache. This progress can be monitored from the `Actions` tab.
