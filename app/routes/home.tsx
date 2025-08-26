import type { Route } from "./+types/home";
import Navbar from "~/component/Navbar";
import {Link} from "react-router"
import ResumeCard from "~/component/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeLyze" },
    { name: "description", content: "Smart feedBack for your Job Description!" },
  ];
}

export default function Home() {
    const {auth,kv } = usePuterStore();
    const navigate = useNavigate();
    const [resumeUrl,setResumeUrl] = useState("");
    const[resumes,setResumes] = useState<Resume[]>([]);
    const[loadingResumes,setLoadingResumes] = useState<boolean>(false);

    useEffect(()=>{
        if(!auth.isAuthenticated) navigate("/auth?next=/");
    },[auth.isAuthenticated])

    useEffect(() => {
        const loadResumes = async () => {
            setLoadingResumes(true);

            const resumes = (await kv.list('resume:*', true)) as KVItem[];

            const parsedResumes = resumes?.map((resume) => (
                JSON.parse(resume.value) as Resume
            ))

            console.log("parsedResume",parsedResumes);
            setResumes(parsedResumes || []);
            setLoadingResumes(false);
        }

        loadResumes()
    }, []);



    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
          <div className="page-heading py-16 ">
              <h1>Track Your Applications & Resume Ratings</h1>
              {!loadingResumes && resumes.length === 0? (
                  <h2>No Resumes Found.Upload Your First Resume To Get Feedback</h2>
              ):(
                  <h2>Review Your Submissions and Check AI-powered feedback</h2>
              )}
              {loadingResumes && (
                  <div className="flex flex-col items-center justify-center">
                      <img src="/images/resume-scan-2.gif" className="w-[200px]"/>
                  </div>
              )}

          </div>
          {!loadingResumes && resumes.length > 0 && (
              <div className="resumes-section">
                  {resumes.map((resume) => (
                      <ResumeCard key={resume.id} resume={resume}/>
                  ))}
              </div>
          )}

          {!loadingResumes && resumes?.length === 0 && (
              <div className="flex flex-col items-center justify-center mt-10 gap-4">
                  <Link to="/upload" className="primary-button w-fit text-xl font-semibold">
                      Upload Resume
                  </Link>
              </div>
          )}

      </section>
  </main>;
}
