import './Auth.css';
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/auth/authSlice";

const AuthControl = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login({ name: "Ainash Wadhawan", email: "avinashxw@gmail.com" }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="button-group">
        {!isAuthenticated ? (
          <button className="auth-btn login-btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
        <button className="auth-btn logout-btn" onClick={handleLogout}>
            Logout
          </button>)}
      </div>
    </>
  );
};

export default AuthControl;
