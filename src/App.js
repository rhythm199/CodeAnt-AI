import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ThemeProvider } from './context/ThemeContext'
import CodeAntAI from './components/CodeAntAI';
import Dashboard from './components/Dashboard';
import { fetchGitHubRepositories, signInWithGitHub, signOutUser } from "./context/userContext";

function App() {
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

      setRepos(repositories);
    } catch (error) {
      console.error("Error during login or fetching repos:", error.message);
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter basename="/CodeAnt-AI">
          <Routes>
            <Route index path="/" element={<CodeAntAI />} />
            <Route path="/dashboard" element={<Dashboard user="rhythm199" />} />
          </Routes>
        </BrowserRouter>
        {/* {user ? (
        <Dashboard handleLogout={signOutUser} user={user?.email} userRepositories={repos} accessToken={accessToken} />
      ) : (
        <CodeAntAI handleLogin={handleLogin} />
      )} */}
      </div>
    </ThemeProvider>
  );
}

export default App;
