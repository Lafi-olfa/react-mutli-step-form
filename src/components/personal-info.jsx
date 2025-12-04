import { useFormContext } from "react-hook-form"

export default function PersonalInfo() {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10 rounded-none">
      <div className="text-start mb-6">
        <h2 className="font-bold text-2xl text-gray-800 mb-2">Personal info</h2>
        <p className="text-gray-500 text-lg">Please provide your name, email address, and phone number.</p>
      </div>

      <form className="space-y-4">
        <div>
          <div className="flex justify-between">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            {
              errors.name && (
                <p className="text-red-600"> {errors.name.message} </p>
              )
            }
          </div>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            {...register('name', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Minimum 3'
              }
            })}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            {
              errors.email && (
                <p className='text-red-600 text-sm mt-1'>{errors.email.message} </p>
              )
            }
          </div>
          <input
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            {
              errors.phone && (
                <p className="text-red-600"> {errors.phone.message} </p>
              )
            }
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            {...register('phone', {
              required: 'This field is required',
              pattern: {
                value: /^[+]?[1-9][\d]{0,15}$/,
                message: 'Invalid phone number'
              },
              minLength: {
                value: 8,
                message: 'Minimum 8'
              }
            })}
          />

        </div>
      </form>
    </div>
  )
}