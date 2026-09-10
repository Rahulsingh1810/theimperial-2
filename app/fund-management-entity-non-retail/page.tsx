"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  FileText,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Scale,
  Lock,
  UserCheck,
  Info,
  HelpCircle,
  FileSpreadsheet,
  Download,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FundManagementEntityPage() {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "regulatory-info", label: "Regulatory Information" },
    { id: "fme-activities", label: "FME Activities" },
    { id: "governance", label: "Governance & Compliance" },
    { id: "grievance-redressal", label: "Grievance Redressal" },
    { id: "contact-us", label: "Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const governanceItems = [
    "Regulatory compliance",
    "Risk management",
    "Internal controls",
    "Conflict of interest management",
    "Anti-Money Laundering (AML) & Counter-Terrorist Financing (CFT)",
    "Know Your Customer (KYC)",
    "Investor protection",
    "Record keeping and regulatory reporting",
    "Grievance redressal",
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
              FME (NON-RETAIL)
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Thinktank IFSC Private Limited
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100/90 mb-6">
              Fund Management Entity (Non-Retail) &bull; GIFT IFSC, Gujarat, India
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-300 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Registered with the International Financial Services Centres Authority (IFSCA) as a Fund Management Entity &ndash; Non-Retail, focused on professional fund management services supported by sound governance, risk management, and regulatory compliance.
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
        {/* Overview & Regulatory Details Section */}
        <section id="regulatory-info" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-pantone mb-3">
                Regulatory Information
              </h2>
              <p className="text-slate-600 text-lg">
                Official Entity & Authorization Details
              </p>
            </div>

            <Card className="border-slate-200 shadow-xl overflow-hidden bg-white mb-10">
              <CardHeader className="bg-pantone text-white p-6">
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-300" />
                  Regulatory Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-200 text-sm md:text-base">
                  {[
                    { label: "Name of Entity", value: "Thinktank IFSC Private Limited", bold: true },
                    {
                      label: "Address",
                      value:
                        "Unit No. 651, 6th Floor, Signature Building, GIFT City, Gandhinagar, Gujarat, India – 382050",
                    },
                    {
                      label: "Regulatory Authority",
                      value: "International Financial Services Centres Authority (IFSCA)",
                    },
                    {
                      label: "FME Category",
                      value: "Fund Management Entity – Non-Retail",
                    },
                    {
                      label: "FME Registration Number",
                      value: "FDM2026FNR1056",
                    },
                    {
                      label: "Jurisdiction",
                      value: "GIFT International Financial Services Centre (GIFT IFSC), Gujarat, India",
                    },
                    {
                      label: "Regulatory Framework",
                      value:
                        "IFSCA (Fund Management) Regulations, 2025, as amended from time to time, together with applicable circulars, guidelines and directions issued by IFSCA.",
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
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Status Callout */}
           
          </div>
        </section>

        {/* FME Activities & Governance Section */}
        <section id="fme-activities" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-slate-200 shadow-md bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-pantone/10 flex items-center justify-center text-pantone mb-2">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-pantone">
                    FME Activities
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    As a Fund Management Entity &ndash; Non-Retail, Thinktank IFSC Private Limited undertakes fund management activities as permitted under its registration and the applicable regulatory framework.
                  </p>
                  <p>
                    The Company may establish and manage eligible investment schemes and structures in accordance with applicable laws, regulations, and regulatory requirements.
                  </p>
                  <p className="text-slate-800 font-medium pt-2 border-t border-slate-100">
                    All activities of the Company are carried out subject to applicable compliance, governance, risk management, and internal control requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-pantone/10 flex items-center justify-center text-pantone mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-pantone">
                    Risk Management Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    Thinktank IFSC Private Limited maintains an appropriate risk management framework to identify, assess, monitor, and manage risks arising from its activities.
                  </p>
                  <p>
                    The Company seeks to ensure that risks are managed through appropriate policies, procedures, internal controls, and oversight mechanisms.
                  </p>
                  <p className="text-slate-800 font-medium pt-2 border-t border-slate-100">
                    Any investment activity undertaken by the Company will be carried out in accordance with applicable regulatory requirements and relevant investment objectives.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Governance and Compliance List */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-7 h-7 text-pantone" />
                <h3 className="text-2xl font-bold text-pantone">
                  Governance and Compliance
                </h3>
              </div>
              <p className="text-slate-600 text-base mb-6 leading-relaxed">
                Thinktank IFSC Private Limited is committed to maintaining high standards of governance, compliance, and ethical conduct. The Company maintains appropriate policies, procedures, and internal controls covering its activities, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {governanceItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-pantone shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Management, Conflicts of Interest, AML & KYC Section */}
        <section id="governance" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-slate-200 shadow-md bg-white">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-pantone flex items-center justify-center mb-2">
                  <UserCheck className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">
                  Management
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 leading-relaxed">
                Thinktank IFSC Private Limited is managed by its Board of Directors and designated personnel responsible for overseeing the Company&apos;s operations, compliance, risk management, and fund management activities. The Company maintains appropriate governance and oversight mechanisms.
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md bg-white">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
                  <Scale className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">
                  Conflict of Interest
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 leading-relaxed">
                The Company maintains appropriate policies and procedures for identifying, managing, and mitigating potential conflicts of interest. The Company seeks to ensure that any potential conflict is managed fairly, transparently, and in accordance with regulatory requirements.
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md bg-white">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-900">
                  AML / KYC Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 leading-relaxed">
                Committed to complying with applicable Anti-Money Laundering (AML), Counter-Terrorist Financing (CFT), and Know Your Customer (KYC) requirements. Following customer due diligence, monitoring, and reporting procedures prescribed by IFSCA.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Grievance Redressal & Disclosures */}
        <section id="grievance-redressal" className="scroll-mt-36">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-pantone hover:bg-blue-200 mb-3 border-none font-semibold">
                  Grievance Redressal Mechanism
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-pantone">
                  GRIEVANCE REDRESSAL CONTACT
                </h3>
              </div>

              <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed mb-6">
                <p className="font-semibold text-slate-800">
                  Thinktank IFSC Private Limited is committed to addressing grievances in a fair, transparent and timely manner.
                </p>
                <p>
                  Any client, investor or other concerned person may submit a grievance to the Company through its designated grievance redressal mechanism.
                </p>
              </div>

              {/* Grievance Redressal Contact Box */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-6">
                <h4 className="text-base font-bold text-pantone uppercase tracking-wider mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-pantone" />
                  Grievance Redressal Contact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <p className="font-bold text-slate-900 text-base">CRO Name &ndash; Rahul N Patel</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                      <Mail className="w-4 h-4 text-pantone shrink-0" />
                      <span>Email:</span>
                      <a href="mailto:compliance@theimperialcrest.com" className="text-pantone font-semibold hover:underline">
                        compliance@theimperialcrest.com
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
                    <p className="font-bold text-slate-900 text-base">CRAO Name &ndash; Tusheet Saraf</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                      <Mail className="w-4 h-4 text-pantone shrink-0" />
                      <span>Email:</span>
                      <a href="mailto:tusheet@theimperialcrest.com" className="text-pantone font-semibold hover:underline">
                        tusheet@theimperialcrest.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                <p>
                  The Company shall endeavour to address grievances in accordance with its internal grievance redressal procedure and applicable regulatory requirements. Where applicable, unresolved grievances may be escalated through the grievance redressal mechanism prescribed by IFSCA.
                </p>
              </div>

              {/* Complaint Handling & Grievance Redressal Policy Link */}
              <div className="pt-6 border-t border-slate-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                    COMPLAINT HANDLING AND GRIEVANCE REDRESSAL POLICY
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="/21_Complaint_Handling_and_Grievance_Redressal_Policy_Signed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pantone hover:bg-pantone-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    (TO VIEW THE POLICY PLEASE CLICK HERE)
                  </a>
                  
                </div>
              </div>
            </div>

            {/* Regulatory Disclosures Policy */}
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-slate-700 text-sm md:text-base leading-relaxed">
              <strong>Regulatory Disclosures:</strong> Thinktank IFSC Private Limited shall make the disclosures required under the applicable IFSCA regulations, circulars, guidelines, and directions from time to time. The website will be updated with relevant regulatory information and disclosures as and when applicable.
            </div>

            {/* Important Disclaimer */}
            <div className="bg-amber-50/80 border border-amber-200 p-6 md:p-8 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <h4>Important Disclaimer</h4>
              </div>
              <p className="text-amber-950 text-sm md:text-base leading-relaxed">
                The information provided on this website is for general information purposes only and does not constitute an offer, solicitation, invitation, or recommendation to invest in any fund, scheme, or financial product.
              </p>
              <p className="text-amber-900 text-xs md:text-sm leading-relaxed">
                Investment in financial products involves risks. Prospective investors should carefully review offering documents and seek appropriate professional advice.
              </p>
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
                    Regulatory & Compliance Contact
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Contact Us
                  </h2>
                  <p className="text-slate-300 text-base mb-6 leading-relaxed">
                    For regulatory and grievance-related matters, please contact our designated Compliance / Grievance Officer.
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Thinktank IFSC Private Limited
                  </p>
                  <p className="text-sm text-blue-200">
                    GIFT International Financial Services Centre (GIFT IFSC), GIFT City, Gujarat, India
                  </p>
                </div>

                <div className="space-y-6 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Compliance Email
                      </h4>
                      <a
                        href="mailto:compliance@theimperialcrest.com"
                        className="text-sm md:text-base text-blue-300 hover:underline mt-1 inline-block font-medium"
                      >
                        compliance@theimperialcrest.com
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
                        href="tel:8238068930"
                        className="text-sm md:text-base text-blue-300 hover:underline mt-1 inline-block font-medium"
                      >
                        +91 8238068930
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                        Registered Location
                      </h4>
                      <p className="text-sm md:text-base text-white mt-1 leading-relaxed">
                        Unit No. 651, 6th Floor, Signature Building, GIFT City, Gandhinagar, Gujarat &ndash; 382050
                      </p>
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
