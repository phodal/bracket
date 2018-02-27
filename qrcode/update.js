const AWS = require('aws-sdk');

const tableName = process.env.DYNAMODB_TABLE;
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.on = (event, context, callback) => {
  const uuid = event.pathParameters.uuid;
  let params = {
    TableName: tableName,
    Key: {
      "uuid": uuid
    },
    UpdateExpression: "SET devices_status=:s",
    ExpressionAttributeValues:{
      ":s": 1
    },
    ReturnValues:"UPDATED_NEW"
  };

  docClient.update(params, function (err, data) {
    if (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));

      callback(null, {
        statusCode: 404,
        body: JSON.stringify({
          error: "Unable to update item. Error JSON:" + JSON.stringify(err, null, 2)
        })
      });
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          results: "succeeded",
          status: data.Attributes.devices_status
        })
      });
    }
  });
};

module.exports.off = (event, context, callback) => {
  const uuid = event.pathParameters.uuid;
  let params = {
    TableName: tableName,
    Key: {
      "uuid": uuid
    },
    UpdateExpression: "SET devices_status=:s",
    ExpressionAttributeValues:{
      ":s": 0
    },
    ReturnValues:"UPDATED_NEW"
  };

  docClient.update(params, function (err, data) {
    if (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));

      callback(null, {
        statusCode: 404,
        body: JSON.stringify({
          error: "Unable to update item. Error JSON:" + JSON.stringify(err, null, 2)
        })
      });
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          results: "succeeded",
          status: data.Attributes.devices_status
        })
      });
    }
  });
};

module.exports.status = (event, context, callback) => {
  const uuid = event.pathParameters.uuid;
  const params = {
    TableName: tableName,
    Key: {
      uuid: uuid,
    },
  };

  docClient.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the todo item.',
      });
      return;
    }

    console.log(result);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        status: result.Item.devices_status
      }),
    };
    callback(null, response);
  });
};
