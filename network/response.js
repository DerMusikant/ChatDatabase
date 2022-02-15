//This code exports http responses for components' network

exports.success = (req, res, data, status = 200) => {
  res.status(status).send({
    error: '',
    body: data
  })
}

exports.error = (req,res, error, details, status = 500) => {
  res.status(status).send({
    error: error,
    body: ''
  })
  console.error(details)
}
