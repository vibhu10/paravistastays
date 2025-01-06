import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Loading from "../../../Loading";

export default function Dashboard() {
    const [users, setUsers] = useState([]);
    const [hosts, setHosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [menuVisible, setMenuVisible] = useState(null);
    const [filter, setFilter] = useState("user");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const entriesPerPage = 6;

    // Utility function to sanitize user/host data
    const sanitizeData = (data) =>
        data.map((item) => ({
            id: item.id !== undefined && item.id !== null ? item.id : "N/A",
            firstName: item.firstName || "N/A",
            lastName: item.lastName || "N/A",
            email: item.email || "N/A",
            password: item.password || "N/A",
            mobile: item.mobile || "N/A",
            gender: item.gender || "N/A",
            address: item.address || "N/A",
            status: item.status || "N/A",
            type: item.type || "N/A",
        }));

    // Fetch users
    const fetchUsers = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No token found. Please log in.");

            const response = await fetch(
                "https://mhmk2b29-3000.inc1.devtunnels.ms/api/admin/users",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (data && Array.isArray(data.users)) {
                setUsers(sanitizeData(data.users));
            } else {
                throw new Error("Unexpected response format.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch hosts
    const fetchHosts = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("No token found. Please log in.");

            const response = await fetch(
                "https://mhmk2b29-3000.inc1.devtunnels.ms/api/admin/hosts",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (data && Array.isArray(data.users)) {
                setHosts(sanitizeData(data.users));
            } else {
                throw new Error("Unexpected response format.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchUsers();
        fetchHosts();
    }, []);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(filteredUsers.length / entriesPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    const toggleMenu = (index) => {
        setMenuVisible(menuVisible === index ? null : index);
    };

    const handleAction = (index, action) => {
        const filteredUsers = users.filter((user) => user.type.toLowerCase() === filter.toLowerCase());
        const updatedUsers = [...users];
        const userIndex = users.findIndex((user) => user.id === filteredUsers[index].id);
        if (userIndex !== -1) {
            updatedUsers[userIndex].status = action === "activate" ? "Active" : "Rejected";
            setUsers(updatedUsers);
        }
        setMenuVisible(null);
    };

    const handleFilterChange = (type) => {
        setFilter(type);
        setCurrentPage(1);
    };

    // Determine filtered users based on filter type
    const filteredUsers =
        filter.toLowerCase() === "host"
            ? hosts
            : users.filter((user) => user.type.toLowerCase() === filter.toLowerCase());

    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + entriesPerPage);

    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

    return (
        <div className="dashboard">
            {isLoading ? (
                <Loading />
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <section className="dashboard-analytics">
                        <div className="dashboard-analytics-card">
                            <img src="/passkey.png" alt="Users" />
                            <h3>Total Users</h3>
                            <p>{users.filter((user) => user.type.toLowerCase() === "user").length}</p>
                        </div>
                        <div className="dashboard-analytics-card">
                            <img src="/calendar_month.png" alt="Hosts" />
                            <h3>Total Hosts</h3>
                            <p>{hosts.length}</p>
                        </div>
                        <div className="dashboard-analytics-card">
                            <img src="/camera_outdoor.png" alt="Influencers" />
                            <h3>Total Influencers</h3>
                            <p>{users.filter((user) => user.type.toLowerCase() === "influencer").length}</p>
                        </div>
                    </section>

                    <div className="dashboard-data-box">
                        <section className="dashboard-recent-users">
                            <h3>Recent Added Users</h3>
                            <div className="dashboard-user-filters">
                                <button
                                    onClick={() => handleFilterChange("user")}
                                    className={filter === "user" ? "active" : ""}
                                >
                                    Users
                                </button>
                                <button
                                    onClick={() => handleFilterChange("Host")}
                                    className={filter === "Host" ? "active" : ""}
                                >
                                    Hosts
                                </button>
                                <button
                                    onClick={() => handleFilterChange("Influencer")}
                                    className={filter === "Influencer" ? "active" : ""}
                                >
                                    Influencers
                                </button>
                            </div>
                            <table className="dashboard-user-table">
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Gender</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.address}</td>
                                            <td className={user.status.toLowerCase()}>{user.status}</td>
                                            <td>
                                                <div className="action-menu-container">
                                                    <button
                                                        style={{ background: "white" }}
                                                        className="action-button"
                                                        onClick={() => toggleMenu(index)}
                                                    >
                                                        ...
                                                    </button>
                                                    {menuVisible === index && (
                                                        <div className="action-menu">
                                                            <button onClick={() => handleAction(index, "activate")}>
                                                                Activate
                                                            </button>
                                                            <button onClick={() => handleAction(index, "reject")}>
                                                                Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="dashboard-pagination">
                                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                    &lt;
                                </button>
                                {[...Array(totalPages)].map((_, pageIndex) => (
                                    <button
                                        key={pageIndex}
                                        onClick={() => handlePageChange(pageIndex + 1)}
                                        className={currentPage === pageIndex + 1 ? "active" : ""}
                                    >
                                        {pageIndex + 1}
                                    </button>
                                ))}
                                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                    &gt;
                                </button>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </div>
    );
}
