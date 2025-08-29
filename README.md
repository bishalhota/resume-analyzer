🚀 Resume Analyzer
Resume Analyzer is an AI-powered web application that evaluates resumes, assigns an ATS score, and provides actionable suggestions to improve clarity, structure, and job-fit.

📌 Prerequisites
Before setting up the project, ensure you have the following installed:
Node.js: v18 or higher
npm: Comes bundled with Node.js

⚙️ Project Setup
Clone the repository
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer

Install dependencies
npm install

▶️ Running the Application
The app is built with React + Vite.
Start the development server:
npm run dev

By default, the application will be available at:
👉 http://localhost:5173

🖥️ Application Workflow
Upload Resume
Click "Upload Resume" or drag & drop a PDF file.
Only PDF files are supported.

Provide Job Context (Optional)
Enter the company name, job title, and job description for tailored feedback.
The AI will match your resume against job-specific requirements.

Analyze Resume
Click "Analyze Resume".

The system will:
Convert the resume into an image for preview
Send data to the AI for analysis
Generate ATS score and detailed feedback

View Results
Resume Preview: Visual representation of your uploaded resume
Summary: Overall resume score with category breakdown (Tone, Content, Structure, Skills)
ATS Score: Likelihood of passing Applicant Tracking Systems
Detailed Feedback: Actionable tips, organized in an accordion format for easy navigation

📸 Screenshots
🔹 Dashboard – Track Applications & Resume Ratings
🔹 Resume Upload & Job Context Form
🔹 Resume Review & ATS Feedback

🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS
State Management: Zustand
File & AI Integration: Puter.js SDK
PDF Parsing & Preview: PDF.js

🌟 Features
AI-powered resume analysis with ATS scoring
Drag-and-drop PDF upload with job context input
Real-time resume preview & category-wise scoring
Actionable feedback suggestions for better ATS compatibility
