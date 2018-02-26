module.exports.handler = (event, context, callback) => {
  console.log('main');
  callback(null, {
    statusCode: 302,
    body: '',
    headers: {
      'Location': 'https://iot.pho.im/q'
    }
  });
};
