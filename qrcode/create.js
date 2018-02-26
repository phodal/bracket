'use strict';

const AWS = require('aws-sdk');
const shortid = require('shortid');
AWS.config.setPromisesDependency(Promise);

const tableName = process.env.DYNAMODB_TABLE;
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
  return new Promise((resolve, reject) => {
    resolve(shortid.generate())
  }).then(uuid => {
    return docClient.put({
      TableName: tableName,
      Item: {
        uuid: uuid,
        type: 'qrcode',
        devices_status: 0
      },
      Expected: {
        uuid: {Exists: false}
      }
    }).promise().then(() => {
      return uuid;
    });
  }).then((uuid) => {
    return callback(
      null,
      {
        statusCode: 201,
        body: JSON.stringify({
          uuid: uuid,
        }),
        headers: {'Content-Type': 'text/html'}
      }
    );
  }).catch(error => {
    console.log('Oh no, hit an error! ' + error);
    callback(
      null,
      {
        statusCode: 400,
        body: 'Something went wrong, please try again'
      }
    );
  });
};
