const getPostsController = (request, response) => {
  response.json({
    message: 'Getting all posts',
  })
}

const getPostController = (request, response) => {
  response.json({
    message: 'Get only one post',
  })
}

const createPostController = (request, response) => {
  response.json({
    message: 'Create a new post',
  })
}

module.exports = {
  getPostsController,
  getPostController,
  createPostController,
}
