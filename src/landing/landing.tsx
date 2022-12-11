import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import PdfFolder from "../components/PDFfolder/PdfFolder";
import { Home, BooksPage, Confession, Documents, Person } from "../pages";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookpage" element={<BooksPage />} />
          <Route path="/confession" element={<Confession />} />
          <Route path="/document" element={<Documents />} />
          <Route path="/person" element={<Person />} />
          <Route path="/pdf:id" element={<PdfFolder />} />
        </Routes>
    </div>
  );
};

export default Landing;
