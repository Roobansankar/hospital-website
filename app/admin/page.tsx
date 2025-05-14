// "use client";
// import { useState, useEffect } from "react";

// const AdminPage = () => {
//   const [username, setUsername] = useState("demo");
//   const [password, setPassword] = useState("demo123");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "demo" && password === "demo123") {
//       setIsLoggedIn(true);
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       setLoading(true);
//       fetch("https://68247a3465ba0580339a73c6.mockapi.io/hospitalbooking")
//         .then((res) => res.json())
//         .then((data) => setAppointments(data))
//         .catch(() => setError("Failed to fetch data"))
//         .finally(() => setLoading(false));
//     }
//   }, [isLoggedIn]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {!isLoggedIn ? (
//         <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
//           <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <div>
//               <label className="block font-medium">Username</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="block font-medium">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border rounded"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {error && <p className="text-red-600">{error}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="overflow-x-auto bg-white rounded shadow-md p-4">
//           <h2 className="text-2xl font-bold mb-4 text-center">Appointments</h2>
//           {loading ? (
//             <p className="text-center">Loading...</p>
//           ) : error ? (
//             <p className="text-center text-red-600">{error}</p>
//           ) : (
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     #
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Name
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Phone
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Date
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Time
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Doctor
//                   </th>
//                   <th className="px-4 py-2 text-left text-sm font-semibold">
//                     Message
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {appointments.map((item, index) => (
//                   <tr key={item.id}>
//                     <td className="px-4 py-2">{index + 1}</td>
//                     <td className="px-4 py-2">{item.name}</td>
//                     <td className="px-4 py-2">{item.phone}</td>
//                     <td className="px-4 py-2">{item.date}</td>
//                     <td className="px-4 py-2">{item.time}</td>
//                     <td className="px-4 py-2">{item.doctor}</td>
//                     <td className="px-4 py-2">{item.message}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminPage;

"use client";
import { useState, useEffect } from "react";

const AdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://68247a3465ba0580339a73c6.mockapi.io/hospitalbooking";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "demo" && password === "demo123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
    }
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setAppointments(data);
    } catch {
      setError("Failed to fetch data");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setAppointments((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert("Failed to delete item.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchAppointments();
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-medium">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Appointments</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments found.</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    #
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Time
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Doctor
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Message
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {appointments.map((item, index) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.phone}</td>
                    <td className="px-4 py-2">{item.date}</td>
                    <td className="px-4 py-2">{item.time}</td>
                    <td className="px-4 py-2">{item.doctor}</td>
                    <td className="px-4 py-2">{item.message}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
