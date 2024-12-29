import React, { useState } from 'react';
import './HostWatchingInfluencer.css';
import InfluencerData from './InfluencerData';
import HostWatchingInfluencerPastCollab from './HostWatchingInfluencerPastCollab';

const HostWatchingInfluencer = () => {
  const [activeTab, setActiveTab] = useState('influencers'); // This state tracks the active tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'influencers':
        return <InfluencerData/>;
      case 'calendar':
        return <div>Showing content for Calendar tab</div>;
      case 'properties':
        return <div>Showing content for Properties tab</div>;
      case 'inbox':
        return <div>Showing content for Inbox tab</div>;
      case 'upcoming':
        return <HostWatchingInfluencerPastCollab />;
      case 'menu':
        return <div>Showing content for Menu tab</div>;
      default:
        return <div>Click on a tab to see content</div>;
    }
  };

  return (
    <div className="HostWatchingInfluencer-container">
      <header className="HostWatchingInfluencer-header">
        <div className="HostWatchingInfluencer-logo">
          <img
            src="/paradise.jpeg"
            alt="paradise"
            style={{
              width: '150px',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </div>
        <nav className="HostWatchingInfluencer-navigation">
          <ul>
            <li onClick={() => setActiveTab('influencers')}>Influencers</li>
            <li onClick={() => setActiveTab('calendar')}>Calendar</li>
            <li onClick={() => setActiveTab('properties')}>Properties</li>
            <li onClick={() => setActiveTab('inbox')}>Inbox</li>
            <li onClick={() => setActiveTab('upcoming')}>Upcoming</li>
            <li onClick={() => setActiveTab('menu')}>Menu</li>
          </ul>
        </nav>
        <div className="HostWatchingInfluencer-profile-actions">
          
          
        </div>
      </header>

      <main className="HostWatchingInfluencer-main-content">
        {renderTabContent()} {/* Renders content based on active tab */}
      </main>
    </div>
  );
};

export default HostWatchingInfluencer;
