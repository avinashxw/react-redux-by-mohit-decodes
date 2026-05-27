import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/userSlice";
import './User.css';

const User = () => {

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="users-container">
                <h1 className="users-title">User Listing:</h1>
                <ul className="users-list">
                    {
                        users.map(user => (
                            <li key={user.id} className="users-item">
                                {user.name}: {user.email}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
};

export default User;