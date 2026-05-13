"use client";

import React, { useState } from "react";
import {
  Download,
  ArrowRightLeft,
  FileText,
  Mail,
  CheckCircle,
  Star,
  ChevronRight,
  Briefcase,
  Maximize2,
  Minimize2,
  Linkedin,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";

const profile = {
  name: "Michael Abbiw",
  qualifications:
    "FCIMG | FNIMN | FCILG | FCIET | FIoD, MPhil | PGDip | CM | ProM",
  role: "Governance & Transformational Leadership Expert",
  location: "Accra, Ghana",
  bio: "Michael Abbiw is a governance and transformational leadership expert with over 20 years of experience driving institutional excellence across Ghana’s public and private sectors. He specializes in governance, strategy, risk management, and organizational transformation. He is the President of the Chartered Institute of Marketing, Ghana, and Chairman of its Governing Council, providing strategic leadership to advance professional standards and ethical practice. Michael also serves on several boards, including Built Financial Technologies Ltd., the e-Crime Bureau, and the Ghana Association of Savings and Loans Companies, and has previously served on the boards of Telecel Ghana and the Ghana Cylinder Manufacturing Company. A respected thought leader, trainer, and public speaker, Michael holds an MPhil in Entrepreneurship & Corporate Strategy and an MBA from KNUST, and is a Fellow of multiple professional institutions in leadership, governance, marketing, and education.",
  image:
    "https://res.cloudinary.com/dshe5kflb/image/upload/v1778690125/368A9454-scaled-e1757589945396-1462x2048_vur7qk.jpg",
  email: "m.abbiw@mgaconsultingltd.com",
  phone: "0243784721",
  social: {
    linkedin: "https://www.linkedin.com/in/michaelabbiw",
    website: "https://michaelabbiw.com/",
    facebook: "https://www.facebook.com/share/1J9zVPFAXz/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/michael_abbiw?igsh=dWwybGJqMG0yM2ps",
  },
};

const links = [
  {
    title: "MGA Consulting Ltd",
    description:
      "Governance, strategy, risk management, and organizational transformation.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/7da8de98-fa8f-40a6-8c61-8623209756f8_pgwkxa.png",
  },
  {
    title: "MGA Prime Properties",
    description:
      "Premium real estate development and property management solutions.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/75bdfdc3-caf2-48d2-b52a-79592570deb2_ntfild.png",
  },
  {
    title: "Innosol Limited",
    description: "Innovative business and technology solutions.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/4a481e1d-7394-4d62-9ed9-bff007f4b9dd_rrilfx.png",
  },
  {
    title: "STIB Ghana",
    description:
      "Advancing professional standards and institutional excellence.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694567/3431a504-0e73-4455-a6ed-a85dcc13985f_exzfyj.png",
  },
  {
    title: "JKA Logistics Limited",
    description: "End-to-End Logistics & Supply Chain Solutions.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694567/920666c9-2d1e-4c13-acb0-78506cc8aaaf_qwhtjs.png",
    url: "#",
  },
  {
    title: "CorEvents Solutions Ltd",
    description: "Corporate event planning and management solutions.",
    image:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1778694568/6d3da7a3-f04d-49c4-953a-799fda233052_ma5elj.png",
  },
];

export default function HomePage() {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCompanyProfile = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return alert("Please allow popups to view the profile.");

    const content = `
      <html>
        <head>
          <title>Company Profile - ${profile.name}</title>
          <style>
            body { font-family: 'Helvetica', 'Arial', sans-serif; padding: 40px; color: #333; line-height: 1.6; max-width: 800px; margin: 0 auto; }
            .header { border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
            .header h1 { margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
            .header p { margin: 5px 0 0; color: #666; font-size: 14px; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 14px; font-weight: bold; text-transform: uppercase; color: #888; border-bottom: 1px solid #eee; margin-bottom: 15px; padding-bottom: 5px; }
            .company { margin-bottom: 25px; }
            .company h3 { margin: 0 0 5px; font-size: 18px; color: #000; }
            .company .meta { font-size: 13px; color: #666; font-style: italic; margin-bottom: 8px; }
            .footer { margin-top: 50px; font-size: 12px; text-align: center; color: #999; border-top: 1px solid #eee; padding-top: 20px; }
            @media print {
              body { padding: 0; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Michael Abbiw Corporate Portfolio</h1>
            <p>Governance & Transformational Leadership Expert • ${profile.name}</p>
          </div>

          <div class="section">
            <div class="section-title">Executive Summary</div>
            <p>
              A diversified portfolio of companies and professional services operating across governance consulting, real estate, technology solutions, logistics, and event management. Under the leadership of Michael Abbiw, these organizations deliver exceptional value and transformational excellence across Ghana's public and private sectors.
            </p>
          </div>

          <div class="section">
            <div class="section-title">Our Portfolio</div>
            
            <div class="company">
              <h3>MGA Consulting Ltd</h3>
              <div class="meta">Sector: Management Consulting & Governance</div>
              <p>Specializing in governance, strategy, risk management, and organizational transformation to drive institutional excellence.</p>
            </div>

            <div class="company">
              <h3>MGA Prime Properties</h3>
              <div class="meta">Sector: Real Estate</div>
              <p>Delivering premium real estate development and property management solutions.</p>
            </div>

            <div class="company">
              <h3>Innosol Limited</h3>
              <div class="meta">Sector: Technology & Innovation</div>
              <p>Providing innovative business and technology solutions tailored to modern enterprise needs.</p>
            </div>

            <div class="company">
              <h3>STIB Ghana</h3>
              <div class="meta">Sector: Professional Services</div>
              <p>Advancing professional standards and institutional excellence across various sectors.</p>
            </div>

            <div class="company">
              <h3>JKA Logistics Limited</h3>
              <div class="meta">Sector: Logistics & Supply Chain</div>
              <p>Providing comprehensive end-to-end logistics and supply chain management solutions.</p>
            </div>

            <div class="company">
              <h3>CorEvents Solutions Ltd</h3>
              <div class="meta">Sector: Event Management</div>
              <p>Specializing in comprehensive corporate event planning, coordination, and execution.</p>
            </div>
          </div>

          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Michael Abbiw Portfolio. All rights reserved.</p>
            <p>Contact: ${profile.email}</p>
          </div>
          
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
  };

  const handleEmail = () => {
    window.location.href = `mailto:${profile.email}?subject=Inquiry from Digital Card`;
  };

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:${profile.role}
ADR:;;${profile.location}
NOTE:${profile.bio}
EMAIL:${profile.email}
TEL:${profile.phone}
URL:${profile.social.website}
END:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${profile.name.replace(" ", "_")}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExchange = () => {
    window.location.href = `mailto:${profile.email}?subject=Let's Connect`;
  };

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="min-h-screen w-full bg-white md:bg-neutral-100 flex items-start md:items-center justify-center md:p-8">
        <div className="w-full md:max-w-[400px] bg-white md:rounded-[36px] md:shadow-2xl overflow-hidden relative min-h-screen md:min-h-0 ring-1 ring-black/5">
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              relative w-full group cursor-pointer 
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
              ${isExpanded ? "h-[85vh] md:h-[600px]" : "h-[45vh] md:h-[400px]"}
            `}
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
            <div
              className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-700 ${isExpanded ? "opacity-0" : "opacity-80"}`}
            />

            <div
              className={`absolute bottom-10 left-6 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm border border-white/20 transition-all duration-500 ${isExpanded ? "opacity-0 translate-y-4" : "opacity-100"}`}
            >
              <Star size={10} className="fill-white" /> CEO
            </div>

            <div className="absolute top-6 right-6 bg-black/20 backdrop-blur-md p-2 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </div>
          </div>

          <div className="relative -mt-8 bg-white rounded-t-[36px] px-6 pt-10 pb-12 z-10 transition-transform duration-700">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-neutral-200 rounded-full md:hidden" />

            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-black flex items-center gap-2 tracking-tight leading-none">
                {profile.name}
                <CheckCircle
                  size={22}
                  className="text-blue-500 fill-blue-500 text-white"
                />
              </h1>
              <p className="text-xs font-semibold text-neutral-600 mt-2 mb-1">
                {profile.qualifications}
              </p>
              <p className="text-neutral-500 text-sm mt-1 leading-snug font-medium">
                {profile.role} <br /> {profile.location}
              </p>
            </div>

            <div className="flex gap-3 mb-10">
              <button
                onClick={handleSaveContact}
                className="flex-1 bg-black text-white h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform shadow-lg shadow-black/20 hover:bg-neutral-800 hover:scale-95"
              >
                <Download size={18} strokeWidth={2.5} />
                Save contact
              </button>
              <button
                onClick={handleExchange}
                className="flex-1 bg-white border border-neutral-200 text-black h-[52px] rounded-2xl font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-transform hover:bg-neutral-50 hover:scale-95"
              >
                <ArrowRightLeft size={18} strokeWidth={2.5} />
                Connect
              </button>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">About</h3>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                {profile.bio}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">
                Quick Actions
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={handleCompanyProfile}
                  className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100"
                >
                  <FileText size={18} />
                  Profile
                </button>
                <button
                  onClick={handleEmail}
                  className="flex-1 border border-neutral-200 h-[52px] rounded-2xl text-sm font-semibold text-neutral-800 flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors active:bg-neutral-100"
                >
                  <Mail size={18} />
                  Email Me
                </button>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-black text-lg mb-3">
                Connect with Me
              </h3>
              <div className="flex gap-4">
                <SocialBtn
                  icon={<Linkedin size={22} />}
                  href={profile.social.linkedin}
                />
                <SocialBtn
                  icon={<Globe size={22} />}
                  href={profile.social.website}
                />
                <SocialBtn
                  icon={<Facebook size={22} />}
                  href={profile.social.facebook}
                />
                <SocialBtn
                  icon={<Instagram size={22} />}
                  href={profile.social.instagram}
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between mb-4 cursor-pointer group">
                <h3 className="font-bold text-black text-lg">Companies</h3>
                <ChevronRight
                  size={20}
                  className="text-neutral-400 group-hover:translate-x-1 transition-transform"
                />
              </div>
              <div className="flex overflow-x-auto gap-4 pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-[200px] snap-start bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 duration-200 group"
                  >
                    <div className="h-32 w-full bg-neutral-100 relative overflow-hidden">
                      <img
                        src={link.image}
                        alt={link.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-md p-1.5 shadow-sm">
                        <Briefcase size={14} className="text-black" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-[14px] font-bold text-black leading-tight mb-1">
                        {link.title}
                      </p>
                      <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-[-15px]">
                <div className="w-6 h-1.5 bg-black rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
                <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SocialBtn = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 shrink-0 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all active:scale-90 shadow-sm"
  >
    {icon}
  </a>
);
