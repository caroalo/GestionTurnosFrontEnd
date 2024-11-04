import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = 'TU_CLIENT_ID';
const API_KEY = 'TU_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

function CalendarIntegration() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  return (
    <div>
      <button onClick={handleAuthClick}>Sign In with Google</button>
      <button onClick={handleSignOutClick}>Sign Out</button>
    </div>
  );
}

export default CalendarIntegration;
