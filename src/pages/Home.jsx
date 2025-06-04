import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

    // Declare state variable in react
    const [events, setEvents] = useState([]);

    //Define a function to fetch events from API
    const getEvents = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // getEvents(); (Calling the function by itself will let it sometimes have a problem in react so we use the useeffect)
    useEffect(getEvents, []);

    // const getEvents = function() {}


    return (
        <>
            <Navbar />
            <section className="bg-[url(./assets/images/image1.png)] h-[596px] bg-cover w-[95%] mx-auto relative">
                <h1 className="text-big-heading text-white w-[30%] mx-auto text-center pt-32">MADE FOR THOSE WHO DO </h1>

                <form className="bg-navy-blue  w-[90%] mx-auto py-6 px-10 flex flex-row justify-between absolute -bottom-12 left-[5%] ">
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md" >
                            <option selected disabled>Choose Event Type</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%] ">
                        <label htmlFor="Location" className="text-white">Looking for</label>
                        <select name="type" id="type" className="bg-white p-2 rounded-md" >
                            <option selected disabled>Choose Location</option>
                            <option value="drama">Drama</option>
                            <option value="tech">Tech</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-[30%]">
                        <label htmlFor="type" className="text-white">Looking for</label>
                        <input type="datetime-local" name="when" id="when" className="bg-white p-2 rounded-md" />
                    </div>

                    <div className="bg-primary text-white size-[70px] flex flex-row justify-center items-center rounded-md">
                        <Search />
                    </div>
                </form>
            </section>

            <div>
                <h1><span>Upcoming</span> <span>Events</span></h1>
            </div>

            <div className="grid grid-cols-3 gap-5">
                {events.map(item => {
                    return(
                        <EventCard 
                        key={item.id} 
                        event={item} />
                    );
                })}
            </div>

            <section className="h-[500px]">
            </section>

            <Footer />
        </>
    )
}