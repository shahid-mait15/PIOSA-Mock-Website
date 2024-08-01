import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const Year = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-white ">
            <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
            <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" fill="#FFFFFF" fill-opacity="1"></path></svg></div>            <div className="grid lg:grid-cols-4 gap-20 sm:grid-cols-1 p-20 mt-16">
                <div className="flex flex-col gap-5 mt-12 ">
                    <h2 className="text-3xl text-blue-400">Footer</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores vel ipsa reiciendis corporis similique dolor earum aut itaque.
                    </p>
                </div>

                <div>
                    <li className="text-[22px] list-none font-semibold text-blue-400 py-2 uppercase mt-10">Creativity</li>
                    <li className="my-4 list-none">Website Guidlines & Ideas</li>
                    <li className="my-4 list-none">Tips & Tricks</li>
                    <li className="my-4 list-none">photography</li>
                </div>

                <div>
                    <li className="text-[22px] list-none font-semibold text-blue-400 py-2 uppercase mt-10">Creativity</li>
                    <li className="my-4 list-none">Guidlines & Ideas</li>
                    <li className="my-4 list-none">Tips & Tricks</li>
                    <li className="my-4 list-none">photography</li>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-blue-400 py-2 uppercase mt-10">Contact</h2>
                    <p className="text-[16px] my-4">Email: youremail@gmail.com</p>
                    <p className="text-[16px] my-4">Phone: +1 113-456-7890 </p>
                    <div className="flex space-x-4">
                        <a className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out" href="">
                            <FaGithub />
                        </a>
                        <a className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out" href="">
                            <FaLinkedinIn />
                        </a>
                        <a className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out" href="">
                            <FaTwitter />
                        </a>
                        <a className="text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out" href="">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <div className="h-full flex items-center justify-center mb-5">
                    <form className="w-96 relative">
                        <input
                            type="email"
                            placeholder=""
                            className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-blue-300"
                        />
                        <button type="Submit" className="bg-blue-700 px-8 py-2 rounded-full text-white absolute top-0 right-0">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <h6 className="text-center">&copy; right Coderfilx {Year}</h6>
        </footer>
    );
};

export default Footer;