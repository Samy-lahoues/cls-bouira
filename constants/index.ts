import {
  LayoutDashboard,
  MessageSquare,
  Users,
  FileText,
  Activity,
  TrendingUp,
} from "lucide-react";
import {
  accountingOffice,
  civilEngineering,
  elementaryClassroom,
  softwareDeveloper,
  sportsTraining,
  technologyLab,
} from "./images";
// { label: "التوظيف", href: "#employment" },
const navItems = [
  { label: "الرئيسية", href: "/#hero" },
  { label: "النوادي", href: "/#clubs" },
  { label: "اتصل بنا", href: "/#contact" },
];
const jobs = [
  {
    id: 1,
    title: "مدرب علوم تجريبية",
    category: "تعليم",
    location: "البويرة المركز",
    date: "2025-02-15",
    type: "دائم",
    image: civilEngineering,
  },
  {
    id: 2,
    title: "مشرف أنشطة علمية",
    category: "تعليم",
    location: "سور الغزلان",
    date: "2025-02-20",
    type: "تكوين",
    image: elementaryClassroom,
  },
  {
    id: 3,
    title: "مدرب روبوتات",
    category: "تكنولوجيا",
    location: "عين بسام",
    date: "2025-02-18",
    type: "دائم",
    image: technologyLab,
  },
  {
    id: 4,
    title: "منسق فعاليات",
    category: "إدارة",
    location: "البويرة المركز",
    date: "2025-02-25",
    type: "عقد",
    image: accountingOffice,
  },
  {
    id: 5,
    title: "مدرب برمجة",
    category: "تكنولوجيا",
    location: "البويرة المركز",
    date: "2025-03-01",
    type: "دائم",
    image: softwareDeveloper,
  },
  {
    id: 6,
    title: "مدرب رياضي",
    category: "رياضة",
    location: "القادرية",
    date: "2025-02-28",
    type: "تكوين",
    image: sportsTraining,
  },
];

const categories = ["الكل", "تعليم", "تكنولوجيا", "رياضة", "فنون", "إدارة"];
const activities = [
  "الحساب الذهني",
  "نادي الروبوتيك",
  "نادي الصحفي الصغير",
  "نادي السمعي البصري",
  "نادي الشطرنج",
  "النادي الفكري",
  "نادي اللغات",
  "نادي الاعلام الالي",
  "نادي الرسكلة",
  "نادي العلوم المسلية",
  "نادي البيئة",
  "نادي المشاريع العلمية",
  "نادي الرسم",
  "نادي تطوير مواقع الويب",
  "نادي الذكاء الاصطناعي",
];

const clubs = [
  {
    id: 1,
    name: "نادي الفنون والثقافة",
    description: "ورش عمل فنية وثقافية تشمل الرسم، الموسيقى، والمسرح",
    schedule: "الأحد - الخميس: 14:00 - 19:00",
    contact: "026 93 81 00",
    image: "/art-and-culture-center.jpg",
    activities: ["الرسم", "الموسيقى", "المسرح", "الخط العربي"],
  },
  {
    id: 2,
    name: "نادي التكنولوجيا والابتكار",
    description: "دورات تدريبية في البرمجة، الروبوتات، والتصميم الرقمي",
    schedule: "السبت - الأربعاء: 9:00 - 18:00",
    contact: "026 93 82 00",
    image: "/technology-innovation-lab.png",
    activities: ["البرمجة", "الروبوتات", "التصميم", "الذكاء الاصطناعي"],
  },
  {
    id: 3,
    name: "نادي اللغات",
    description: "تعلم اللغات الأجنبية مع مدربين محترفين",
    schedule: "الأحد - الخميس: 15:00 - 20:00",
    contact: "026 93 83 00",
    image: "/language-learning-center.jpg",
    activities: ["الإنجليزية", "الفرنسية", "الإسبانية", "الألمانية"],
  },
];

const menuItems = [
  {
    label: "الرئيسية",
    icon: LayoutDashboard,
    href: "/admin/registrations",
  },
  {
    label: "رسائل الزوار",
    icon: MessageSquare,
    href: "/admin/messages",
  },
];
const stats = [
  {
    label: "إجمالي المسجلين",
    value: "1,234",
    icon: Users,
    change: "+12%",
    color: "text-primary",
  },
  {
    label: "الطلبات الجديدة",
    value: "56",
    icon: FileText,
    change: "+8%",
    color: "text-accent",
  },
  {
    label: "النوادي النشطة",
    value: "12",
    icon: Activity,
    change: "+2",
    color: "text-secondary",
  },
  {
    label: "معدل النمو",
    value: "23%",
    icon: TrendingUp,
    change: "+5%",
    color: "text-success",
  },
];
export { navItems, categories, jobs, activities, clubs, menuItems, stats };
