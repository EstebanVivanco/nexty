import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact page",
    keywords: ["contact", "page"], 
  }



export default function ContactPage() {
    return (
        <div >
        <h1>Contact</h1>
        <p>This is the contact page.</p>
        </div>
    );
    }