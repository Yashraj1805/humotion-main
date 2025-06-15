import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaEdit, FaSave, FaCamera, FaCog, FaLock, FaBell, FaShieldAlt, FaTrash } from 'react-icons/fa';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    company: 'Tech Corp',
    location: 'New York, USA',
    bio: 'AI enthusiast and technology consultant with over 5 years of experience in machine learning and artificial intelligence.',
    role: 'Senior AI Consultant',
    joinDate: 'January 2023'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load profile data from localStorage
    const savedProfile = localStorage.getItem('userProfile');
    const savedImage = localStorage.getItem('profileImage');
    if (savedProfile) {
      setProfileData(JSON.parse(savedProfile));
    }
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(profileData));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    // Save to localStorage immediately
    localStorage.setItem('userProfile', JSON.stringify({
      ...profileData,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result as string;
        setProfileImage(imageData);
        localStorage.setItem('profileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Here you would typically make an API call to change the password
    alert('Password changed successfully!');
    setShowPasswordModal(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleDeleteAccount = () => {
    // Here you would typically make an API call to delete the account
    localStorage.removeItem('userProfile');
    localStorage.removeItem('profileImage');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden mb-8 border border-white/20"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="px-4 sm:px-8 py-6 relative">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="relative -mt-20 sm:mt-0 sm:absolute sm:-top-20 sm:left-8">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 backdrop-blur-lg p-2 shadow-lg border border-white/20"
                    >
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                          {profileData.name.charAt(0)}
                        </div>
                      )}
                      <label
                        htmlFor="image-upload"
                        className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      >
                        <FaCamera className="w-4 h-4" />
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </label>
                    </motion.div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-40 text-center sm:text-left w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">{profileData.name}</h1>
                        <p className="text-white/80">{profileData.role}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={isEditing ? handleSave : handleEdit}
                        className="mt-4 sm:mt-0 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                      >
                        {isEditing ? (
                          <>
                            <FaSave className="w-4 h-4" />
                            <span>Save Changes</span>
                          </>
                        ) : (
                          <>
                            <FaEdit className="w-4 h-4" />
                            <span>Edit Profile</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                    <p className="text-white/60 mt-2">Member since {profileData.joinDate}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              {/* Main Info */}
              <div className="md:col-span-2 space-y-4 sm:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">About</h2>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleChange}
                      className="w-full h-32 p-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                    />
                  ) : (
                    <p className="text-white/80">{profileData.bio}</p>
                  )}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaEnvelope className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                        />
                      ) : (
                        <span className="text-white/80 break-all">{profileData.email}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaPhone className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.phone}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaBuilding className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="text"
                          name="company"
                          value={profileData.company}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.company}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                      </div>
                      {isEditing ? (
                        <input
                          type="text"
                          name="location"
                          value={profileData.location}
                          onChange={handleChange}
                          className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                        />
                      ) : (
                        <span className="text-white/80">{profileData.location}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Account Settings</h2>
                  <div className="space-y-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSettingsClick}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaCog className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowPasswordModal(true)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaLock className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Change Password</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/settings?tab=notifications')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaBell className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Notification Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate('/settings?tab=security')}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <FaShieldAlt className="w-5 h-5 text-blue-400" />
                      </div>
                      <span>Privacy Settings</span>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowDeleteModal(true)}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                        <FaTrash className="w-5 h-5 text-red-400" />
                      </div>
                      <span>Delete Account</span>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Connected Accounts</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                          alt="Google"
                          className="w-8 h-8"
                        />
                        <span className="text-white/80">Google</span>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ml-10"
                      >
                        Connect
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Change Password</h3>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="px-6 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Change Password
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Delete Account</h3>
            <p className="text-white/80 mb-6">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-3 text-white/80 hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDeleteAccount}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                Delete Account
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Profile; 