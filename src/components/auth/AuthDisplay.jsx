import { useSelector } from 'react-redux';

const AuthDisplay = () => {

    const { isAuthenticated, user } = useSelector((state) => state.auth);

    return (
        <>
            <div className="user-status">
                {
                    isAuthenticated ? <p>You are logged in as {user?.name || 'GuestUser'}</p> : <p>You are not logged in</p>
                }
            </div>
        </>
    )
};

export default AuthDisplay;