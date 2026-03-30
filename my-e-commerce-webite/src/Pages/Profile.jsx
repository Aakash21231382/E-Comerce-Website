// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [edit, setEdit] = useState(false);

//   const navigate = useNavigate();

//   // 👉 Load user
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (!savedUser) {
//       navigate("/login");
//     } else {
//       setUser(savedUser);
//     }
//   }, []);

//   // 👉 Logout
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   // 👉 Update user
//   const handleUpdate = () => {
//     localStorage.setItem("user", JSON.stringify(user));
//     setEdit(false);
//     alert("Profile Updated ✅");
//   };

//   if (!user) return null;

//   return (
//     <div className="container mt-5 pt-5">

//       <div className="row justify-content-center">
//         <div className="col-md-6">

//           <div className="card shadow p-4 text-center">

//             {/* Avatar */}
//             <img
//               src="https://i.pravatar.cc/150"
//               alt=""
//               className="rounded-circle mx-auto mb-3"
//               style={{ width: "120px" }}
//             />

//             <h4>My Profile</h4>

//             {/* Name */}
//             <div className="mb-3 mt-3 text-start">
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 disabled={!edit}
//                 value={user.name}
//                 onChange={(e) =>
//                   setUser({ ...user, name: e.target.value })
//                 }
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-3 text-start">
//               <label>Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 disabled={!edit}
//                 value={user.email}
//                 onChange={(e) =>
//                   setUser({ ...user, email: e.target.value })
//                 }
//               />
//             </div>

//             {/* Buttons */}
//             {!edit ? (
//               <button
//                 className="btn btn-warning w-100 mb-2"
//                 onClick={() => setEdit(true)}
//               >
//                 Edit Profile
//               </button>
//             ) : (
//               <button
//                 className="btn btn-success w-100 mb-2"
//                 onClick={handleUpdate}
//               >
//                 Save Changes
//               </button>
//             )}

//             <button
//               className="btn btn-danger w-100"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>

//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Profile;











import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  // 👉 Name based avatar logic
  const getAvatar = (name) => {
    if (!name) return "https://randomuser.me/api/portraits/men/32.jpg";

    const femaleNames = [
      "priya", "neha", "pooja", "anjali", "kavita",
      "sonam", "ritu", "sneha", "komal", "shreya"
    ];

    const lowerName = name.toLowerCase();

    const isFemale = femaleNames.some((n) =>
      lowerName.includes(n)
    );

    return isFemale
      ? "https://randomuser.me/api/portraits/women/44.jpg"
      : "https://randomuser.me/api/portraits/men/32.jpg";
  };

  // 👉 Load user
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      navigate("/login");
    } else {
      setUser(savedUser);
    }
  }, []);

  // 👉 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 👉 Update
  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEdit(false);
    alert("Profile Updated ✅");
  };

  if (!user) return null;

  return (
    <div className="container mt-5 pt-5">

      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow p-4 text-center">

            {/* 👇 Dynamic Avatar */}
            <img
              src={getAvatar(user.name)}
              alt=""
              className="rounded-circle mx-auto mb-3"
              style={{ width: "120px" }}
            />

            <h4>My Profile</h4>

            {/* Name */}
            <div className="mb-3 mt-3 text-start">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                disabled={!edit}
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="mb-3 text-start">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                disabled={!edit}
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
              />
            </div>

            {/* Buttons */}
            {!edit ? (
              <button
                className="btn btn-warning w-100 mb-2"
                onClick={() => setEdit(true)}
              >
                Edit Profile
              </button>
            ) : (
              <button
                className="btn btn-success w-100 mb-2"
                onClick={handleUpdate}
              >
                Save Changes
              </button>
            )}

            <button
              className="btn btn-danger w-100"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;