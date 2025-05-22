import styles from "./coursehome.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logo2 from "../../assets/img/logo2.png";
import Course from "../../components/Course";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Coursehome() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://6815e18a32debfe95dbcb148.mockapi.io/fstudy/courses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  

  

  
  return (
    <div>
      <Header></Header>
    

      <div className={styles.container}>
        <div className={styles.courseFilters}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Kurslarni qidirish..." />
            <span className={styles.searchIcon}>🔍</span>
          </div>

          <div className={styles.categoryBox}>
            <select defaultValue="">
              <option value="" disabled>
                Kategoriya
              </option>
              <option value="dasturlash">Dasturlash</option>
              <option value="dizayn">Dizayn</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

         
        </div>
      </div>

      <div className={styles.container} id="courses">
       
        <div className={styles.grid}>
          {data?.map((item) => (
            <Course key={item?.id} styles={styles} data={item} />
          ))}
        </div>
      </div>

      

      <Footer></Footer>
    </div>
  );
}

export default Coursehome;
