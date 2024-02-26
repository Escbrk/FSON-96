import { useUser } from "../../userContext";

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcole, {username}</p>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </div>
  );
};
