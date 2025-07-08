import React from 'react'
import Image from 'next/image'

const FeaturedPost = () => {
  return (
       <div className="flex space-x-3">
                         <Image
                           src="/1.png"
                           alt="Featured post"
                           width={60}
                           height={60}
                           className="rounded object-cover"
                         />
                         <div>
                           <p className="text-sm text-gray-600">Sunday, 2024</p>
                           <h5 className="font-semibold text-sm">A Guide to Better Sleep Habits</h5>
                         </div>
                       </div>
  )
}

export default FeaturedPost