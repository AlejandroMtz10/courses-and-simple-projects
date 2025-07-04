function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-sm py-4 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <h2>My videogames</h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
