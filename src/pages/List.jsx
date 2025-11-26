import axios from "axios";
import { useEffect, useState } from "react";
function ListPage() {
   const [tours, setTours] = useState([]);


  useEffect(() => {
    const getTours = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tours");
      setTours(res.data)
    } catch (error) {
      console.log(error);
    }
    }
    getTours()
}, []);

  return (
    <div className="p-6">
  <h1 className="text-2xl font-semibold mb-6">Danh sách Tours</h1>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 rounded-lg">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Tên tour</th>
          <th className="px-4 py-2 border border-gray-300 text-left">Giá</th>
        </tr>
      </thead>

      <tbody>
        {tours.map((item, index) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-300">{item.id}</td>
            <td className="px-4 py-2 border border-gray-300">{item.name}</td>
            <td className="px-4 py-2 border border-gray-300">{item.price}</td>
            <td className="px-4 py-2 border border-gray-300">
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}

export default ListPage;
