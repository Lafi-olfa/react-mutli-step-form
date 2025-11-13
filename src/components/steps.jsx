export default function Steps() {
    const steps = [
        {
            number: 1,
            title: 'STEP 1',
            desciption: 'YOUR INFO'
        },
        {
            number: 2,
            title: "STEP 2",
            desciption: 'SELECT PLAN'
        },
        {
            number: 3,
            title: 'STEP 3',
            desciption: 'ADD-ONS'
        },
        {
            number: 4,
            title: "STEP 4",
            desciption: 'SUMMURY'
        }
    ]
    return (
        <div id="steps" className="flex justify-center gap-4 items-center max-w-2xl mx-auto px-4 h-50  ">
            {
                steps.map((step) => (
                    <div className="flex flex-col gap-2 items-center justify-center ">
                        <div className="rounded-full text-white bg-transparent hover:text-black hover:bg-gray-300 w-8 text-center
               border border-white cursor-pointer 
               ">
                            {step.number}
                        </div>
                        <div className="flex-col bg-cyan-400 hidden">
                            <h1>{step.title}</h1>
                            <p> {step.desciption} </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}