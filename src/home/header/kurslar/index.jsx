import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Cards from '../../cards/card'; 

const Courses = () => {
  const [data, setData] = useState({ bolimlar: [], courses: [] });
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    axios
      .get('/data.json') 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Ma\'lumotni yuklashda xato:', error);
      });
  }, []);

  const filteredCourses = data.courses.filter((course) =>
    selectedCategory === 'all' ? true : course.option === selectedCategory
  );
  const limitedCourses = filteredCourses.slice(0, 4);

  return (
    <div className="courses-container">
      <h2>Bizning Kurslar</h2>
      <div className="category-buttons">
        {data.bolimlar.map((category) => (
          <button
            key={category.id}
            className={`btn btn-outline-success btn-sm m-2 ${
              selectedCategory === category.id ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="row">
        {limitedCourses.map((course) => (
          <Cards key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
