import React, { useState, useEffect } from "react";
import "./AdminHome.css";

// Components
import Dashboard from "./Dashboard/Dashboard";
import GuestList from "./Guest/GuestList";
import BookingList from "./Guest/BookingList";
import Host from "./Host/Host";
import Influencer from "./Influencer/Influencer";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Loading from '../../Loading'
export default function AdminHome() {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [guestMenuOpen, setGuestMenuOpen] = useState(false);
    const [userType, setUserType] = useState(null);
   console.log(userType)
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
            case "Host":
                return userType === "superadmin" ? <Host /> : <div>Access Denied</div>;
            case "Influencer":
                return userType === "superadmin" ? <Influencer /> : <div>Access Denied</div>;
            default:
                return <Dashboard />;
        }
    };

    if (!userType) {
        return <Loading/>; // Show a loading state until userType is determined
    }

    return (
        <div className="adminHome-container">
            {/* Sidebar */}
            <AdminSidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                guestMenuOpen={guestMenuOpen}
                setGuestMenuOpen={setGuestMenuOpen}
            />
            {/* Main Content */}
            <div className="adminHome-content">
                {/* Header */}
                <AdminHeader />

                {/* Dynamic Content */}
                <main>{renderContent()}</main>
            </div>
        </div>
    );
}
