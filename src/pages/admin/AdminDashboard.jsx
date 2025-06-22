import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("adminName");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <h2>Welcome, {name}</h2>
        <p>This is Your Admin Dashboard</p>
        <button onClick={handleLogout}>Logout</button>
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <Card title="Total Products" count="--" />
          <Card title="Total Orders" count="--" />
          <Card title="Feedbacks" count="--" />
        </div>
      </div>
    </div>

    // <div>
    //   <h2>Welcome, {name} 👋</h2>
    //   <p>This is your admin dashboard</p>

    // </div>
  );
};

export default AdminDashboard;
