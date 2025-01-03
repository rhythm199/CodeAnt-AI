import { auth, provider } from '../firebase'; // Ensure these are defined and imported
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

//fetch repositories
export const fetchGitHubRepositories = async (accessToken) => {
    const apiUrl = "https://api.github.com/user/repos";

    try {
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching repositories:", error.message);
        throw error;
    }
};

//sign in user
export const signInWithGitHub = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        if (result) {
            const user = result.user; // Extract user details
            const credential = GithubAuthProvider.credentialFromResult(result);
            const accessToken = credential?.accessToken; // Safely access accessToken

            return { user, accessToken }; // Return necessary details
        }
    } catch (error) {
        console.error('Error during GitHub sign-in:', error.message);
        throw error; // Re-throw for calling functions to handle
    }
};

// sign out user
export const signOutUser = async () => {
    try {
        await signOut(auth);

        window.location.href = '/';
    } catch (error) {
        console.error('Error during sign-out:', error);
    }
};