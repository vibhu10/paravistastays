export default function AdminSidebar({activeSection,setActiveSection,guestMenuOpen,setGuestMenuOpen}){

    return(
              <aside className="adminHome-sidebar">
                        <img
                            src="/paradise.jpeg"
                            alt="Paradise Logo"
                            className="adminHome-logo"
                        />
                        <ul className="adminHome-menu">
                            <li
                                className={activeSection === "Dashboard" ? "active" : ""}
                                onClick={() => setActiveSection("Dashboard")}
                            >
                                <img style={{ width: "30px" }} src="/dashboard.png" />
                                Dashboard
                            </li>
                            <li
                                className={guestMenuOpen ? "active" : ""}
                                onClick={() => setGuestMenuOpen(!guestMenuOpen)} // Toggle Guest menu
                            >
                                <img style={{ width: "30px" }} src="/passkey (1).png" />
                                Guest
                            </li>
                            {guestMenuOpen && (
                                <ul className="adminHome-submenu">
                                    <li
                                        className={activeSection === "GuestList" ? "active" : ""}
                                        onClick={() => setActiveSection("GuestList")}
                                    >
                                        <img style={{ width: "20px" }} src="/guest_list_icon.png" />
                                        Guest List
                                    </li>
                                    <li
                                        className={activeSection === "BookingList" ? "active" : ""}
                                        onClick={() => setActiveSection("BookingList")}
                                    >
                                        <img style={{ width: "20px" }} src="/booking_list_icon.png" />
                                        Booking List
                                    </li>
                                </ul>
                            )}
                            <li
                                className={activeSection === "Host" ? "active" : ""}
                                onClick={() => setActiveSection("Host")}
                            >
                                <img style={{ width: "30px" }} src="/calendar_month (1).png" />
                                Host
                            </li>
                            <li
                                className={activeSection === "Influencer" ? "active" : ""}
                                onClick={() => setActiveSection("Influencer")}
                            >
                                <img style={{ width: "30px" }} src="/camera_outdoor (1).png" />
                                Become an Influencer
                            </li>
                        </ul>
                    </aside>
        
    )
}