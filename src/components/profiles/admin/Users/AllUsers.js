import React from 'react';
import './AllUsers.css'; // Import the CSS file

export default function AllUsers() {
    return (
        <div className="AllUsers-container">
            <div className="AllUsers-search-delete-bar">
                <input type="text" placeholder="Search" className="AllUsers-search-input" />
                <button className="AllUsers-delete-button">Delete</button>
            </div>
            <table className="AllUsers-users-table">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((_, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <div className="AllUsers-user-info">
                                    <img src="https://via.placeholder.com/40" alt="User" className="AllUsers-user-avatar" />
                                    <span>Yonna</span>
                                </div>
                            </td>
                            <td>Yonna Peeter</td>
                            <td>yonna@gmail.com</td>
                            <td className="AllUsers-role">Editor</td>
                            <td className="AllUsers-status">Active</td>
                            <td>
                                <div className="AllUsers-action-menu">
                                    <button className="AllUsers-action-button">...</button>
                                    <div className="AllUsers-dropdown-menu">
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
