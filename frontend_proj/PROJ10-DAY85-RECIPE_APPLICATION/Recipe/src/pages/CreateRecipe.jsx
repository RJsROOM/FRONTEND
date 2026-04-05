import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const CreateRecipe = () => {

    const { register, handleSubmit } = useForm()

    const submitHandler= (data)=>{
        data.id=nanoid()
        console.log(data);
    }

  return (
    <form 
    onSubmit={handleSubmit(submitHandler)}
    className='flex flex-col max-w-fit'>

        <input 
        required
        className='border-b p-2 outline-0 block'
        type="text" 
        placeholder='Enter Chef Name' 
        {...register("chef name")} />


        <input 
        className='border-b p-2 outline-0 block'
        type="text" 
        placeholder='Enter Recipe Title' 
        {...register("title")} />
        <small className='text-red-700'>
            This is the error area
        </small>


        <input 
        className='border-b p-2 outline-0 block'
        type="url" 
        placeholder='Enter image url..'
        {...register("image")} />
        <small className='text-red-700'>
            This is the error area
        </small>


        <textarea 
        className='border-b p-2 outline-0 block'
        {...register("description")}
        placeholder='Enter recipe description..'
        ></textarea>
        <small className='text-red-700'>
            This is the error area
        </small>


        <textarea 
        className='border-b p-2 outline-0 block'
        {...register("ingredients")}
        placeholder='Enter recipe ingredients..'
        ></textarea>
        <small className='text-red-700'>
            This is the error area
        </small>


        <textarea 
        className='border-b p-2 outline-0 block'
        {...register("instructions")}
        placeholder='Enter recipe instructions..'
        ></textarea>
        <small className='text-red-700'>
            This is the error area
        </small>


        <select 
        className='border-b p-2 outline-0 block'
        {...register("category")}
        >
            <option value="">Select a category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
        </select>

        <button className='block mt-10 bg-green-950 text-green-200 p-2 rounded-xl cursor-pointer active:scale-95'>
            Save Recipe
        </button>
    </form>
  )
}

export default CreateRecipe