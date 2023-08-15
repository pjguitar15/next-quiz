import Navbar from '@/components/Navbar'
import StartGamePage from '@/components/StartGamePage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <StartGamePage />
    </main>
  )
}
