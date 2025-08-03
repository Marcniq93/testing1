/**
 * @file config.js
 * @description
 * This file contains configuration settings for your CommuTrade application,
 * specifically for connecting to AWS services like Cognito and API Gateway.
 * This is a JavaScript file that can be used by your web or mobile build scripts.
 */

// We use a global object 'window._config' to make these settings accessible
// throughout the frontend application.

window._config = {
  // --- AWS Cognito for User Authentication ---
  // These settings are required to connect your app to your AWS User Pool.
  // Replace the placeholder values with your actual AWS Cognito details.
  cognito: {
    userPoolId: 'us-east-1_dOHdV0nH6', // e.g., 'us-east-2_uXBoGSpAb'
    userPoolClientId: '77t4gurgau06q0b613qpfg1qve', // e.g., '25ddkmj4v6hfsfvrhupfi7n4hv'
    region: 'us-east-1', // e.g., 'us-east-2'
  },

  // --- AWS API Gateway for Backend API ---
  // This is the URL your app will use to make API calls to your backend services.
  // Replace the placeholder with the invoke URL of your API Gateway.
  api: {
    invokeUrl: '', // e.g., 'https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod'
  },
};

