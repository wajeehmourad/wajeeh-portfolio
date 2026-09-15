"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  Braces,
  BriefcaseBusiness,
  Database,
  Download,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import DataNetwork from "@/components/DataNetwork";
import RoleRotator from "@/components/RoleRotator";
import TechVisual from "@/components/TechVisual";

type Lang = "en" | "ar";

type ExpertiseItem = {
  Icon: typeof BarChart3;
  title: string;
  text: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  text: string;
};

type ProjectItem = {
  icon: string;
  title: string;
  type: string;
  text: string;
};

const content = {
  en: {
    nav: ["About", "Expertise", "Experience", "Projects", "Contact"],
    intro: "Hello, I’m",
    name: "Wajeeh Murad AlSultan",
    title: "Informatics Engineer",
    tagline: "Designing data systems, building digital solutions.",
    roles: [
      "Information Management",
      "Data Analysis & BI",
      "MEAL & Evidence",
      "AI & Automation",
      "IT & Digital Systems",
    ],
    summary:
      "I combine informatics engineering with hands-on experience in data, monitoring and evaluation, information management, field operations and digital solutions. I turn complex information into clear evidence, practical tools and better decisions.",
    download: "Download CV",
    contact: "Contact me",
    scroll: "Explore portfolio",
    about: "About",
    aboutText:
      "My work sits at the intersection of technology, humanitarian programming and evidence. I design data-collection systems, clean and analyze data, build dashboards and reporting workflows, train teams, support field monitoring, and use AI and automation to make processes faster and more reliable.",
    stats: [
      ["5+", "Years across data & MEAL"],
      ["8+", "Professional roles"],
      ["20+", "Tools, dashboards & workflows"],
      ["4", "Core domains"],
    ],
    expertise: "Areas of expertise",
    experience: "Professional experience",
    projects: "Selected work",
    tech: "Technology stack",
    education: "Education & training",
    contactTitle: "Let’s build something useful",
    contactText:
      "Open to roles and collaborations across data, information systems, MEAL, reporting, AI-enabled workflows and digital transformation.",
    footer: "Built around data, systems and meaningful impact.",
    caseStudy: "Case study",
    contactSection: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Idlib, Syria",
  },
  ar: {
    nav: ["نبذة", "مجالات الخبرة", "الخبرة المهنية", "الأعمال", "تواصل"],
    intro: "مرحباً، أنا",
    name: "وجيه مراد السلطان",
    title: "مهندس معلوماتية",
    tagline: "أصمم أنظمة البيانات وأبني حلولاً رقمية عملية.",
    roles: [
      "إدارة المعلومات",
      "تحليل البيانات وذكاء الأعمال",
      "المراقبة والتقييم والأدلة",
      "الذكاء الاصطناعي والأتمتة",
      "تقنية المعلومات والأنظمة الرقمية",
    ],
    summary:
      "أجمع بين الهندسة المعلوماتية والخبرة العملية في البيانات والمراقبة والتقييم وإدارة المعلومات والعمليات الميدانية والحلول الرقمية، لتحويل المعلومات المعقدة إلى أدلة واضحة وأدوات عملية وقرارات أفضل.",
    download: "تحميل السيرة الذاتية",
    contact: "تواصل معي",
    scroll: "استكشف الملف المهني",
    about: "نبذة عني",
    aboutText:
      "أعمل عند تقاطع التقنية والبرامج الإنسانية والأدلة. أصمم أنظمة جمع البيانات، وأنظف البيانات وأحللها، وأبني لوحات المعلومات ومسارات التقارير، وأدرب الفرق، وأدعم المراقبة الميدانية، وأستخدم الذكاء الاصطناعي والأتمتة لتسريع العمل ورفع موثوقيته.",
    stats: [
      ["+5", "سنوات في البيانات والمراقبة والتقييم"],
      ["+8", "أدوار مهنية"],
      ["+20", "أداة ولوحة ومسار عمل"],
      ["4", "مجالات أساسية"],
    ],
    expertise: "مجالات الخبرة",
    experience: "الخبرة المهنية",
    projects: "نماذج من الأعمال",
    tech: "التقنيات والأدوات",
    education: "التعليم والتدريب",
    contactTitle: "لنبنِ شيئاً مفيداً",
    contactText:
      "مهتم بالفرص والتعاون في البيانات، وأنظمة المعلومات، والمراقبة والتقييم، والتقارير، وحلول الذكاء الاصطناعي، والتحول الرقمي.",
    footer: "بيانات أفضل، أنظمة أذكى، وأثر أوضح.",
    caseStudy: "عرض المشروع",
    contactSection: "تواصل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "إدلب، سوريا",
  },
} as const;

