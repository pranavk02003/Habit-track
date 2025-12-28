import React from "react";

const Profile = () => {
  return (
    <div className="p-4 pb-24 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Profile</h2>

      <div className="bg-white rounded-xl shadow p-4 space-y-3">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">Pranav K</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total Habits</p>
          <p className="font-medium">2</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Streak</p>
          <p className="font-medium">5 days 🔥</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;