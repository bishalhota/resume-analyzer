import type { Route } from "./+types/home";
import Navbar from "~/component/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/component/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeLyze" },
    { name: "description", content: "Smart feedBack for your Job Description!" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!auth.isAuthenticated) navigate("/auth?next=/");
    },[auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
          <div className="page-heading py-16 ">
              <h1>Track Your Applications & Resume Ratings</h1>
              <h2>Review your submissions and check AI-powered feeedback.</h2>
          </div>
          {resumes.length > 0 && (
              <div className="resumes-section">
                  {resumes.map((resume) => (
                      <ResumeCard key={resume.id} resume={resume}/>
                  ))}
              </div>
          )}
      </section>
  </main>;
}
