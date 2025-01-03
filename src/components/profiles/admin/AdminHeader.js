
import { useNavigate } from 'react-router-dom';
export default function AdminHeader() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear JWT token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('userType');

        // Redirect to login screen
        navigate('/admin');
    };

    return (
        <header className="adminHome-header">
        <input
            type="text"
            placeholder="Search"
            className="adminHome-search"
        />
        <div className="adminHome-header-right">
            <i className="notification-icon">🔔</i>
            <i className="email-icon">📧</i>
            <div className="profile-icon">W</div>
            {/* Hamburger menu */}
            <div className="hamburger-menu">
                <i className="hamburger-icon">☰</i>
                {/* Menu */}
                <div className="menu">
                    <button className="logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </header>)}