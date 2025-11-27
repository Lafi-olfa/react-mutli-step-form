export default function Steps() {
    const steps = [
        {
            number: 1,
            title: 'STEP 1',
            description: 'YOUR INFO'
        },
        {
            number: 2,
            title: "STEP 2",
            description: 'SELECT PLAN'
        },
        {
            number: 3,
            title: 'STEP 3',
            description: 'ADD-ONS'
        },
        {
            number: 4,
            title: "STEP 4",
            description: 'SUMMARY'
        }
    ]

    return (
        <div className="w-full fiexd bg-[url('/public/assets/bg-sidebar-mobile.svg')] md:bg-[url('/public/assets/bg-sidebar-desktop.svg')] bg-no-repeat md:w-sm md:mx-2 bg-cover" id="steps">
            <div className="container mx-auto p-12">
                <div className="flex md:flex-col md:gap-6 justify-center gap-4">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col md:flex-row gap-2 items-center ">
                            <div className="rounded-full w-12 h-9 flex items-center justify-center border-2 font-bold bg-transparent text-white border-white">
                                {step.number}
                            </div>
                            <div className="hidden md:flex flex-row md:flex-col w-full">
                                <p className="text-gray-300">{step.title}</p>
                                <span className="text-white">{step.description}</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}