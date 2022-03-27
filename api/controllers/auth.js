const registerController = (request, response) => {
  response.json({
    message: 'Registering user',
  })
}

const loginController = (request, response) => {
  response.json({
    message: 'Logging in user',
  })
}
module.exports = {
  registerController,
  loginController,
}
