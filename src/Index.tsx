import Header from "@components/Header";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import Skills from "@components/Skills";
import Education from "@components/Education";

export default function Index() {
  return (
    <div className="Index">
      <Header />
      <br />
      <div className="col-2">
        <Experience />
        <br />
        <Projects />
        <br />
        <Skills />
        <br />
        <Education />
      </div>
    </div>
  );
}
