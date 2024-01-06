import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BeTrainerPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        age: '',
        profileImage: null, // Store the file object
        skills: [],
        weeklyAvailability: '',
        dailyAvailability: '',
        yearsOfExperience: '',
        socialAccounts: {
            facebook: '',
            twitter: '',
            linkedin: '',
        },
        aboutYourself: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData({
            ...formData,
            profileImage: imageFile,
        });
    };

    const handleSkillsChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setFormData({
                ...formData,
                skills: [...formData.skills, name],
            });
        } else {
            setFormData({
                ...formData,
                skills: formData.skills.filter((skill) => skill !== name),
            });
        }
    };

    const handleSocialAccountChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            socialAccounts: {
                ...formData.socialAccounts,
                [name]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Upload the profile image to imgBB
        if (formData.profileImage) {
            const formDataImgBB = new FormData();
            formDataImgBB.append('key', image_hosting_key);
            formDataImgBB.append('image', formData.profileImage);
    
            try {
                const response = await axios.post(image_hosting_api, formDataImgBB);
                const data = response.data;
    
                if (data.data && data.data.display_url) {
                    // Update the profileImage field with the imgBB link
                    formData.profileImage = data.data.display_url;
                } else {
                    console.error('Failed to upload image to imgBB');
                }
            } catch (error) {
                console.error('Error uploading image to imgBB:', error);
            }
        }
    
        // Now you can send formData to your backend for storage in MongoDB
        try {
            const response = await axios.post('http://localhost:5000/api/v1/appliedTrainers', formData);
            const responseData = response.data;
    
            if (responseData.message === 'Data added to appliedTrainers collection') {
                // Reset the form or navigate to a thank you page
                toast.success('Application submitted successfully');
                navigate('/'); // Replace this with your desired redirect
            } else {
                console.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };
    
    
    return (
        <div className="container mx-auto p-4">
            <Helmet>
                <title>Be a Trainer | Your Website Name</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-6 text-center">Become a Trainer</h1>
            <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    />
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    />
                </div>
                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    />
                </div>
                {/* Profile Image */}
                <div className="mb-4">
                    <label htmlFor="profileImage" className="block text-sm font-medium">
                        Profile Image
                    </label>
                    <input
                        type="file"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    />
                </div>
                {/* Skills */}
                <div className="mb-4">
                    <p className="text-sm font-medium">Skills</p>
                    <label className="inline-flex items-center mt-2">
                        <input
                            type="checkbox"
                            name="skill1"
                            checked={formData.skills.includes('skill1')}
                            onChange={handleSkillsChange}
                        />
                        <span className="ml-2">Skill 1</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input
                            type="checkbox"
                            name="skill2"
                            checked={formData.skills.includes('skill2')}
                            onChange={handleSkillsChange}
                        />
                        <span className="ml-2">Skill 2</span>
                    </label>
                    <label className="inline-flex items-center mt-2">
                        <input
                            type="checkbox"
                            name="skill3"
                            checked={formData.skills.includes('skill3')}
                            onChange={handleSkillsChange}
                        />
                        <span className="ml-2">Skill 3</span>
                    </label>
                </div>
                {/* Weekly Availability */}
                <div className="mb-4">
                    <label htmlFor="weeklyAvailability" className="block text-sm font-medium">
                        Weekly Availability
                    </label>
                    <select
                        id="weeklyAvailability"
                        name="weeklyAvailability"
                        value={formData.weeklyAvailability}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    >
                        <option value="">Select Weekly Availability</option>
                        <option value="part-time">Part-Time</option>
                        <option value="full-time">Full-Time</option>
                    </select>
                </div>
                {/* Daily Availability */}
                <div className="mb-4">
                    <label htmlFor="dailyAvailability" className="block text-sm font-medium">
                        Daily Availability
                    </label>
                    <select
                        id="dailyAvailability"
                        name="dailyAvailability"
                        value={formData.dailyAvailability}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    >
                        <option value="">Select Daily Availability</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>
                {/* Years of Experience */}
                <div className="mb-4">
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium">
                        Years of Experience
                    </label>
                    <input
                        type="number"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        required
                    />
                </div>
                {/* Social Accounts */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Social Accounts</label>
                    <div className="mt-2">
                        <label htmlFor="facebook" className="block text-xs">
                            Facebook
                        </label>
                        <input
                            type="url"
                            id="facebook"
                            name="facebook"
                            value={formData.socialAccounts.facebook}
                            onChange={handleSocialAccountChange}
                            className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="twitter" className="block text-xs">
                            Twitter
                        </label>
                        <input
                            type="url"
                            id="twitter"
                            name="twitter"
                            value={formData.socialAccounts.twitter}
                            onChange={handleSocialAccountChange}
                            className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="linkedin" className="block text-xs">
                            LinkedIn
                        </label>
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            value={formData.socialAccounts.linkedin}
                            onChange={handleSocialAccountChange}
                            className="w-full py-2 px-3 border rounded-lg outline-none text-sm"
                        />
                    </div>
                </div>
                {/* About Yourself */}
                <div className="mb-4">
                    <label htmlFor="aboutYourself" className="block text-sm font-medium">
                        About Yourself
                    </label>
                    <textarea
                        id="aboutYourself"
                        name="aboutYourself"
                        value={formData.aboutYourself}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border rounded-lg outline-none text-sm h-32"
                        required
                    ></textarea>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-medium"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BeTrainerPage;
