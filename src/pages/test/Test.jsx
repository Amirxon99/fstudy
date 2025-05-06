import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./test.module.css";

function Test() {
  const [testlar, setTestlar] = useState(null);

  useEffect(() => {
    fetch(`https://6815e18a32debfe95dbcb148.mockapi.io/fstudy/tests`)
      .then((res) => res.json())
      .then((data) => {
        setTestlar(data);
        
      });
  }, []);
  console.log(testlar);
  
  return (
    <div>
      <Header />
      <div className={styles.main}></div>
      <Footer></Footer>
    </div>
  );
}

export default Test;
