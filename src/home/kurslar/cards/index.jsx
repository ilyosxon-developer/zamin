  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import Cards from "../../cards/card";
  import "./kurs.css";

  function KurslarPageCards() {
    const [search, setSearch] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");  
    const [data, setData] = useState({ bolimlar: [], courses: [] });

    useEffect(() => {
      axios
        .get("/data.json") 
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Ma'lumotni yuklashda xato:", error);
        });
    }, []);

    const filteredBolimlar = data.bolimlar.filter(
      (bolim) => bolim.id !== "all" 
    ); 

    const filteredCourses = data.courses.filter((course) => {
      return (
        course.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedFilter === "" || course.option === selectedFilter)
      );
    });
 
 
    const handleCheckboxChange = (e) => {
      const { name } = e.target;
      setSelectedFilter(name); 
    };

    return (
      <div className="app">
          <div className="row mt-3">
            <div className="col-3">
              <input
                className="form-control"
                type="text"
                placeholder="Qidiruv..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-3">
              <p className="kurslar-soni">
                {filteredCourses.length > 0 ? "Kurslar soni: " + filteredCourses.length + "ta" : "Kurslar soni: 0 ta"}
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end  ">
            <select class="form-select w-50" aria-label="Default select example">
              <option selected>Sana bo’yicha filtrlash</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mt-1">
              <div>
                <p className="kurslar-soni">Bo’limlar</p>
                <label>
                  <input
                    type="checkbox"
                    name=""
                    checked={selectedFilter === ""}
                    onChange={handleCheckboxChange}
                  />
                  Barchasi
                </label>
                {filteredBolimlar.map((bolim) => (
                  <div key={bolim.id}>
                    <label>
                      <input
                        type="checkbox"
                        name={bolim.id}
                        checked={selectedFilter === bolim.id}
                        onChange={handleCheckboxChange}
                      />
                      {bolim.label}
                    </label>
                  </div>
                ))}
              </div>
              <div>
                <p className="kurslar-soni mt-3 mb-0">Daraja</p>
                <label className="d-block">
                  <input
                    type="checkbox"
                    name="text"
                  />
                  Boshlang’ich
                </label>
                <label className="d-block">
                  <input
                    type="checkbox"
                    name="text"
                  />
                  O’rta
                </label>
                <label className="d-block">
                  <input
                    type="checkbox"
                    name="text"
                  />
                  Yuqori
                </label>                
              </div>
            </div>
            <div className="col-9 row"> 
              <div className="no-cards">
              <h2>
                {filteredCourses.length === 0 && (
                  "Kurslar yoq :("
                )}
                </h2>
              </div>
              {filteredCourses.map((course) => (
                <div className="col-4 main-card" key={course.id}>
                  <Cards course={course} />
                </div>
              ))}
            </div>
          </div>
      </div>
    );
  }

  export default KurslarPageCards;
