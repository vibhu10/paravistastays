import React, { useState } from 'react';
import './Edit-Influencer-Profile.css';
import Inbox from './Inbox';
import PastCollaborations from './PastCollaborations';
import InfluencerProfile from './InfluencerProfile';

export default function EdifInfluencerProfile() {
  const [activeSection, setActiveSection] = useState('host');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="EdifInfluencerProfile-influencer-profile">
      {/* Header Section */}
      <header className="EdifInfluencerProfile-header-influencer">
        <div className="EdifInfluencerProfile-header-influencer-left">
          <img src="/paradise.jpeg" alt="paradise" />
        </div>
        <nav className="EdifInfluencerProfile-header-influencer-middle">
          <ul>
            <li onClick={() => handleSectionChange('host')}>Host</li>
            <li onClick={() => handleSectionChange('calendar')}>Calendar</li>
            <li onClick={() => handleSectionChange('properties')}>Properties</li>
            <li onClick={() => handleSectionChange('inbox')}>Inbox</li>
            <li onClick={() => handleSectionChange('upcoming')}>Upcoming</li>
            <li onClick={() => handleSectionChange('menu')}>Menu</li>
          </ul>
        </nav>

        <div className="EdifInfluencerProfile-header-influencer-right"></div>
      </header>

      {/* Main Content */}
      <main className="EdifInfluencerProfile-main-content">
    
        <div className="EdifInfluencerProfile-sections">
          {activeSection === 'host' && (
            <section>
            <InfluencerProfile/>
            </section>
          )}

          {activeSection === 'calendar' && (
            <section>
              <h2>Calendar Section</h2>
              {/* Calendar content here */}
            </section>
          )}

          {activeSection === 'properties' && (
            <section>
              <h2>Properties Section</h2>
              {/* Properties content here */}
            </section>
          )}

          {activeSection === 'inbox' && (
            <section>
         <Inbox/>
            </section>
          )}

          {activeSection === 'upcoming' && (
            <section>
          
          <PastCollaborations/>
            </section>
          )}

          {activeSection === 'menu' && (
            <section>
              <h2>Menu Section</h2>
              {/* Menu content here */}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
