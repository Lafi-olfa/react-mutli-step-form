export default function PersonalInfo(){
     return (
    <div className="bg-white mx-4 -mt-8 p-6 z-10 rounded-none">
        <div className="text-start mb-6">
          <h2 className="font-bold text-2xl text-gray-800 mb-2">Personal info</h2>
          <p className="text-gray-500 text-lg">Please provide your name, email address, and phone number.</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. Stephen King" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="e.g. stephenking@lorem.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="e.g. +1 234 567 890" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div>
        </form>
      </div>
  )
}