import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "page"], 
}

export default function AboutPage() {
  return (
    <div className="bg-slate-500 flex items-center justify-center">
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}