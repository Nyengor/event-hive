export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between">
            <h1 className="font-bold">
                <span>Event</span>
                <span className="text-navy-blue">Hive</span>
            </h1>
            <div className="flex flex-row w-[30%] justify-around items-end">
                <button>Login</button>
                <button>Signup</button>
            </div>
        </nav>
    );
}