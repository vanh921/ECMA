import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


export default function EditTourPage() {
const { id } = useParams();
const navigate = useNavigate();

const [form, setForm] = useState({
name: "",
destination: "",
duration: "",
price: "",
image: "",
description: "",
available: "",
category: "tour nội địa",
active: true,
});


useEffect(() => {
const fetchTour = async () => {
try {
const { data } = await axios.get(`http://localhost:3000/tours/${id}`);
setForm(data);
} catch (error) {
toast.error("Không tải được dữ liệu");
}};
fetchTour();
}, [id]);


const handleChange = (e) => {
const { name, value } = e.target;
setForm({ ...form, [name]: value });
};


const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.put(`http://localhost:3000/tours/${id}`, {
...form,
price: Number(form.price),
available: Number(form.available),
});
toast.success("Cập nhật thành công");
navigate("/tours");
} catch (error) {
toast.error(error.message);
}
};


return (
<div className="p-6 max-w-2xl mx-auto">
<h1 className="text-2xl font-semibold mb-6">Chỉnh sửa Tour</h1>


<form className="space-y-4" onSubmit={handleSubmit}>
<input name="name" value={form.name} onChange={handleChange} placeholder="Tên tour" className="w-full border p-2 rounded" />
<input name="destination" value={form.destination} onChange={handleChange} placeholder="Địa điểm" className="w-full border p-2 rounded" />
<input name="duration" value={form.duration} onChange={handleChange} placeholder="Thời lượng" className="w-full border p-2 rounded" />
<input name="price" value={form.price} onChange={handleChange} placeholder="Giá" type="number" className="w-full border p-2 rounded" />
<input name="image" value={form.image} onChange={handleChange} placeholder="Link hình ảnh" className="w-full border p-2 rounded" />
<textarea name="description" value={form.description} onChange={handleChange} placeholder="Mô tả" className="w-full border p-2 rounded" />
<input name="available" value={form.available} onChange={handleChange} placeholder="Số lượng" type="number" className="w-full border p-2 rounded" />


<select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
<option value="tour nội địa">tour nội địa</option>
<option value="tour quốc tế">tour quốc tế</option>
</select>


<button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Cập nhật</button>
</form>
</div>
);
}