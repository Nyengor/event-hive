import { Linkedin, Instagram, Facebook } from "lucide-react";




export default function Footer() {
    return (
       <footer className="bg-navy-blue w-full text-white">
        <div className=" flex flex-col items-center p-4">
        <h1><span>Event</span> <span className="text-blue-300 font-bold">Hive</span></h1>
        <form>
           <input className="border-2 bg-white text-black px-4"type="email"  placeholder="Enter your mail" name="Email"/>
           <button className="border-2 bg-emerald-300 px-4" type="submit">Subscribe</button>
        </form>
        <div className="">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Get In Touch</span>
            <span>FAQs</span>
        </div>
        </div>
        <hr />

        <div className="flex flex-row justify-between p-4">
            <div className="">
                <button className="border-2 bg-emerald-300 px-4">English</button>
                <button>French</button>
                <button>Ga</button>
            </div>
            <div className="flex flex-row">
                <Linkedin/>
                <Instagram/>
                <Facebook/>
            </div>
            <div>
                <p>
                    Non Cpyrighted©️ 2025 Upload by EventHive
                </p>
            </div>
        </div>
       </footer>
    );
}
