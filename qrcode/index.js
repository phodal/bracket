module.exports.on = (event, context, callback) => {
  console.log('on');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      action: 'on',
      input: context,
    })
  });
};

module.exports.off = (event, context, callback) => {
  console.log('off');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      action: 'off',
      input: context,
    })
  });
};

module.exports.main = (event, context, callback) => {
  console.log('main');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      action: 'main',
      input: context,
    })
  });
};

module.exports.status = (event, context, callback) => {
  console.log('status');
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      action: 'status',
      input: context,
    })
  });
};
