import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../store/reducers/usersSlice";
import { removeUser } from "../store/reducers/usersSlice"
import AddBlock from "./AddBlock";


const Users = () => {
    const {users, isLoading, error} = useSelector(state => state.users)
    const dispatch = useDispatch()

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    useEffect(() => {
        dispatch(fetchUsersData())
    }, [dispatch])

    if(isLoading) {
        return <div>loading...</div>
    }

    if(error) {
        return <div>error: {error}</div>
    }    

    return(
        <>
        <AddBlock />
        <ul className="grid grid-cols-3 m-3 p-3">
            {users.length ?
            users.map(user => (
                <li key={user.id} className="border p-3 rounded-xl m-2 bg-yellow-400">
                    <div>
                        <p>{user.name}</p>
                        <span>{user.phone}</span>
                    </div>
                    <button className="p-2 rounded-xl bg-red-400 mt-2 mr-2" onClick={() => deleteUser(user.id)}>remove</button>
                    <button className="p-2 rounded-xl bg-green-400 mt-2">favorite</button>
                </li>
            )) : <h1>No users!!!</h1>}
        </ul>
        </>
    )
}

export default Users;