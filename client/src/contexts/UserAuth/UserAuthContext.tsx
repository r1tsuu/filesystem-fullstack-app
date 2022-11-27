import { createContext, useContext } from "react";
import { User } from "@/types/User";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface IUserAuthContext {
  user: User | null;
  setUser: (user: User) => void;
  handleLogout: () => void;
}

const UserAuthContext = createContext<IUserAuthContext | null>(null);

export const UserAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  console.log(user);
  const handleLogout = () => setUser(null);

  return (
    <UserAuthContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);

  if (context === null) {
    throw new Error("ERROR: Using UserAuthContext hook outside Provider");
  }

  return context;
};
