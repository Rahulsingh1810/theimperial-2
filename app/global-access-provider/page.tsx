"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Building2,
  FileText,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Scale,
  TrendingUp,
  UserCheck,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GlobalAccessProviderPage() {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about-us", label: "About Us" },
    { id: "global-access", label: "Global Access" },
    { id: "regulatory-info", label: "Regulatory Information" },
    { id: "risk-disclosure", label: "Risk Disclosure" },
    { id: "contact-us", label: "Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const keyRisks = [
    {
      title: "Market Risk",
      icon: TrendingUp,
      color: "from-blue-500/10 to-indigo-500/10 border-blue-200",
      iconColor: "text-blue-600",
      description:
        "The value of investments may fluctuate due to changes in market conditions, economic factors, and asset price volatility.",
    },
    {
      title: "Currency Risk",
      icon: Globe,
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-200",
      iconColor: "text-emerald-600",
      description:
        "Investments involving foreign currencies may be affected by fluctuations in exchange rates, impacting total returns.",
    },
    {
      title: "Foreign Market & Regulatory Risk",
      icon: Scale,
      color: "from-amber-500/10 to-orange-500/10 border-amber-200",
      iconColor: "text-amber-600",
      description:
        "International markets may be subject to different local laws, regulations, settlement mechanisms, and market practices.",
    },
    {
      title: "Liquidity Risk",
      icon: Lock,
      color: "from-purple-500/10 to-violet-500/10 border-purple-200",
      iconColor: "text-purple-600",
      description:
        "Certain financial products may have limited liquidity and may not always be readily saleable or transferable in a timely manner.",
    },
    {
      title: "Counterparty Risk",
      icon: ShieldCheck,
      color: "from-rose-500/10 to-red-500/10 border-rose-200",
      iconColor: "text-rose-600",
      description:
        "Clients may be exposed to risks arising from the failure, default, or financial insolvency of a foreign counterparty or broker.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-b from-[#041836] via-[#08225a] to-[#0b2b6f] text-white py-20 lg:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-pantone-light/40 text-blue-100 hover:bg-pantone-light/60 px-4 py-1.5 text-sm font-medium tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10">
              Authorized Global Access Provider (GAP)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              THINKTANK IFSC PRIVATE LIMITED
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100/90 mb-6">
              Global Access &bull; GIFT City, Gujarat
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-300 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Facilitating eligible clients&apos; access to permitted financial products in international markets through regulated foreign brokers within the regulatory framework of IFSCA.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Quick Links Bar */}
      <div className="sticky top-[73px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center overflow-x-auto py-3 gap-2 md:gap-6 no-scrollbar">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden md:inline-block mr-2">
              Quick Links:
            </span>
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-600 hover:text-pantone hover:bg-slate-100 px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 space-y-16">
        {/* About Us Section */}
        <section id="about-us" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pantone mb-4">
                About Thinktank IFSC
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Operating within the International Financial Services Centre (GIFT City, Gandhinagar)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-pantone/10 flex items-center justify-center text-pantone mb-3">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Our Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    <strong>Thinktank IFSC Private Limited</strong> is based in GIFT City, Gandhinagar, Gujarat and operates within the regulatory framework applicable to entities established in the International Financial Services Centre.
                  </p>
                  <p>
                    We facilitate eligible clients&apos; access to permitted financial products in international markets through regulated foreign brokers, subject to applicable laws, regulations, and regulatory requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-pantone/10 flex items-center justify-center text-pantone mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Our Strategic Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Our focus is on providing eligible clients with a structured pathway to international markets through appropriate regulated arrangements.
                  </p>
                  <p>
                    The applicable market, foreign broker, and account structure will depend on client eligibility, regulatory requirements, and the relevant arrangement.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Regulatory Framework Highlight */}
            <div className="mt-8 bg-gradient-to-r from-slate-900 to-pantone-dark text-white p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Scale className="w-7 h-7 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Regulatory Framework Compliance
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    Our services are provided subject to applicable requirements of <strong>IFSCA, FEMA, LRS</strong>, and relevant foreign jurisdictions. Client eligibility and required documentation are meticulously verified as part of our structured onboarding and KYC process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Access Section */}
        <section id="global-access" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div>
                  <Badge className="bg-blue-100 text-pantone hover:bg-blue-200 mb-3 border-none font-semibold">
                    Global Reach
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-pantone">
                    Global Access Platform
                  </h2>
                  <p className="text-lg text-slate-600 mt-2">
                    Access Global Markets with Thinktank IFSC
                  </p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-pantone text-white flex items-center justify-center shrink-0 shadow-md">
                  <Globe className="w-9 h-9" />
                </div>
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <strong>Thinktank IFSC Private Limited</strong> is authorised by the <strong>International Financial Services Centres Authority (IFSCA)</strong> as a <strong>Global Access Provider (GAP)</strong>. We facilitate eligible clients&apos; access to permitted financial products in international markets through regulated foreign brokers, subject to applicable laws, regulations, and regulatory requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: UserCheck,
                    title: "Eligible Onboarding",
                    desc: "Comprehensive KYC and eligibility verification aligned with IFSCA guidelines.",
                  },
                  {
                    icon: Globe,
                    title: "International Markets",
                    desc: "Access to permitted financial products in global financial hubs.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Regulated Brokers",
                    desc: "Arrangements with recognized, regulated foreign brokers.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200/80 bg-white hover:border-pantone/40 transition-colors shadow-sm"
                  >
                    <item.icon className="w-8 h-8 text-pantone mb-3" />
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Information Section */}
        <section id="regulatory-info" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-pantone mb-3">
                Regulatory Information
              </h2>
              <p className="text-slate-600 text-lg">
                Official Authorization & Registration Details
              </p>
            </div>

            <Card className="border-slate-200 shadow-lg overflow-hidden bg-white">
              <CardHeader className="bg-pantone text-white p-6">
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-300" />
                  Regulatory Details Table
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-200 text-sm md:text-base">
                  {[
                    { label: "Entity Name", value: "Thinktank IFSC Private Limited", bold: true },
                    {
                      label: "Regulator",
                      value: "International Financial Services Centres Authority (IFSCA)",
                    },
                    { label: "Authorisation", value: "Global Access Provider (GAP)" },
                    {
                      label: "GAP Authorisation Number",
                      value: "IFSCA/GAP/BD/2025-26/003",
                      highlight: true,
                    },
                    { label: "Date of Authorisation", value: "06 November 2025" },
                    {
                      label: "Registered Office Address",
                      value:
                        "Unit No. 651, 6th Floor, Signature Building, GIFT City, Gandhinagar, Gujarat, India – 382050",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 ${
                        idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"
                      }`}
                    >
                      <span className="font-semibold text-slate-700 md:col-span-1">
                        {row.label}
                      </span>
                      <span
                        className={`md:col-span-2 mt-1 md:mt-0 ${
                          row.bold ? "font-bold text-pantone text-base" : "text-slate-800"
                        } ${
                          row.highlight
                            ? "inline-block bg-blue-100 text-pantone font-mono font-bold px-2 py-0.5 rounded w-fit"
                            : ""
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-amber-50 border border-amber-200/80 p-6 rounded-2xl flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm md:text-base text-amber-900 leading-relaxed">
                <strong>Regulatory Compliance Details:</strong> Global Access services are provided subject to applicable laws, regulations, circulars, guidelines, and directions issued by IFSCA and other relevant authorities. Clients may be subject to eligibility, KYC, FEMA, LRS, and other applicable regulatory requirements depending on their individual circumstances and the relevant international market.
              </div>
            </div>
          </div>
        </section>

        {/* Risk Disclosure Section */}
        <section id="risk-disclosure" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-rose-100 text-rose-800 mb-3 border-none font-semibold">
                Important Information
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-pantone mb-4">
                Risk Disclosure
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Understanding the Risks of Investing in International Markets
              </p>
            </div>

            <div className="bg-slate-900 text-slate-200 p-6 md:p-8 rounded-2xl mb-10 shadow-lg border border-slate-800">
              <p className="text-base md:text-lg leading-relaxed">
                Investment in international markets involves substantial risks. Before undertaking any transaction, clients should carefully consider the applicable risks and obtain independent professional advice, where appropriate.
              </p>
            </div>

            {/* Key Risks Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {keyRisks.map((risk, idx) => (
                <Card
                  key={idx}
                  className={`border shadow-sm hover:shadow-md transition-shadow bg-gradient-to-b ${risk.color}`}
                >
                  <CardHeader className="pb-3">
                    <risk.icon className={`w-8 h-8 ${risk.iconColor} mb-2`} />
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {risk.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {risk.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Investor Protection Notice */}
            <div className="bg-white border-2 border-rose-200 rounded-2xl p-6 md:p-8 shadow-md space-y-4">
              <div className="flex items-center gap-3 text-rose-700 font-bold text-xl">
                <AlertTriangle className="w-6 h-6" />
                <h3>Investor Protection Mechanism Notice</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                Clients using Global Access should note that the investor protection, dispute resolution, and investor grievance redressal mechanisms available through Recognised Stock Exchanges in the IFSC are <strong>not available</strong> to Global Access clients, as applicable under the IFSCA framework. Clients should carefully understand the applicable arrangements before accessing international markets.
              </p>
              <div className="pt-2 border-t border-slate-100 text-slate-500 text-xs md:text-sm font-medium">
                <strong>No Guarantee:</strong> Thinktank IFSC Private Limited does not guarantee any return or profit from investments. Investment in securities and financial products involves market risks.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#041836] to-[#08225a] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge className="bg-blue-400/20 text-blue-200 mb-4 border border-blue-300/30">
                    Get In Touch
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Contact Us
                  </h2>
                  <p className="text-slate-300 text-base mb-8 leading-relaxed">
                    Have questions regarding Global Access or regulatory requirements? Reach out to our team at GIFT City.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Thinktank IFSC Private Limited
                  </p>
                </div>

                <div className="space-y-6 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Registered / Office Address
                      </h4>
                      <p className="text-sm md:text-base text-white mt-1 leading-relaxed">
                        Unit No. 651, 6th Floor, Signature Building, GIFT City, Gandhinagar, Gujarat, India &ndash; 382050
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@theimperialcrest.com"
                        className="text-sm md:text-base text-blue-300 hover:underline mt-1 inline-block font-medium"
                      >
                        info@theimperialcrest.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Phone Contact
                      </h4>
                      <a
                        href="tel:9760017985"
                        className="text-sm md:text-base text-blue-300 hover:underline mt-1 inline-block font-medium"
                      >
                        +91 9760017985
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
