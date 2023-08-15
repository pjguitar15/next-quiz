'use client'
import { useRouter } from 'next/navigation'
import Navbar from './Navbar'

const categories = [
  'Geography',
  'Movies & TV Show',
  'Music',
  'History',
  'Trivia & Random Facts',
]

const SelectCategory = () => {
  const router = useRouter()
  const handleClick = (item: string) => {
    console.log(item)
    switch (item) {
      case 'Geography':
        router.push('/start/geography')
        break

      case 'Movies & TV Show':
        router.push('/start/movies-tv-show')
        break

      case 'Music':
        router.push('/start/music')
        break

      case 'History':
        router.push('/start/history')
        break

      case 'Trivia & Random Facts':
        router.push('/start/trivia-random-facts')
        break

      default:
        break
    }
  }
  return (
    <>
      <Navbar />
      <div className='container mx-auto pt-5'>
        <h1 className='text-3xl text-white text-center mb-4'>
          Select a Quiz Category:
        </h1>
        <div className='grid grid-cols-5 gap-1'>
          {categories.map((item: any, index: number) => (
            <div
              onClick={() => handleClick(item)}
              key={index}
              className='bg-white hover:bg-yellow-500 hover:text-white hover:scale-110 cursor-pointer transition duration-300 p-3 text-center'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SelectCategory
