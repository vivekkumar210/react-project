import React from 'react'
import Card from './components/Card'

const jobs = [
  {
    companyImage: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    jobPosition: "Frontend Developer",
    postedAgo: "2",
    jobType: "Full-time",
    level: "Senior",
    wage: "₹25–40 LPA",
    location: "Bangalore, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    jobPosition: "Software Engineer",
    postedAgo: "3",
    jobType: "Full-time",
    level: "Junior",
    wage: "₹8–15 LPA",
    location: "Hyderabad, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    jobPosition: "Backend Developer",
    postedAgo: "20",
    jobType: "Full-time",
    level: "Mid-level",
    wage: "₹15–25 LPA",
    location: "Bangalore, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/netflix",

    companyName: "Netflix",
    jobPosition: "UI/UX Designer",
    postedAgo: "25",
    jobType: "Part-time",
    level: "Mid-level",
    wage: "₹800–1500/hour",
    location: "Remote"
  },
  {
    companyImage: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    jobPosition: "React Developer",
    postedAgo: "12",
    jobType: "Full-time",
    level: "Senior",
    wage: "₹30–45 LPA",
    location: "Mumbai, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/spotify",

    companyName: "Spotify",
    jobPosition: "Product Designer",
    postedAgo: "21",
    jobType: "Part-time",
    level: "Junior",
    wage: "₹500–1000/hour",
    location: "Remote"
  },
  {
    companyImage: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    jobPosition: "Full Stack Developer",
    postedAgo: "2",
    jobType: "Full-time",
    level: "Mid-level",
    wage: "₹12–22 LPA",
    location: "Noida, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    jobPosition: "UX Researcher",
    postedAgo: "7",
    jobType: "Full-time",
    level: "Senior",
    wage: "₹20–35 LPA",
    location: "Remote"
  },
  {
    companyImage: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    jobPosition: "Data Analyst",
    postedAgo: "12",
    jobType: "Full-time",
    level: "Junior",
    wage: "₹6–12 LPA",
    location: "Hyderabad, India"
  },
  {
    companyImage: "https://cdn.simpleicons.org/figma",

    companyName: "Figma",
    jobPosition: "Frontend Intern",
    postedAgo: "12",
    jobType: "Part-time",
    level: "Intern",
    wage: "₹300–600/hour",
    location: "Remote"
  }
];


const App = () => {
  return (
    <div className = "parent">
      {jobs.map(function(elem){
        return <Card elem={elem} /> 
      })}
    </div>
  )
        
}

export default App