export default function Card() {
  return (
    //   <div className="card">
    //   <h2>Pesonal info</h2>
    //   <p>Please provide your name, email address, and phone number. </p>
    //   <form action="" method="post">
    //     <div className="input-field">
    //       <label htmlFor="Name">Name</label>
    //       <input type="text" name="" id="" placeholder='e.g. Stephen King' />
    //     </div>
    //     {/*  */}
    //     <div className="input-field">
    //       <label htmlFor="Name">Email Address</label>
    //       <input type="text" name="" id="" placeholder='e.g. stephenking@lorem.com' />
    //     </div>
    //     <div className="input-field">
    //       <label htmlFor="Name">Phone Number</label>
    //       <input type="text" name="" id="" placeholder='e.g. +1 234 567 890' />
    //     </div>
    //     <button className='next-step'>Next Step</button>
    //   </form>
    // </div>  
    <div className="min-h-screen bg-cyan-100 flex relative justify-around p-4">
      <div className="flex flex-col mx-auto bg-rose-50 rounded-lg shadow-lg p-6 w-64 max-w-md" >
        <h2 className="text-blue-900 font-bold ">Personal info</h2>
        <p className="text-gray-400">Please provide your name, email address, and phone number. </p>

      </div>
    </div>
  )
}