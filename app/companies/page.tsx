import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { links as companies } from '@/features/HomePage/Page';

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 md:p-8 p-4 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-[36px] md:shadow-2xl overflow-hidden ring-1 ring-black/5 min-h-[90vh]">
        <div className="p-8 border-b border-neutral-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-xl z-10">
          <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors">
            <ArrowLeft size={20} className="text-black" />
          </Link>
          <h1 className="text-2xl font-extrabold text-black tracking-tight">Our Companies</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, idx) => (
              <a
                key={idx}
                href={company.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 w-full bg-neutral-100 relative overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl p-2.5 shadow-sm">
                    <Briefcase size={18} className="text-black" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                    {company.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {company.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
