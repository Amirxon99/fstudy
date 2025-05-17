import styles from "./home.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import logo2 from "../../assets/img/logo2.png";
import Course from "../../components/Course";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6815e18a32debfe95dbcb148.mockapi.io/fstudy/courses")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  
  return (
    <div>
      <Header></Header>
      <div className={styles.hero} id="hero">
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1>
              Bilimingizni oshiring,
              kelajakni yarating
            </h1>
            <p>
              Zamonaviy kurslar va interaktiv testlar orqali o'z bilimingizni
              yangi bosqichga ko'taring
            </p>
            <button className={styles.ctaBtn}>
              Kurslarni ko'rish <span>→</span>
            </button>
          </div>

          <div className={styles.heroRight}>
            <img src={logo2} alt="Hero rasm" />
          </div>
        </div>
      </div>

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
        <h2 className={styles.title}>Kurslar</h2>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.activeTab}`}>
            Mashhur kurslar
          </button>
          <button className={styles.tab}>Yangi kurslar</button>
        </div>
        <div className={styles.grid}>
          {data?.map((item) => (
            <Course key={item?.id} styles={styles} data={item} />
          ))}
        </div>
      </div>

      <div className={styles.statsSection} id="stats">
        <h2 className={styles.statsTitle}>Statistika</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statValue}>10,000+</div>
            <div className={styles.statLabel}>Foydalanuvchilar</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📖</div>
            <div className={styles.statValue}>200+</div>
            <div className={styles.statLabel}>Kurslar</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📝</div>
            <div className={styles.statValue}>5,000+</div>
            <div className={styles.statLabel}>Testlar</div>
          </div>
        </div>
      </div>

      <div className={styles.reviewsSection} id="review">
        <h2 className={styles.reviewsTitle}>Foydalanuvchilar sharhlari</h2>
        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.reviewText}>
              "Bu platforma orqali matematika fanidan bilimlarimni sezilarli
              darajada oshirdim. Testlar juda foydali!"
            </p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Aziz Karimov</div>
                <div className={styles.role}>Talaba</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.reviewText}>
              "O'quvchilarim uchun ajoyib resurs. Kurslar sifati va tushunish
              oson."
            </p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Nilufar Sobirova</div>
                <div className={styles.role}>O'qituvchi</div>
              </div>
            </div>
          </div>
          <div className={styles.reviewCard}>
            <div className={styles.stars}>★★★★☆</div>
            <p className={styles.reviewText}>
              "Dasturlash kurslarini tugatib, ishga joylashishda katta yordam
              berdi. Rahmat!"
            </p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}></div>
              <div>
                <div className={styles.name}>Jasur Toshmatov</div>
                <div className={styles.role}>IT mutaxassisi</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className={styles.howItWorksTitle}>Qanday ishlaydi</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>
              📘<span className={styles.stepNumber}>1</span>
            </div>
            <div className={styles.stepTitle}>Kursni tanlang</div>
            <div className={styles.stepDesc}>
              O'zingizga kerakli kursni tanlang va ro'yxatdan o'ting
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>
              🎥<span className={styles.stepNumber}>2</span>
            </div>
            <div className={styles.stepTitle}>Materialni o'rganing</div>
            <div className={styles.stepDesc}>
              Video darslar va qo'shimcha materiallarni o'rganing
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>
              🧠<span className={styles.stepNumber}>3</span>
            </div>
            <div className={styles.stepTitle}>Testlarni yeching</div>
            <div className={styles.stepDesc}>
              Bilimingizni mustahkamlash uchun testlarni yeching
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepIcon}>
              🎓<span className={styles.stepNumber}>4</span>
            </div>
            <div className={styles.stepTitle}>Sertifikat oling</div>
            <div className={styles.stepDesc}>
              Kursni muvaffaqiyatli tugatib, sertifikat oling
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
