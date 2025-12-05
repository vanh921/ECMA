import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/register", {
        email,
        password,
      });

      alert("Đăng ký thành công!");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-semibold">Register</h1>

      <form onSubmit={handleRegister} className="flex flex-col w-64 gap-3">
        <input
          type="email"
          className="border p-2"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="border p-2"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          submit
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
