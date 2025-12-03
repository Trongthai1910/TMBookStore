import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="p-5 flex justify-evenly items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BookStore
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border-1 rounded-2xl md:w-[600px] text-gray-200 px-3 py-1 border-gray-200 outline-0"
            />
            <button className="absolute top-1 right-2 text-gray-200">
              <Search />
            </button>
          </div>
          <div className="flex justify-between gap-5">
            <button>
              <Heart className="size-7 text-gray-200" />
            </button>
            <button className="relative">
              <ShoppingCart className="size-7 text-gray-200" />
              <div className="absolute size-4 bg-green-400 rounded-full text-xs bottom-4 left-5">
                5
              </div>
            </button>
            <button>
              <User className="size-7 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
      <Navbar />
      <Banner />
    </>
  );
};

export default Header;
