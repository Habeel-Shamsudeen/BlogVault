export function PopupMsg({ msg, onClick }:{
    msg:string,
    onClick:()=>void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg ">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Important Message</h3>
          <p className="text-gray-500 dark:text-gray-400">{msg}</p>
          <div className="flex justify-end gap-2">
            <button
              className="w-full text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              onClick={onClick}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
