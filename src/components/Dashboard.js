import React from "react";

const Dashboard = ({ login }) => {
  return (
    <div>
      <h3>Selamat Datang {login.email}</h3>
    </div>
  );
};

export default Dashboard;
