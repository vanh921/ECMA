import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
function ListPage() {
   const [tours, setTours] = useState([]);
  useEffect(() => {
    const getTours = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tours");
      setTours(res.data)
    } catch (error) {
      console.log(error);
    }}
    getTours()
}, []);
  const handleDelete = async id => {
    if (confirm('Delete')) {
      try {
        await axios.delete('http://localhost:3000/tours/' + id);
        setTours(tours.filter(tour => tour.id !== id));
      } catch (error) {
        toast.error(error);
      }
    }
  };

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
             <div className="flex gap-2">
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                    <Link to={`/edit/${item.id}`}>
                      <button>Edit</button>
                    </Link>
                  </div>
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
