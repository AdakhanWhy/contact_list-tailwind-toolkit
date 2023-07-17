import { useState } from "react"
import { addUser } from "../store/reducers/usersSlice"
import { useDispatch } from "react-redux"
import Modal from "./Modal"

const AddBlock = () => {
    const dispatch = useDispatch()
    const [inp, setInp] = useState('')
    const [phone, setPhone] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleInp = (e) => {
        setInp(e.target.value)
    }

    const handlePhoneInp = (e) => {
        setPhone(e.target.value)
    }

    const handleClick = () => {
        if(inp.length < 4 || phone.length < 4) {
            setShowModal(true)
            return
        }
        let obj = {
            id: Date.now(),
            phone: phone,
            name: inp
        }
        dispatch(addUser(obj))
        setInp('')
        setPhone('')
    }

    return(
        showModal ? <Modal setShowModal={setShowModal} /> :
        <div>
            <div className="flex justify-center mt-5">
                <input className="p-2 border rounded-lg rounded-r-none" placeholder="name" value={inp} onChange={handleInp} type="text" />
                <input className="p-2 border" placeholder="phone" value={phone} onChange={handlePhoneInp} type="text" />
                <button className="bg-[#1da1f2] text-white rounded-lg rounded-l-none px-5" onClick={handleClick}>add</button>
            </div>
        </div>
    )
}

export default AddBlock;