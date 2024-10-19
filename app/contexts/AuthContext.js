'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = Cookies.get('user');
		if (storedUser) {
			setIsLoggedIn(true);
			setUser(JSON.parse(storedUser));
		}
	}, []);

	useEffect(() => {
		console.log('AuthContext user state changed:', user);
	}, [user]);

	const login = (userData) => {
		console.log('Login function called in AuthContext with:', userData);
		Cookies.set('user', JSON.stringify(userData), { expires: 7 });
		setIsLoggedIn(true);
		setUser(userData);
		console.log('User state after login:', userData);
	};

	const logout = () => {
		console.log('Logout function called in AuthContext');
		Cookies.remove('user');
		setIsLoggedIn(false);
		setUser(null);
		console.log('User state after logout: null');
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, user, login, logout, setIsLoggedIn }}>{children}</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
