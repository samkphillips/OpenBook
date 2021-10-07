import Client from './api'

export const GetAllComments = async () => {
  const res = await Client.get('/comments')
  return res.data
}

export const CreateComment = async data => {
  const res = await Client.post('/comments', data)
  return res.data
}

export const UpdateComment = async (id, data) => {
  const res = await Client.put(`/comments/${id}`, data)
  return res.data
}

export const DeleteComment = async id => {
  const res = await Client.delete(`/comments/${id}`)
  return res.data
}
