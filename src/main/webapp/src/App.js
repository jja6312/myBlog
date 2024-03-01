/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Routes } from "react-router-dom";
import Devlog from "./components/devlog/Devlog";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Youtube from "./components/youtube/Youtube";
import About from "./components/about/About";
import Book from "./components/book/Book";
import Video from "./components/video/Video";
import WriteForm from "./components/devlog/WriteForm";
import ReadForm from "./components/devlog/read/ReadForm";
import SkillWriteForm from "./components/skill/skillWriteForm/SkillWriteForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App flex-col justify-start items-start bg-dark">
          <Header></Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/devlog" element={<Devlog />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/video" element={<Video />} />
            <Route path="/timeline" element={<Video />} />
            {/* 글 작성 */}
            <Route path="/devlog/writeForm" element={<WriteForm />} />
            <Route path="/skill/writeForm" element={<SkillWriteForm />} />
            {/* 글 읽기 */}
            <Route path="/readForm" element={<ReadForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
