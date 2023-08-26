import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import preview from "../assets/preview.png"
import { getRandomPrompt } from "../utils"
import { FormFill, Loader } from '../components'

const CreatePost = () => {
    const navigate = useNavigate()
    const [Form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })
    const [generatingImage, setgeneratingImage] = useState(false)
    const [Loading, setLoading] = useState(false)

    const handleSubmit = () => {

    }

    const handleChange = (e)=>{
        setForm({ ...Form, [e.target.name]: e.target.value})
    } 
    const handleSurpriseMe = () => {
        const RandomPrompt = getRandomPrompt(Form.prompt)
        setForm({...Form, prompt: RandomPrompt})
    }
    const generateImage = ()=>{

    }



  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
            <p className='mt-2 text-[#666e75] text-[16] max-2-[500]'>Create imaginative and visually stunning images</p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <FormFill
                    labelName='Your Name'
                    type= 'text'
                    name = "name"
                    placeholder= "Ali"
                    value = {Form.name}
                    handleChange={handleChange}
                />

                <FormFill
                    labelName='Prompt'
                    type= 'text'
                    name = "Prompt"
                    placeholder= "Write your Prompt"
                    value = {Form.prompt}
                    handleChange={handleChange}
                    isSurpriseMe
                    handleSurpriseMe={handleSurpriseMe}
                />
                <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                    {Form.photo ? (
                        <img 
                         src={Form.photo}
                         alt={Form.prompt}
                         className='w-full h-full object-contain' />
                    ): (
                        <img 
                         src={preview} 
                         alt="preview" 
                         className='w-9/12 h-9/12 object-contain opacity-40' />
                    )}
                    {generatingImage && (
                        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                            <Loader />
                        </div>
                    )}

                </div>
            </div>
            <div className="mt-5 flex gap-5">
                <button
                type='button'
                onClick={generateImage}
                className=" text-white bg-blue-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    {generatingImage ? "Genrating..." : "Generate"}
                </button>
            </div> 
            <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {Loading ? 'Sharing...' : 'Share with the Community'}
          </button>
         </div>  
        </form>
    </section>
  )
}

export default CreatePost