const expertiseItems: Record<Lang, ExpertiseItem[]> = {
  en: [
    {
      Icon: BarChart3,
      title: "Data Analysis & BI",
      text: "Power BI, Excel, dashboards, indicators and reporting.",
    },
    {
      Icon: Database,
      title: "Information Management",
      text: "Databases, data quality, documentation and information flows.",
    },
    {
      Icon: BriefcaseBusiness,
      title: "MEAL",
      text: "Monitoring, evaluations, assessments, field verification and learning.",
    },
    {
      Icon: Braces,
      title: "Programming & Automation",
      text: "Digital tools, scripting concepts, workflow automation and prototypes.",
    },
    {
      Icon: Bot,
      title: "AI-enabled Workflows",
      text: "AI-assisted analysis, reporting, tool development and productivity.",
    },
    {
      Icon: Network,
      title: "IT & Systems",
      text: "Networks, devices, technical support, cloud storage and troubleshooting.",
    },
    {
      Icon: Users,
      title: "Training & Capacity Building",
      text: "Practical training on data tools, reporting, protection and cybersecurity.",
    },
    {
      Icon: ShieldCheck,
      title: "Data Protection",
      text: "Confidentiality, safe storage, archiving and responsible data practices.",
    },
  ],
  ar: [
    {
      Icon: BarChart3,
      title: "تحليل البيانات وذكاء الأعمال",
      text: "Power BI وExcel ولوحات المعلومات والمؤشرات وإعداد التقارير.",
    },
    {
      Icon: Database,
      title: "إدارة المعلومات",
      text: "قواعد البيانات، وجودة البيانات، والتوثيق، وتدفقات المعلومات.",
    },
    {
      Icon: BriefcaseBusiness,
      title: "المراقبة والتقييم",
      text: "المراقبة، والتقييمات، ودراسات الاحتياجات، والتحقق الميداني، والتعلم.",
    },
    {
      Icon: Braces,
      title: "البرمجة والأتمتة",
      text: "الأدوات الرقمية، ومفاهيم البرمجة، وأتمتة سير العمل، وتطوير النماذج الأولية.",
    },
    {
      Icon: Bot,
      title: "سير العمل المدعوم بالذكاء الاصطناعي",
      text: "استخدام الذكاء الاصطناعي في التحليل والتقارير وتطوير الأدوات ورفع الإنتاجية.",
    },
    {
      Icon: Network,
      title: "تقنية المعلومات والأنظمة",
      text: "الشبكات، والأجهزة، والدعم التقني، والتخزين السحابي، واستكشاف الأعطال وإصلاحها.",
    },
    {
      Icon: Users,
      title: "التدريب وبناء القدرات",
      text: "تدريبات عملية على أدوات البيانات والتقارير وحماية البيانات والأمن السيبراني.",
    },
    {
      Icon: ShieldCheck,
      title: "حماية البيانات",
      text: "السرية، والتخزين الآمن، والأرشفة، وممارسات الاستخدام المسؤول للبيانات.",
    },
  ],
};

