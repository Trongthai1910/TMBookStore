import { Eye, EyeClosed } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email là bắt buộc")
      .email("Email không đúng định dạng")
      .min(5, "Độ dài từ 5-160 ký tự")
      .max(160, "Độ dài từ 5-160 ký tự"),
    password: yup
      .string()
      .required("Mật khẩu là bắt buộc")
      .min(6, "Độ dài từ 6-160 ký tự")
      .max(160, "Độ dài từ 6-160 ký tự"),
  })
  .required();

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-[1100px] max-w-full rounded-2xl bg-[#111827] text-white shadow-2xl">
        <h1 className="my-6 text-center text-3xl font-semibold">ĐĂNG NHẬP</h1>

        <Link
          to="/"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
        >
          <span className="text-xl leading-none">×</span>
        </Link>

        <div className="flex flex-col gap-8 px-10 pb-8 pt-10 lg:flex-row">
          <div className="flex-1 flex items-center border-b border-white/10 pb-8 pr-0 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <div className="flex justify-center">
              <div className="flex h-80 w-110 items-center justify-center rounded-xl border-[6px] border-white bg-white">
                <img
                  src="/imgs/logo.jpg"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 pl-0 lg:pl-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 space-y-4">
                <div className="space-y-1">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 text-sm outline-none focus:border-emerald-500"
                  />
                  <div className="min-h-[18px]">
                    {errors.email && (
                      <p className="text-sm mt-1 text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu"
                      {...register("password")}
                      className="w-full rounded-lg border border-gray-600 bg-transparent px-4 py-3 pr-10 text-sm outline-none focus:border-emerald-500"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </button>
                  </div>
                  <div className="min-h-[18px]">
                    {errors.password && (
                      <p className="text-sm mt-1 text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className="ml-auto block text-sm text-emerald-400 hover:underline"
                  >
                    Quên mật khẩu
                  </button>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full bg-emerald-600 py-3 text-center text-base font-semibold hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>

              <div className="mt-6 text-center text-sm text-gray-300">
                <span>Hoặc đăng nhập với</span>
              </div>

              <div className="mt-4 flex gap-4">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-600 py-2 text-sm hover:bg-white/5">
                  <span className="text-lg">f</span>
                  <span>Facebook</span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-600 py-2 text-sm hover:bg-white/5">
                  <span className="text-lg">G</span>
                  <span>Google</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-b-2xl border-t border-white/10 bg-black/40 px-6 py-4 text-sm">
          <span className="mr-1 text-gray-300">Bạn chưa có tài khoản?</span>
          <Link
            to="/register"
            className="font-semibold text-emerald-400 hover:underline"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
