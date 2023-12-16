import Search from '@/components/Search'
import Slider from '@/components/Slider/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
    
    <div className=' absoulte pt-20' >
      
     <Search />
    </div>

    <div className='relative pb-20'>
    <Slider />
    </div>
    </div>
  )
}
