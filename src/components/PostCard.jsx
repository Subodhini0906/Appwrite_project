import React from 'react'
import appwriteService from "../appwrite/config1"
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={'/post/${$id}'}>
        <div className='w-full bg-slate-500 rounded-xl p-4'>
            <div className='w-full justify-center'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard