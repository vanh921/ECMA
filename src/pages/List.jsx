import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ListPage() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tours");
      setTours(res.data);
    } catch (err) {
      console.log("Lỗi lấy dữ liệu:", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    const ok = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (!ok) return;

    try {
      await axios.delete(`http://localhost:3000/tours/${id}`);
      fetchTours();
    } catch (err) {
      console.log("Lỗi xóa:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Danh sách Tours
      </h2>

      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-4 text-left">ID</th>
            <th className="py-3 px-4 text-left">Tên tour</th>
            <th className="py-3 px-4 text-left">Giá</th>
            <th className="py-3 px-4 text-left">Danh mục</th>
            <th className="py-3 px-4 text-center">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {tours.map((tour, index) => (
            <tr
              key={tour.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition`}
            >
              <td className="py-3 px-4">{tour.id}</td>
              <td className="py-3 px-4">{tour.name}</td>
              <td className="py-3 px-4 text-green-600 font-semibold">
                {tour.price.toLocaleString()}đ
              </td>
              <td className="py-3 px-4">{tour.category}</td>
              <td className="flex gap-2">

  <Link
    to={`/edit/${tour.id}`}
    className="px-3 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
  >
    Edit
  </Link>

  <button
    onClick={() => handleDelete(tour.id)}
    className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
  >
    Delete
  </button>

</td>
            </tr>
          ))}

          {tours.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="text-center py-6 text-gray-500 italic"
              >
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
