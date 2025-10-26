"use client";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Facebook, Instagram } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzkzddy");
  if (state.succeeded) {
    toast({
      title: "Tanks for messaging us!",
      description: "Your message has been sent successfully!",
      variant: "success",
    });
  }
  // Prevent user from removing "+213"
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (!value.startsWith("+213")) {
      value = "+213";
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="text-primary" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-primary font-display">
              تواصل معنا
            </h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم
          </p>
        </motion.div>

        {/* flex */}
        <div className="flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl w-full sm:w-[calc(50% - 2rem)]"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-display">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground font-medium mb-2"
                >
                  الاسم الكامل<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground font-medium mb-2"
                >
                  البريد الإلكتروني<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  placeholder="example@email.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-foreground font-medium mb-2"
                >
                  رقم الهاتف<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors"
                  placeholder="+213 6XX XXX XXX"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
                <p className="text-xs text-foreground-muted mt-1">
                  يرجى إدخال رقمك بصيغة الجزائر (+213)
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground font-medium mb-2"
                >
                  الرسالة<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary outline-none transition-colors resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <span>⏳ جاري الإرسال...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 w-full sm:w-[calc(50% - 2rem)]"
          >
            {/* Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">العنوان</h4>
                    <p className="text-foreground-muted">
                      شارع الاستقلال، مركز الترفيه العلمي
                      <br />
                      البويرة 10000، الجزائر
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">الهاتف</h4>
                    <a
                      dir="ltr"
                      href="tel:+21328549131"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      +213 2854 91 31
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      البريد الإلكتروني
                    </h4>
                    <a
                      href="mailto:clsbouiraofficiel@gmail.com"
                      className="text-foreground-muted hover:text-primary transition-colors"
                    >
                      clsbouiraofficiel@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            {/*<div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-foreground mb-4">ساعات العمل</h4>
              <div className="space-y-2 text-foreground-muted">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="font-medium">14:00 - 20:00</span>
                </div>
              </div>
            </div>*/}

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-foreground mb-4">تابعنا على</h4>
              <div className="flex gap-4">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/share/1K9J38NAsZ/",
                  },
                  { icon: Instagram, href: "https://www.instagram.com/" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      target="_blank"
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Map */}
        <div className="mt-16 w-full h-96 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410167.49295441405!2d3.355931510894317!3d36.5677691032705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128c2f7da4ffe005%3A0x5c953b4cbdef0595!2sCentre%20de%20loisir%20scientifique%20(CLS)%20sidhoum%20djaafer!5e0!3m2!1sen!2sdz!4v1759437459115!5m2!1sen!2sdz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
