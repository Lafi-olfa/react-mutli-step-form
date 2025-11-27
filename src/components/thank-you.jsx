import ThankYouIcon from '../assets/images/icon-thank-you.svg';

export default function ThankYou() {
    return(
          <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
            <div className="flex items-center flex-col gap-4 mb-6">
               <img src={ThankYouIcon}
               className='w-12 h-12'
               alt="thank you icon" />
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Thank you!</h2>
                <p className="text-gray-500">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>       
        </div>
    )    
}