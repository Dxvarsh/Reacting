import React, { useState } from "react";
import "./index.css";
import Card from "./components/Card";

const App = () => {
  const people = [
    {
      name: "Alice Johnson",
      profession: "Software Engineer",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: true,
    },
    {
      name: "Bob Smith",
      profession: "Graphic Designer",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: false,
    },
    {
      name: "Charlie Brown",
      profession: "Data Scientist",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: true,
    },
    {
      name: "Diana Evans",
      profession: "Product Manager",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: false,
    },
    {
      name: "Ethan Wright",
      profession: "Marketing Specialist",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: true,
    },
    {
      name: "Fiona Taylor",
      profession: "UX/UI Designer",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: false,
    },
    {
      name: "George Harris",
      profession: "Content Writer",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: true,
    },
    {
      name: "Hannah Lee",
      profession: "Operations Manager",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: false,
    },
    {
      name: "Ian Scott",
      profession: "Business Analyst",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: true,
    },
    {
      name: "Julia Adams",
      profession: "Financial Analyst",
      imageUrl: "https://via.placeholder.com/150",
      isFriend: false,
    },
  ];

  const [realData, setRealData] = useState(people);
  const friendHandle = (cardIndex) => {
    setRealData((prevData)=>{
      return prevData.map((item, index)=>{
        if(index === cardIndex) return {...item, isFriend: !item.isFriend};
        return item;
      });
    });
  };

  return (
    <div className="flex flex-wrap gap-5 p-5">
      {realData.map((data, index) => {
        return <Card key={index} index={index} data={data} friendHandle={friendHandle} />;
      })}
    </div>
  );
};

export default App;