import { useState } from 'react';
import './UserCard.css';

const UserCard = ({ name, email }) => {
  const [isViewClicked, setIsViewClicked] = useState(false);
  const [isMessageClicked, setIsMessageClicked] = useState(false);

  // create initials from the user's name
  const createInitials = (userName) => {
    return userName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // handle view profile click
  const handleViewProfile = () => {
    setIsViewClicked(true);
    console.log(`Viewing profile for: ${name}`);
    // here you would typically navigate to a profile page
    alert(`Opening profile for ${name}`);
    
    // reset button state after a short delay
    setTimeout(() => {
      setIsViewClicked(false);
    }, 200);
  };

  // handle send message click
  const handleSendMessage = () => {
    setIsMessageClicked(true);
    console.log(`Sending message to: ${name} (${email})`);
    // here you would typically open a messaging interface
    alert(`Opening message composer for ${name}`);
    
    // reset button state after a short delay
    setTimeout(() => {
      setIsMessageClicked(false);
    }, 200);
  };

  return (
    <div className="user-card">
      <div className="user-avatar">
        <span className="avatar-text">{createInitials(name)}</span>
      </div>
      
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
      </div>
      
      <div className="user-actions">
        <button 
          className={`action-btn view-btn ${isViewClicked ? 'clicked' : ''}`}
          onClick={handleViewProfile}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          View Profile
        </button>
        <button 
          className={`action-btn message-btn ${isMessageClicked ? 'clicked' : ''}`}
          onClick={handleSendMessage}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default UserCard; 