const experienceItems: Record<Lang, ExperienceItem[]> = {
  en: [
    {
      period: "2023 — Present",
      role: "Monitoring & Evaluation Officer",
      org: "ATAA Relief",
      text: "Lead monitoring workflows, data-collection tools, data quality, analysis, reporting and team guidance.",
    },
    {
      period: "Jun — Dec 2024",
      role: "Area Manager — Dana",
      org: "Sawa Organization",
      text: "Managed area operations, field teams, training activities, grant distribution and local coordination.",
    },
    {
      period: "May — Sep 2023",
      role: "Assistant Information Management",
      org: "ATAA Relief",
      text: "Reviewed programme data, supported reporting, prepared beneficiary datasets and managed digital archiving.",
    },
    {
      period: "Jan 2021 — May 2023",
      role: "Field Monitoring & Evaluation Officer",
      org: "ATAA Relief",
      text: "Conducted field monitoring, assessments, quantitative and qualitative data collection, analysis and verification.",
    },
    {
      period: "2022 — Present",
      role: "IT Officer — Volunteer",
      org: "ATAA Relief",
      text: "Provide technical support, maintain office networks, troubleshoot devices and support daily IT operations.",
    },
    {
      period: "2021 — Present",
      role: "Trainer",
      org: "Syrian Platform",
      text: "Deliver training in Excel, KoboToolbox, Power BI, data protection, archiving and basic cybersecurity.",
    },
  ],
  ar: [
    {
      period: "أيلول 2023 — حتى الآن",
      role: "مسؤول المراقبة والتقييم",
      org: "عطاء للإغاثة",
      text: "إدارة ومتابعة مسارات المراقبة والتقييم، وأدوات جمع البيانات، وجودة البيانات، والتحليل، والتقارير، ودعم الفريق.",
    },
    {
      period: "حزيران — كانون الأول 2024",
      role: "مدير منطقة — الدانا",
      org: "منظمة سوا",
      text: "إدارة عمليات المنطقة والفرق الميدانية، والإشراف على التدريبات، وتوزيع المنح، والتنسيق المحلي.",
    },
    {
      period: "أيار — أيلول 2023",
      role: "مساعد إدارة معلومات",
      org: "عطاء للإغاثة",
      text: "مراجعة بيانات البرامج، ودعم التقارير، وتجهيز بيانات المستفيدين، وإدارة الأرشفة الرقمية.",
    },
    {
      period: "كانون الثاني 2021 — أيار 2023",
      role: "مسؤول مراقبة وتقييم ميداني",
      org: "عطاء للإغاثة",
      text: "تنفيذ المراقبة الميدانية والتقييمات، وجمع البيانات الكمية والنوعية، والتحليل، والتحقق من جودة التنفيذ والبيانات.",
    },
    {
      period: "2022 — حتى الآن",
      role: "مسؤول تقنية معلومات — متطوع",
      org: "عطاء للإغاثة",
      text: "تقديم الدعم التقني، وصيانة شبكات المكتب، ومعالجة أعطال الأجهزة والبرمجيات، ودعم العمليات التقنية اليومية.",
    },
    {
      period: "2021 — حتى الآن",
      role: "مدرب",
      org: "المنصة السورية",
      text: "تقديم تدريبات في Excel وKoboToolbox وPower BI وحماية البيانات والأرشفة وأساسيات الأمن السيبراني.",
    },
  ],
};

