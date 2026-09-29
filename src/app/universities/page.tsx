"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, MapPin, SlidersHorizontal, GraduationCap, Building2 } from "lucide-react";
import { UNIVERSITIES } from "@/data/universities";

const CATEGORIES = [
  "All",
  "United Kingdom",
  "Australia",
  "Canada",
  "Europe",
  "Japan",
  "Asia",
];

const STUDY_LEVELS = [
  "All Levels",
  "Undergraduate",
  "Postgraduate",
];

export default function UniversitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  // Filter logic
  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      // Category / Country Filter
      const matchesCategory =
        selectedCategory === "All" ||
        uni.country.toLowerCase() === selectedCategory.toLowerCase();

      // Search Query Filter (name, country, popularAreas)
      const matchesSearch =
        searchQuery.trim() === "" ||
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.popularAreas.some((area) =>
          area.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Level Filter
      const matchesLevel =
        selectedLevel === "All" ||
        uni.level.toLowerCase().includes(selectedLevel.toLowerCase());

      return matchesCategory && matchesSearch && matchesLevel;
    });
  }, [selectedCategory, searchQuery, selectedLevel]);

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-gradient-to-b from-[#f8fbff] via-white to-[#f5f9ff] min-h-screen">
      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7">
        
        {/* ========================================================================= */}
        {/* TOP SECTION: HEADING (LEFT) + STATS, SEARCH & FILTERS (RIGHT)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Eyebrow + Heading + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 pt-2"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#062B68] font-bold uppercase tracking-[0.25em] text-[11px] sm:text-xs">
                UNIVERSITIES
              </span>
              <div className="h-[1.5px] w-12 bg-slate-300 rounded-full" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#062B68] tracking-tight leading-[1.12] mb-4 font-serif">
              Find Your Perfect <br />
              <span className="text-[#F4A51C]">University</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-md">
              Discover world-class institutions and programs tailored to your academic journey.
            </p>
          </motion.div>

          {/* Right Column: 3 Stats Counters + Search Bar + Country Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            {/* 3 Stats Counters Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 pb-2 border-b border-slate-100 sm:border-none">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#062B68] tracking-tight leading-none mb-1">
                  2,500+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Universities Worldwide
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#062B68] tracking-tight leading-none mb-1">
                  150+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Countries
                </p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#062B68] tracking-tight leading-none mb-1">
                  50,000+
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Programs
                </p>
              </div>
            </div>

            {/* Search Input Bar with Circular Submit Button */}
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search universities, programs or locations..."
                className="w-full pl-11 pr-14 py-3.5 bg-white rounded-full border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-[0_2px_12px_rgba(0,18,60,0.04)] transition-all"
              />
              <button
                type="button"
                aria-label="Search"
                className="absolute right-2 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Country Category Filter Pills + Filters Trigger */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
                {CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                        isActive
                          ? "bg-[#062B68] text-white shadow-xs"
                          : "bg-white text-slate-600 hover:text-[#062B68] border border-slate-200/80 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Filters Toggle Button */}
              <button
                onClick={() => setShowFiltersModal(!showFiltersModal)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors shrink-0 cursor-pointer ${
                  selectedLevel !== "All"
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-white text-slate-700 border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
                <span>Filters</span>
                {selectedLevel !== "All" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
              </button>
            </div>

            {/* Quick Filter Modal / Dropdown Bar */}
            <AnimatePresence>
              {showFiltersModal && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-lg flex flex-wrap items-center justify-between gap-3 overflow-hidden text-xs"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#062B68] flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" /> Study Level:
                    </span>
                    {STUDY_LEVELS.map((level) => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                          selectedLevel === level
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>

                  {(selectedCategory !== "All" || searchQuery !== "" || selectedLevel !== "All") && (
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSearchQuery("");
                        setSelectedLevel("All");
                      }}
                      className="text-blue-600 hover:underline font-semibold text-[11px] cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* UNIVERSITY CARDS GRID (MATCHING REFERENCE DESIGN WITH THEME COLORS)       */}
        {/* ========================================================================= */}
        {filteredUniversities.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 shadow-xs"
          >
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#062B68] mb-1">No universities found</h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-4">
              We couldn&apos;t find any institution matching &quot;{searchQuery}&quot;. Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSelectedLevel("All");
              }}
              className="bg-[#062B68] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredUniversities.map((uni, index) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-[26px] p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,18,60,0.05)] hover:shadow-[0_16px_36px_rgba(0,18,60,0.11)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch h-full">
                  
                  {/* Left Column of Card: Location, Title, Description, Tags, Action */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Country Location Pin */}
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{uni.country}</span>
                      </div>

                      {/* University Title */}
                      <h3 className="text-lg sm:text-[19px] font-bold text-[#062B68] tracking-tight leading-snug mb-2 font-serif">
                        {uni.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4 line-clamp-3">
                        {uni.description}
                      </p>

                      {/* Popular Course Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {uni.popularAreas.map((area, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50/80 text-[#2563EB] border border-blue-100/50"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View University Action Link */}
                    <Link
                      href={uni.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors mt-auto w-fit pt-2"
                    >
                      <span>View University</span>
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200 shadow-2xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Right Column of Card: Campus Photo with Floating Level Badge (enlarged) */}
                  <div className="w-full sm:w-[190px] md:w-[205px] lg:w-[220px] shrink-0 relative aspect-[16/10] sm:aspect-auto rounded-2xl overflow-hidden bg-slate-100 min-h-[175px] sm:min-h-[195px]">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />

                    {/* Floating Level Badge */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 text-center">
                      <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#062B68] shadow-[0_2px_8px_rgba(0,0,0,0.10)] border border-white/80 block truncate">
                        {uni.level}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* COUNSELING / APPLICATION CALLOUT BANNER                                   */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#062B68] via-[#0A4EA3] to-[#1E40AF] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="relative z-10 max-w-xl">
            <span className="text-amber-400 font-bold tracking-wider text-xs uppercase mb-2 block">
              Direct University Admissions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Need assistance selecting the best university?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
              Our expert counselors assess your academic records, English proficiency, and scholarship eligibility to match you with top universities worldwide.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-2.5 bg-white text-[#062B68] hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Get Free University Guidance</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
