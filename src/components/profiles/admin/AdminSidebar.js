import './AdminSidebar.css';

export default function AdminSidebar({
    activeSection,
    setActiveSection,
    guestMenuOpen,
    setGuestMenuOpen,
    userMenuOpen,
    setUserMenuOpen,
    hostMenuOpen,
    setHostMenuOpen,
}) {
    return (
        <aside className="adminHome-sidebar">
            <img
                src="/paradise.jpeg"
                alt="Paradise Logo"
                className="adminHome-logo"
            />
            <ul className="adminHome-menu">
                {/* Dashboard */}
                <li
                    className={activeSection === 'Dashboard' ? 'active' : ''}
                    onClick={() => setActiveSection('Dashboard')}
                >
                    <img style={{ width: '20px' }} src="/dashboard.png" alt="Dashboard" />
                    Dashboard
                </li>

                {/* Guest */}
                <li
                    className={guestMenuOpen ? 'active' : ''}
                    onClick={() => setGuestMenuOpen(!guestMenuOpen)}
                >
                    <img style={{ width: '20px' }} src="/passkey (1).png" alt="Guest" />
                    Guest
                </li>
                {guestMenuOpen && (
                    <ul className="adminHome-submenu">
                        <li
                            className={activeSection === 'GuestList' ? 'active' : ''}
                            onClick={() => setActiveSection('GuestList')}
                        >
                            <span className="adminHome-submenu-dot" /> Guest List
                        </li>
                        <li
                            className={activeSection === 'BookingList' ? 'active' : ''}
                            onClick={() => setActiveSection('BookingList')}
                        >
                            <span className="adminHome-submenu-dot" /> Booking List
                        </li>
                    </ul>
                )}

                {/* Host */}
                <li
                    className={hostMenuOpen ? 'active' : ''}
                    onClick={() => setHostMenuOpen(!hostMenuOpen)}
                >
                    <img style={{ width: '20px' }} src="/calendar_month (1).png" alt="Host" />
                    Host
                </li>
                {hostMenuOpen && (
                    <ul className="adminHome-submenu">
                        <li
                            className={activeSection === 'HostList' ? 'active' : ''}
                            onClick={() => setActiveSection('HostList')}
                        >
                            <span className="adminHome-submenu-dot" /> Host List
                        </li>
                        <li
                            className={activeSection === 'BookingList' ? 'active' : ''}
                            onClick={() => setActiveSection('BookingListHost')}
                        >
                            <span className="adminHome-submenu-dot" /> Booking List
                        </li>
                    </ul>
                )}

                {/* Influencer */}
                <li
                    className={activeSection === 'Influencer' ? 'active' : ''}
                    onClick={() => setActiveSection('Influencer')}
                >
                    <img style={{ width: '20px' }} src="/camera_outdoor (1).png" alt="Influencer" />
                    Become an Influencer
                </li>

                {/* Payment and Finance Management */}
                <li
                    className={activeSection === 'PaymentAndFinance' ? 'active' : ''}
                    onClick={() => setActiveSection('PaymentAndFinance')}
                >
                    <img style={{ width: '20px' }} src="/credit_card.png" alt="Payment and Finance Management" />
                    Payment and Finance Management
                </li>

                {/* Customer Support */}
                <li
                    className={activeSection === 'Support' ? 'active' : ''}
                    onClick={() => setActiveSection('Support')}
                >
                    <img style={{ width: '20px' }} src="/comment.png" alt="Customer Support" />
                    Customer Support
                </li>

                {/* Users */}
                <li
                    className={userMenuOpen ? 'active' : ''}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                    <img style={{ width: '20px' }} src="/passkey (1).png" alt="Users" />
                    Users
                </li>
                {userMenuOpen && (
                    <ul className="adminHome-submenu">
                        <li
                            className={activeSection === 'AllUsers' ? 'active' : ''}
                            onClick={() => setActiveSection('AllUsers')}
                        >
                            <span className="adminHome-submenu-dot" /> All Users
                        </li>
                        <li
                            className={activeSection === 'AddUsers' ? 'active' : ''}
                            onClick={() => setActiveSection('AddUsers')}
                        >
                            <span className="adminHome-submenu-dot" /> Add New Users
                        </li>
                        <li
                            className={activeSection === 'Profile' ? 'active' : ''}
                            onClick={() => setActiveSection('Profile')}
                        >
                            <span className="adminHome-submenu-dot" /> Profile
                        </li>
                    </ul>
                )}
            </ul>
        </aside>
    );
}