const projects: Record<Lang, ProjectItem[]> = {
  en: [
    {
      icon: "01",
      title: "MEAL Field Visits",
      type: "Mobile workflow",
      text: "A multi-sector field-visits concept with offline-first workflows, role-based permissions, photos, notes, follow-up and reporting.",
    },
    {
      icon: "02",
      title: "Verification & Baseline Tools",
      type: "Kobo / XLSForm",
      text: "Complex verification logic, quality constraints, profile corrections, duplicate handling and linked baseline workflows.",
    },
    {
      icon: "03",
      title: "Interactive Data Dashboards",
      type: "Power BI / Excel",
      text: "Decision-ready dashboards for operational monitoring, trends, geographic distribution and management reporting.",
    },
    {
      icon: "04",
      title: "Market & Needs Assessments",
      type: "Assessment design",
      text: "Questionnaires, sampling approaches, data-quality checks, analysis structures and concise evidence products.",
    },
  ],
  ar: [
    {
      icon: "01",
      title: "نظام الزيارات الميدانية للمراقبة والتقييم",
      type: "تطبيق وسير عمل ميداني",
      text: "تصور متعدد القطاعات للزيارات الميدانية يدعم العمل دون اتصال، والصلاحيات حسب الدور، والصور، والملاحظات، والمتابعة، والتقارير.",
    },
    {
      icon: "02",
      title: "أدوات التحقق وخط الأساس",
      type: "Kobo / XLSForm",
      text: "منطق تحقق متقدم، وضوابط لجودة البيانات، وتصحيح ملفات المستفيدين، والتعامل مع التكرارات، وربط مسارات خط الأساس.",
    },
    {
      icon: "03",
      title: "لوحات معلومات تفاعلية",
      type: "Power BI / Excel",
      text: "لوحات معلومات داعمة للقرار لمتابعة العمليات والاتجاهات والتوزع الجغرافي وإعداد التقارير الإدارية.",
    },
    {
      icon: "04",
      title: "تقييمات السوق والاحتياجات",
      type: "تصميم التقييمات",
      text: "تصميم الاستبيانات، ومنهجيات أخذ العينات، وفحوص جودة البيانات، وهياكل التحليل، وإنتاج مخرجات أدلة مختصرة وواضحة.",
    },
  ],
};

const stack: Record<Lang, string[]> = {
  en: [
    "Excel",
    "Power BI",
    "KoboToolbox",
    "XLSForm",
    "Google Forms",
    "Microsoft Forms",
    "AI Tools",
    "Databases",
    "Cloud Storage",
    "Networking",
    "Programming",
    "Data Quality",
  ],
  ar: [
    "Excel",
    "Power BI",
    "KoboToolbox",
    "XLSForm",
    "Google Forms",
    "Microsoft Forms",
    "أدوات الذكاء الاصطناعي",
    "قواعد البيانات",
    "التخزين السحابي",
    "الشبكات",
    "البرمجة",
    "جودة البيانات",
  ],
};

