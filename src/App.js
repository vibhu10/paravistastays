import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import EdifInfluencerProfile from './components/influencer/Edif-Influencer-Profile';
import Inbox from './components/influencer/Inbox';
import HostRegistration from './components/Host-Registration/Host-Registration';
import ProfilePage from './components/profiles/guest/profilePage';
import AdminHome from './components/profiles/admin/AdminHome';
import HostProfile from './components/profiles/host/HostProfile';
import Home from './components/Home/Home';
// import DisplayProperty from './components/Home/features/DisplayProperty';
import HostWatchingInfluencer from './components/HostWatchingInfluencer/HostWatchingInfluencer';
import AdminLogin from './components/profiles/admin/AdminLogin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-profile" element={<ProfilePage />} />
          <Route path="/host-registration" element={<HostRegistration />} />
          <Route path="/influencer" element={<EdifInfluencerProfile />} />
          <Route path="/influencer/inbox" element={<Inbox />} />
          <Route path="/hostlogin" element={<HostProfile />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/super-admin-dashboard" element={<AdminHome />} />
          {/* <Route path="/property" element={<DisplayProperty />} /> */}
          <Route path="/host-watching-influencer" element={<HostWatchingInfluencer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
