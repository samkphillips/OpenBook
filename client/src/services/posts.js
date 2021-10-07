import Client from './api'

export const GetPosts = async () => {
  const res = await Client.get('/posts')
  return res.data
}

export const CreatePost = async data => {
  const res = await Client.post('/posts', data)
  return res.data
}

export const UpdatePost = async (id, data) => {
  const res = await Client.put(`/posts/${id}`, data)
  return res.data
}

export const DeletePost = async id => {
  const res = await Client.delete(`/posts/${id}`)
  return res.data
}
