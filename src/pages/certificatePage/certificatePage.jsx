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
    // Foydalanuvchini localStorage dan olish
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser({ name: userData.name, lastName: userData.lastname });
    }

    // URL querydan score va title olish
    const query = new URLSearchParams(location.search);
    setScore(query.get("score"));
    setTitle(query.get("title"));

    // Sana
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
      const pdf = new jsPDF("landscape", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <>
      <Header></Header>
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
            width: "1123px",
            height: "794px",
            margin: "40px auto",
            padding: "60px",
            border: "12px solid #004080",
            background: "linear-gradient(to bottom right, #fdfdfd, #e0eaff)",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            color: "#003366",
            position: "relative",
          }}
        >
          <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>SERTIFIKAT</h1>
          <p style={{ fontSize: "18px" }}>
            Ushbu sertifikat quyidagi shaxsga beriladi:
          </p>
          <h2
            style={{ fontSize: "30px", margin: "20px 0", fontWeight: "bold" }}
          >
            {user.name} {user.lastName}
          </h2>
          <p style={{ fontSize: "18px" }}>
            <strong>"{title}"</strong> nomli testni muvaffaqiyatli yakunlagani
            uchun.
          </p>
          <p style={{ fontSize: "20px", margin: "20px 0" }}>
            Baho: <strong>{score} / 100</strong>
          </p>
          <p style={{ fontSize: "16px" }}>Berilgan sana: {date}</p>

          <div style={{ position: "absolute", bottom: "60px", left: "60px" }}>
            <p>______________________</p>
            <p>O‘qituvchi</p>
          </div>
          <div style={{ position: "absolute", bottom: "60px", right: "60px" }}>
            <p>______________________</p>
            <p>Direktor</p>
          </div>
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
      <Footer></Footer>
    </>
  );
};

export default CertificatePage;
