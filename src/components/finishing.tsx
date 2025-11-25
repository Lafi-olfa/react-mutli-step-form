export default function Finishing() {

    return (
        <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
            {/* Header */}
            <div className="text-start mb-6">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Finishing up</h2>
                <p className="text-gray-500 text-lg">Double-check everything looks OK before confirming.</p>
            </div>

            <div className="space-y-6">
                {/* Plan Cards */}
                <div className="space-y-3 flex flex-col md:flex-row md:justify-between gap-2">
                    <div className="flex flex-row justify-between">
                        <div>
                            <p>Arcade (Monthly)</p>
                            <span>Change</span>
                        </div>
                        <span>$90/yr</span>
                    </div>
                    <hr />
                    <div className="flex flex-row justify-between">
                        <p>Online service</p>
                        <span>$10/yr</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Larger storage</p>
                        <span>$20/yr</span>
                    </div>
                </div>


            </div>
            <div className="flex flex-row justify-between">
                <span>Total (per year)</span>
                <span>$120/yr</span>
            </div>
        </div>
    )
}