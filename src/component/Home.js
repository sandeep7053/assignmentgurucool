import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'


function Home() {

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className='flex h-screen item-center justify-center mt-20'>
        <div id="" className="w-[600px]">
          <div className="modal-box">
            <div method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                to='/'>✕ </button> */}
            </div>
            <h3 className="font-bold text-lg">Personal Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-2 mb-4'>
                <label className='mt-2 mb-3' htmlFor="name"> Name :</label> <br></br>
                <input className='w-96 px-3 mt-2 py-1 border rounded-md' name='name'
                  type="text" placeholder='Enter Your Name' {...register("name", { required: true })} />
                <br />
                {errors.name && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mt-2 mb-4'>
                <label className='mt-2 mb-3' htmlFor="email"> Email :</label> <br></br>
                <input className='w-96 px-3 mt-2 py-1 border rounded-md' name='email'
                  type="email" placeholder='Enter Your Email...' {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mb-4'>
                <label className='mb-3' htmlFor="number">Phone :</label> <br />
                <input className='w-96 mt-2 px-3 py-2 border rounded-md' type="number" name='number' placeholder='Enter Your Phone Number ' {...register("number", { required: true })} />
                <br />
                {errors.number && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-600 text-white rounded-md border px-3 py-2 hover:bg-pink-800 duration-200' > Sumit</button>
                <button className="btn btn-secondary">
                  <Link to={'/login'}>Next
                  </Link>
                </button>
                <p>

                  <span className='underline text-blue-500 cursor-pointer'
                  // onClick={() =>
                  //   document.getElementById('my_modal_3').showModal()
                  // }

                  >


                  </span>

                </p>
              </div>


            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
