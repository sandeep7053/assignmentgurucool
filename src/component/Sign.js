import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Sign() {

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
            <h3 className="font-bold text-lg">Address Information</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mt-2 mb-4'>
                <label className='mt-2 mb-3' htmlFor="addressline1"> Address Line 1 :</label> <br></br>
                <input className='w-96 px-3 mt-2 py-1 border rounded-md' name='addressline1'
                  type="text" placeholder='Enter Your Address Line 1' {...register("addressline1", { required: true })} />
                <br />
                {errors.addressline1 && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mt-2 mb-4'>
                <label className='mt-2 mb-3' htmlFor="addressline2"> Address Line 2 :</label> <br></br>
                <input className='w-96 px-3 mt-2 py-1 border rounded-md' name='addressline2'
                  type="text" placeholder='Enter Your Address Line 2...' {...register("addressline2", { required: true })} />
                <br />
                {errors.addressline2 && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mb-4'>
                <label className='mb-3' htmlFor="city"> City :</label> <br />
                <input className='w-96 mt-2 px-3 py-2 border rounded-md' type="text" name='city' placeholder='Enter Your City ' {...register("city", { required: true })} />
                <br />
                {errors.city && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mb-4'>
                <label className='mb-3' htmlFor="state"> State :</label> <br />
                <input className='w-96 mt-2 px-3 py-2 border rounded-md' type="text" name='state' placeholder='Enter Your State ' {...register("state", { required: true })} />
                <br />
                {errors.state && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='mb-4'>
                <label className='mb-3' htmlFor="zipcode"> Zip Code :</label> <br />
                <input className='w-96 mt-2 px-3 py-2 border rounded-md' type="number" name='zipcode' placeholder='Enter Your Zip Code ' {...register("zipcode", { required: true })} />
                <br />
                {errors.zipcode && <span className='text-sm text-red-500' >This field is required</span >}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-600 text-white rounded-md border px-3 py-2 hover:bg-pink-800 duration-200' > Sumit</button>
                <p>

                  <span className='underline text-blue-500 cursor-pointer'
                  // onClick={() =>
                  //   document.getElementById('my_modal_3').showModal()
                  // }

                  >
                    <button className="btn btn-secondary">
                      <Link to={'/'}>Back
                      </Link>
                    </button>

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

export default Sign