const education = {
  en: [
    {
      Icon: GraduationCap,
      title: "Bachelor of Information Engineering",
      text: "International University of Science and Renaissance",
      period: "2025 — 2026",
    },
    {
      Icon: ShieldCheck,
      title: "Information Security & Networks Institute",
      text: "International University of Science and Renaissance",
      period: "2019 — 2020",
    },
    {
      Icon: Sparkles,
      title: "Professional Training",
      text: "M&E, Kobo/XLS, Excel, Power BI, AI, data protection, PSEA, Child Protection & GBV",
      period: "",
    },
  ],
  ar: [
    {
      Icon: GraduationCap,
      title: "بكالوريوس الهندسة المعلوماتية",
      text: "الجامعة الدولية للعلوم والنهضة",
      period: "2025 — 2026",
    },
    {
      Icon: ShieldCheck,
      title: "معهد أمن المعلومات والشبكات",
      text: "الجامعة الدولية للعلوم والنهضة",
      period: "2019 — 2020",
    },
    {
      Icon: Sparkles,
      title: "التدريب المهني",
      text: "المراقبة والتقييم، Kobo/XLS، Excel، Power BI، الذكاء الاصطناعي، حماية البيانات، PSEA، حماية الطفل وGBV",
      period: "",
    },
  ],
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const rtl = lang === "ar";
  const cvPath = rtl
    ? "/Wajeeh_Murad_AlSultan_CV_AR.pdf"
    : "/Wajeeh_Murad_AlSultan_CV_EN.pdf";
  const navHrefs = ["about", "expertise", "experience", "projects", "contact"];
  const years = useMemo(() => new Date().getFullYear(), []);

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "rtl" : "ltr"}>
      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="Home">
          W<span>.</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, i) => (
            <a key={item} href={`#${navHrefs[i]}`}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="lang-btn"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          aria-label={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
        >
          <Languages size={17} /> {lang === "en" ? "AR" : "EN"}
        </button>
      </header>

      <section id="home" className="hero section-pad">
        <DataNetwork />
        <div className="hero-glow glow-a" />
        <div className="hero-glow glow-b" />

        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.intro}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            {t.name}
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16 }}
          >
            <span>{t.title}</span>
            <i>/</i>
            <RoleRotator roles={[...t.roles]} />
          </motion.div>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            {t.tagline}
          </motion.p>

          <motion.p
            className="hero-summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.33 }}
          >
            {t.summary}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            <a className="btn btn-gold" href={cvPath} download>
              <Download size={18} />
              {t.download}
            </a>
            <a className="btn btn-ghost" href="#contact">
              <Mail size={18} />
              {t.contact}
            </a>
          </motion.div>

          <a href="#about" className="scroll-link">
            <ArrowDown size={16} />
            {t.scroll}
          </a>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <TechVisual />
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/wajeeh-profile.png"
                alt="Wajeeh Murad AlSultan"
                fill
                priority
                sizes="(max-width: 900px) 65vw, 430px"
                className="portrait"
              />
            </div>
            <div className="code-chip code-chip-a">&lt;data /&gt;</div>
            <div className="code-chip code-chip-b">AI + BI</div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-pad content-section">
        <div className="section-kicker">01 / {t.about}</div>
        <div className="about-grid">
          <div>
            <h2>{t.about}</h2>
            <p className="lead">{t.aboutText}</p>
          </div>
          <div className="stats-grid">
            {t.stats.map(([n, label]) => (
              <div className="stat" key={label}>
                <strong>{n}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section-pad content-section alt">
        <div className="section-kicker">02 / {t.expertise}</div>
        <h2>{t.expertise}</h2>
        <div className="cards-grid">
          {expertiseItems[lang].map(({ Icon, title, text }, i) => (
            <motion.article
              className="expertise-card"
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-pad content-section">
        <div className="section-kicker">03 / {t.experience}</div>
        <h2>{t.experience}</h2>
        <div className="timeline">
          {experienceItems[lang].map((item) => (
            <motion.article
              className="timeline-item"
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, x: rtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-dot">
                <span />
              </div>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <h4>{item.org}</h4>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-pad content-section alt">
        <div className="section-kicker">04 / {t.projects}</div>
        <h2>{t.projects}</h2>
        <div className="project-grid">
          {projects[lang].map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-index">{p.icon}</div>
              <div className="project-type">{p.type}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="project-link">
                {t.caseStudy} <ArrowUpRight size={16} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad content-section">
        <div className="section-kicker">05 / {t.tech}</div>
        <h2>{t.tech}</h2>
        <div className="stack-cloud">
          {stack[lang].map((item, i) => (
            <span key={item} style={{ animationDelay: `${i * 80}ms` }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad content-section alt">
        <div className="section-kicker">06 / {t.education}</div>
        <h2>{t.education}</h2>
        <div className="education-grid">
          {education[lang].map(({ Icon, title, text, period }) => (
            <article className="education-card" key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                {period && <span>{period}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <DataNetwork />
        <div className="contact-card">
          <div>
            <div className="section-kicker">07 / {t.contactSection}</div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:wajeeh.alsultan97@gmail.com">
              <Mail />
              {t.email}
            </a>
            <a href="tel:+963965337477">
              <Phone />
              {t.phone}
            </a>
            <a
              href="https://www.linkedin.com/in/wajeehalsultan"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
            <span>
              <MapPin />
              {t.location}
            </span>
          </div>
        </div>
      </section>

      <footer>
        <span>© {years} Wajeeh Murad AlSultan</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
