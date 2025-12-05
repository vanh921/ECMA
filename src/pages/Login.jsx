import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Lưu token vào localStorage
      localStorage.setItem("token", res.data.accessToken);

      alert("Đăng nhập thành công!");
      console.log("Token:", res.data.accessToken);
    } catch (err) {
      console.log(err);
      alert("Sai email hoặc mật khẩu");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-semibold">Login</h1>

      <form onSubmit={handleLogin} className="flex flex-col w-64 gap-3">
        <input
          type="email"
          className="border p-2"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
