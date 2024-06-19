

export const BasicDetail = () => {
  return (
    <section>
        <form className="flex flex-col gap-5">
            <div className="flex bg-white rounded p-5 relative">
                <div className="w-full">
                    <h2 className="font-bold mb-3">Aadhaar Details</h2>
                    <input type="text" id="aadhaar" class="w-2/5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
            </div>
            <div className="flex bg-white rounded p-5 relative">
                <div className="w-full">
                    <h2 className="font-bold mb-3">Aadhaar Details</h2>
                    <input type="text" id="aadhaar" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required/>
                </div>
            </div>
        </form>
    </section>
  )
}
