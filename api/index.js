const express = require('express')
const cors = require('cors')
const { registerController, loginController } = require('./controllers/auth.js')
const {
  getPostsController,
  getPostController,
  createPostController,
} = require('./controllers/posts.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.post('/api/auth/register', registerController)
app.post('/api/auth/login', loginController)

app.get('api/posts', getPostsController)
app.get('api/posts/:id', getPostController)
app.post('api/posts', createPostController)

app.listen(4000, () => {
  console.log('Server is running on port 3000')
})

export default {
  path: '/api',
  handler: app,
}
