const Modal = ({setShowModal}) => {
    return(
        <div className="flex justify-center my-5">
            <div className="bg-orange-300 inline-block rounded-xl border p-5 text-slate-700 text-xl">
                <p>Input values length should be more or equal 4 ...</p>
                <button className="text-white bg-red-500 px-3 py-1 mt-2 rounded-md" onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>
    )
}

export default Modal;