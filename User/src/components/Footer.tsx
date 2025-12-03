import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">BookStore</h2>
          <p className="text-gray-400">
            Hệ thống bán sách uy tín – giá rẻ – chất lượng hàng đầu Việt Nam.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Danh mục</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Sách mới xuất bản
            </li>
            <li className="hover:text-white cursor-pointer">Sách thiếu nhi</li>
            <li className="hover:text-white cursor-pointer">Sách kinh tế</li>
            <li className="hover:text-white cursor-pointer">Sách khoa học</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Chính sách vận chuyển
            </li>
            <li className="hover:text-white cursor-pointer">
              Chính sách hoàn trả
            </li>
            <li className="hover:text-white cursor-pointer">
              Bảo mật & Điều khoản
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Liên hệ</h3>
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Phone size={18} /> <span>0394170850</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Mail size={18} /> <span>support@bookstore.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={18} /> <span>Hà Nội – Việt Nam</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 BookStore. All Rights Reserved.
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Facebook className="cursor-pointer hover:text-white" />
        <Instagram className="cursor-pointer hover:text-white" />
        <Youtube className="cursor-pointer hover:text-white" />
      </div>
    </footer>
  );
};

export default Footer;
