import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase.config"; // ✅ matches the file name
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Save user to state
      setUser(result.user);

      // Save user data to Firestore
      await setDoc(
        doc(db, "users", result.user.uid),
        {
          name: result.user.displayName,
          email: result.user.email,
          points: 0,
          badges: []
        },
        { merge: true }
      );

      console.log("User saved to Firestore ✅");

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {user ? (
        <div>
          <h1 className="text-3xl font-bold">Welcome {user.displayName} 👋</h1>
          <img src={user.photoURL} alt="profile" className="rounded-full mt-4" />
        </div>
      ) : (
        <button
          onClick={handleGoogleLogin}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-xl font-semibold"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default Login;


