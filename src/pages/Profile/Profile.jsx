import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import LikeImg from '../../assets/Profile/like.png'
import DislikeImg from '../../assets/Profile/dislike.png'
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai' 

export default function Profile() {
  const [showLike, setShowLike] = useState(false)
  const [showDislike, setShowDislike] = useState(false)
  const handleLike = () => {
    
    if (!showLike === true)
    localStorage.setItem("likeStatus", "like")
    else localStorage.setItem("likeStatus", "")
    setShowLike(!showLike)
    functionCall()
  }
  
  const handleDislike = () => {
    if (!showDislike === true)
    localStorage.setItem("likeStatus", "dislike")
    else localStorage.setItem("likeStatus", "")
    setShowDislike(!showDislike)
    functionCall()
  }

  const functionCall = () => {
    if (localStorage.getItem("likeStatus") === "")
    {
      setShowLike(false)
      setShowDislike(false)
    } else if (localStorage.getItem("likeStatus") === "like") {
      setShowLike(true)
      setShowDislike(false)
    } else if (localStorage.getItem("likeStatus") === "dislike") {
      setShowLike(false)
      setShowDislike(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem("likeStatus") === "")
    {
      setShowLike(false)
      setShowDislike(false)
    } else if (localStorage.getItem("likeStatus") === "like") {
      setShowLike(true)
      setShowDislike(false)
    } else if (localStorage.getItem("likeStatus") === "dislike") {
      setShowLike(false)
      setShowDislike(true)
    }
  },[])

  return (
    <>
      <div id="main-content" className="fixed w-full h-full overflow-auto bg-gray-50 lg:ml-64 pr-64 dark:bg-gray-900">
        <div className="px-4 pt-2">
        <div className="grid w-full grid-cols-1 my-4 ">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Profile</h3>
              </div>
              {/* Chat */}
              <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit text-left">
                <article className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar" />Name: Bonnie Green</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022">Create At Date: 01/03/2023 4:15 PM</time></p>
                    </div>                    
                  </div>
                  <p className="mb-3 text-gray-900 dark:text-white">Subject of Tag titile: </p>
                  <p className="mb-2 text-gray-900 dark:text-white">Short Description</p>
                  <div className="flex items-center mb-2 space-x-2">
                    <Button onClick={handleLike} type="button" id="like" name="like" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                      <AiTwotoneLike size="1rem" className={`cursor-pointer ${!showLike? "" : "text-white"}`} />
                    </Button>
                    <Button onClick={handleDislike} type="button" id="dislike" name="dislike" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                      <AiTwotoneDislike size="1rem" className={`cursor-pointer ${!showDislike? "" : "text-white"}`} />
                    </Button>
                  </div>
                  <Button href="#" className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                    Read more ...
                  </Button>
                </article>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
