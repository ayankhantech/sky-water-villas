import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [store, setStore] = useState("");
  const [data, setData] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const storeToken = (newToken) => {
    setToken(newToken);
    setIsLoggedIn(true);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  const checkTokenExpiry = () => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        setIsExpired(isExpired);
        if (isExpired) {
          logout();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
  };

  useEffect(() => {
    checkTokenExpiry();
  }, [token]);

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/service", {
        method: "GET",
      });
      if (response.ok) {
        const serviceData = await response.json();
        setStore(serviceData.msg);
      } else {
        console.error("Failed to fetch services");
      }
    } catch (error) {
      console.log("Error fetching service data:", error);
    }
  };

  const userData = async () => {
    if (!token) {
      console.log("No token found. User is not authenticated.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/userData", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const res_userData = await response.json();
        setData(res_userData.userData);
      } else {
        console.error("Failed to fetch user data");
        logout();
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      logout();
    }
  };

  useEffect(() => {
    if (isLoggedIn && !isExpired) {
      getServices();
      userData();
    }
  }, [isLoggedIn, isExpired, token]);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        logout,
        isLoggedIn,
        store,
        data,
        token,
        isExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthUseContext = useContext(AuthContext);
  if (!AuthUseContext) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return AuthUseContext;
};
