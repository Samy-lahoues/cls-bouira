import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image
                    src="/logo-white.png"
                    alt="Logo"
                    width={48}
                    height={48}
                  />
                </div>
                {/*<span className="text-xl font-bold text-primary font-display hidden sm:block">
                  مركز الترفيه العلمي
                </span>*/}
              </Link>
              <span className="text-2xl font-bold font-display">
                مركز البويرة للترفيه العلمي
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              مركز متكامل للتعليم الترفيهي يجمع بين العلم والمتعة في بيئة
              تفاعلية مبتكرة
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 font-display">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#clubs"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  النوادي
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  التسجيل
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 font-display">
              معلومات قانونية
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/policies"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  شروط الاستخدام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p dir="ltr">
            &copy; {new Date().getFullYear()}{" "}
            <a
              className="underline hover:no-underline transition-all"
              target="_blank"
              href="https://bio.link/samydev"
            >
              Samy dev
            </a>{" "}
            - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
