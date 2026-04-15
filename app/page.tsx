import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import topicsData from "@/data/topics.json";
import LandingPage from "@/components/LandingPageNew";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        {/* Hero Landing Section */}
        {/* <Landing /> */}
        <LandingPage />

        {/* Additional Content Section */}
        <section className="relative bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-10">
            {/* Portfolio Navigation */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore My Work
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                Discover my latest projects, technical articles, and authentication solutions
              </p>
            </div>

            {/* Demo links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/topics"
                className="group px-8 py-4 bg-gradient-to-r from-[#FF00FF] to-[#008080] text-white rounded-lg hover:from-[#E600E6] hover:to-[#006666] transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Browse Topics</div>
                    <div className="text-sm opacity-90">({topicsData.length} articles)</div>
                  </div>
                </div>
              </Link>

              <Link
                href="/auth"
                className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-[#FF00FF]/30 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-[#FF00FF]/50 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Auth Components</div>
                    <div className="text-sm opacity-90">Login & Register</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}