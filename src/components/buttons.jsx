export default function Buttons() {
  return (
    <div className="flex justify-between mt-8 mx-4">
      <button className="text-gray-500 py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
        Go Back
      </button>
      <button className="bg-blue-900 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors font-medium">
        Next Step
      </button>
    </div>
  )

}