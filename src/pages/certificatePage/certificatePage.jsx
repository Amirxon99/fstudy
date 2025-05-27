import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const CertificatePage = () => {
  const location = useLocation();
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [score, setScore] = useState(0);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser({ name: userData.name, lastName: userData.lastname });
    }

    const query = new URLSearchParams(location.search);
    setScore(query.get("score"));
    setTitle(query.get("title"));

    const today = new Date();
    const formattedDate = today.toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
  }, [location]);

  const downloadPDF = () => {
    const input = document.getElementById("certificate");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          padding: "30px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Sertifikat Sahifasi</h2>
        <div
          id="certificate"
          style={{
            width: "794px",
            height: "1123px",
            margin: "40px auto",
            padding: "100px 60px",
            border: "12px solid #004080",
            // background: "linear-gradient(to bottom right, #fdfdfd, #e0eaff)",
            background:
              "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(./bgsertificate.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            color: "white",
            position: "relative",
            filter: "grayscale(10px)",
          }}
        >
          <h1 style={{ fontSize: "66px", marginBottom: "80px",marginTop:"150px" }}>SERTIFIKAT</h1>
          <p style={{ fontSize: "24px" }}>
            Ushbu sertifikat quyidagi shaxsga beriladi:
          </p>
          <h2
            style={{ fontSize: "40px", margin: "20px 0", fontWeight: "bold" }}
          >
            {user.name} {user.lastName}
          </h2>
          <p style={{ fontSize: "24px" }}>
            <strong>"{title}"</strong> nomli testni muvaffaqiyatli yakunlagani
            uchun.
          </p>
          <p style={{ fontSize: "24px", margin: "20px 0" }}>
            Baho: <strong>{score} / 100</strong>
          </p>
          <p style={{ fontSize: "22px",position:"absolute",bottom: "100px",}}>Berilgan sana: {date}</p>

          {/* Muhr rasmi */}
          <img
            src="./stamp2.png"
            alt="Fstudy Stamp"
            style={{
              position: "absolute",
              transform: "rotate(-25deg)",
              bottom: "50px",
              right: "50px",
              width: "140px",
              opacity: 0.8,
            }}
          />
        </div>

        <button
          onClick={downloadPDF}
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          PDF Yuklab olish
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CertificatePage;
