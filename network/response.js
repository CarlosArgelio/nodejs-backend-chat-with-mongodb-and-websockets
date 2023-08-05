

exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status, details) {
  console.error('[ERROR] ' + ' | ' + req.originalUrl + ' | ' + message + ' | ' + details)
  console.group('[REQUEST]')
    console.log(req.body)
  res.status(status || 200).send({
    error: message,
    body: ''
});
}
