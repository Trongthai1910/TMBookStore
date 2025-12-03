import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center gap-10 justify-between">
        <ul className="hidden flex-1 px-9 md:flex items-center justify-between gap-10 font-medium">
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-600 transition-all">
              Danh mục{" "}
              <ChevronDown
                size={18}
                className="group-hover:rotate-180 transition-transform duration-200"
              />
            </div>

            {/* dropdown */}
            <ul
              className="absolute z-999 left-0 top-full hidden 
               group-hover:flex flex-col 
               bg-white/95 backdrop-blur-md shadow-xl
               rounded-lg w-[200px] py-3 animate-fade"
            >
              {[
                { label: "Sách kinh tế", path: "/category/kinh-te" },
                { label: "Thiếu nhi", path: "/category/thieu-nhi" },
                { label: "Sách văn học", path: "/category/van-hoc" },
                { label: "Truyện tranh", path: "/category/truyen-tranh" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition rounded-md"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link to="/books" className="hover:text-blue-600">
              Top sách bán chạy
            </Link>
          </li>

          <li>
            <Link to="/orders" className="hover:text-blue-600">
              Lịch sử đơn hàng
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Liên hệ
            </Link>
          </li>
        </ul>

        {/* ------ Mobile Icon ------ */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ------ Mobile Menu ------ */}
      <div
        className={`${open ? "block" : "hidden"} md:hidden bg-white shadow-md`}
      >
        <ul className="flex flex-col p-4 space-y-2 font-medium">
          <li>
            <Link to="/">Trang chủ</Link>
          </li>

          {/* submenu trong mobile */}
          <li className="font-bold">Danh mục</li>
          <ul className="pl-3 space-y-2 text-gray-600">
            <li>
              <Link to="/category/kinh-te">Sách kinh tế</Link>
            </li>
            <li>
              <Link to="/category/thieu-nhi">Thiếu nhi</Link>
            </li>
            <li>
              <Link to="/category/van-hoc">Văn học</Link>
            </li>
            <li>
              <Link to="/category/truyen-tranh">Truyện tranh</Link>
            </li>
          </ul>

          <li>
            <Link to="/books">Top sách bán chạy</Link>
          </li>
          <li>
            <Link to="/orders">Lịch sử đơn hàng</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
