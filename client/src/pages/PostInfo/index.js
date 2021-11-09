import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {
  addComment,
  getPost,
  postLoading
} from '../../redux/action/postActions'
import Loading from '../../components/Loading'

const PostInfo = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.user)
  const { id } = useParams()
  const { post, isLoading } = useSelector((s) => s.post)
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addComment(value, id, user._id))
    setValue('')
    toast.success('Сохранено!')
  }
  useEffect(() => {
    dispatch(getPost(id))
    return () => {
      dispatch(postLoading())
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <ToastContainer />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {post.comments.map((item) => (
        <div key={item._id} className="mb-4">
          <div>Автор: {item.user.name}</div>
          <div>{item.content}</div>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <div className="w-full md:w-full  mb-2 mt-2">
          <h2 className="  pb-2 text-gray-800 text-lg">Comments:</h2>
          <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="description"
            placeholder="Create comment"
            required
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className="w-full md:w-full flex items-start md:w-full ">
          <div className="-mr-1">
            <input
              type="submit"
              className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              value="Add comment"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PostInfo
