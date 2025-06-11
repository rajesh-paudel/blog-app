import React from 'react'
import Card from './Card'
import Link from 'next/link'
export const FeaturedArticles = () => {
  return (
    <div className='w-full text-white py-15 px-30'>
      <h1 className='text-center  font-bold text-2xl mb-10'>
        Featured Articles
      </h1>
      <div className='grid gap-8 sm:grid-cols-2 lg: grid-cols-3 '></div>
      <Card></Card>
      <div className='flex flex-col items-center justify-center p-10'>
        <Link href={''} className='py-2 px-4  h-10 border-2 border-white text-center rounded-xl cursor-pointer'>View all articles</Link>
      </div>
    </div>
  )
}
