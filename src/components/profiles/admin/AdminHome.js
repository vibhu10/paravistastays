import React, { useState, useEffect } from "react";
import "./AdminHome.css";

// Components
import Dashboard from "./Dashboard/Dashboard";
import GuestList from "./Guest/GuestList";
import BookingList from "./Guest/BookingList";
import HostList from "./Host/HostList";
import Influencer from "./Influencer/Influencer";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AllUsers from "./Users/AllUsers";
import AddUsers from "./Users/AddUsers";
import Profile from "./Users/Profile";
import Loading from "../../Loading";
import BookingListHost from "./Host/BookingListHost";
import PaymentAndfinance from "./Payments/PaymentAndFinance";
export default function AdminHome() {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [guestMenuOpen, setGuestMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [hostMenuOpen, setHostMenuOpen] = useState(false);
    const [userType, setUserType] = useState(null);

    useEffect(() => {
        // Get user type from localStorage
        const storedUserType = localStorage.getItem("userType");
        setUserType(storedUserType);
    }, []);

    const renderContent = () => {
        switch (activeSection) {
            case "Dashboard":
                return <Dashboard />;
            case "GuestList":
                return userType === "superadmin" ? <GuestList /> : <div>Access Denied</div>;
            case "BookingList":
                return userType === "superadmin" || userType === "Author" ? (
                    <BookingList />
                ) : (
                    <div>Access Denied</div>
                );
            case "HostList":
                return userType === "superadmin" ? <HostList/> : <div>Access Denied</div>;
                case "BookingListHost":
                    return userType === "superadmin" ? <BookingListHost/> : <div>Access Denied</div>;
            case "Influencer":
                return userType === "superadmin" || userType === "Author" ? (
                    <Influencer />
                ) : (
                    <div>Access Denied</div>
                );
            case "AllUsers":
                return userType === "superadmin" ? <AllUsers /> : <div>Access Denied</div>;
            case "AddUsers":
                return userType === "superadmin" ? <AddUsers /> : <div>Access Denied</div>;
            case "Profile":
                return <Profile />;

                case "PaymentAndFinance":
                    return <PaymentAndfinance/>;
               
            default:
                return <Dashboard />;
        }
    };

    if (!userType) {
        return <Loading />; // Show a loading state until userType is determined
    }

    return (
        <div className="adminHome-container">
            <AdminSidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                guestMenuOpen={guestMenuOpen}
                setGuestMenuOpen={setGuestMenuOpen}
                userMenuOpen={userMenuOpen}
                setUserMenuOpen={setUserMenuOpen}
                hostMenuOpen={hostMenuOpen}
                setHostMenuOpen={setHostMenuOpen}
            />
            <div className="adminHome-content">
                <AdminHeader />
                <main>{renderContent()}</main>
            </div>
        </div>
    );
}
