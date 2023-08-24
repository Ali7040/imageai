import React, {useEffect, useState} from 'react'
import { Loader, Card, FormFill } from '../components'



const RenderCards = ({ data , title })=>{
    if(data?.lenght > 0){
        return data.map((post)=> <Card key={post._id} {...post} />)
    } 
    return (
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase '>
            {title}
        </h2>
    )
}

const Home = () => {
    const [Loading, setLoading] = useState(false)
    const [AllPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState('')
  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
            <p className='mt-2 text-[#666e75] text-[16] max-2-[500]'>Browse Through a collection of imaginative and visually stunning images</p>
        </div>

        <div className="mt-16">
            <FormFill />
        </div>

        <div className="mt-10">
            {Loading ? (
                <div className="flex justify-center items-center ">
                    <Loader />
                </div>
            ) : (
                <>
                {searchText && (
                    <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                        Showing Results for <span className=' text-[#222328]'>{searchText}</span>
                    </h2>
                )}

                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                    {searchText ? (
                        <RenderCards 
                        data={[]}
                        title="No search found !" 
                        />
                    ) : (
                        <RenderCards
                        data={[]}
                        title="No Post Found!"
                        />
                    )}
                </div>


                </>
            )}
        </div>
    </section>
  )
}

export default Home