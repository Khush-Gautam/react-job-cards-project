import React from 'react'

import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb9wxltvknWWoDk3SLvvpQMLIm9XlZgr1g7A&s",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "1 day ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/1280px-Oracle_Logo.svg.png",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg",
    companyName: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  }
];



  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company = {elem.companyName} post = {elem.post} tag1={elem.tag1} tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} datePosted={elem.datePosted} location={elem.location}/>
        </div>
      })}
          
    </div>
  )
}

export default App
