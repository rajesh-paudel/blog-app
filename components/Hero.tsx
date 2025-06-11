import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-30 md:flex md:items-center md:justify-between border-b-2 border-white">
      {/* Left section */}
      <div className="md:w-1/2 mr-5">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
          Empower Your Ideas with BlogNest
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Dive into insightful articles, tutorials, and stories — all in one place. Start your journey of knowledge now!
        </p>
        <div className="flex space-x-4">
          <Link
            href="/start-reading"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Start Reading
          </Link>
          <Link
            href="/explore-topics"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Explore Topics
          </Link>
        </div>
      </div>

      {/* Right section */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/hero-laptop.png" // put your image in public folder
          alt="Laptop showing blog app"
          width={500}
          height={350}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
}

