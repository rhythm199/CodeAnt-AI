// import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import './App.css';
import CodeAntAI from './components/CodeAntAI';
import Dashboard from './components/Dashboard';
import { fetchGitHubRepositories, signInWithGitHub, signOutUser } from "./context/userContext";

function App() {
  // const { loginWithRedirect, handleLogout, isAuthenticated, user } = useAuth0();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    try {
      const { user, accessToken } = await signInWithGitHub();
      setUser(user);
      setAccessToken(accessToken);

      // Fetch user repositories
      const repositories = await fetchGitHubRepositories(accessToken);
      console.log("users", repositories);
      
      setRepos(repositories);
    } catch (error) {
      console.error("Error during login or fetching repos:", error.message);
    }
  };

  return (
    <div className="App">
      {/* {isAuthenticated && user ? <Dashboard handleLogout={handleLogout} user={user.nickname} /> : <CodeAntAI loginWithRedirect={loginWithRedirect} />} */}
      {user ? (
        <Dashboard handleLogout={signOutUser} user={user?.email} userRepositories={repos} accessToken={accessToken} />
      ) : (
        <CodeAntAI handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
