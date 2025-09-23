import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hello from "@/components/Hello";
import Work from "@/components/Work";
import Writing from "@/components/Writing";
import { allWritings } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hello />
      <div className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4">
          <div className="pb-6">
            <div className="grid w-full grid-cols-1 gap-x-8 lg:grid-cols-3">
              <div className="col-span-1 lg:col-span-2 lg:col-start-2 lg:max-w-[620px]">
                <div className="c-quick-access border border-primary-500 bg-white p-6">
                  <h2 className="font-serif text-xl">TL; DR</h2>
                  <ul className="grid grid-cols-1 gap-1 pt-4">
                    <li className="text-lg font-light">
                      I can build your next website or mobile app
                    </li>
                    <li className="text-lg font-light">
                      I develop website using React, Next.js, and TypeScript
                    </li>
                    <li className="text-lg font-light">
                      I develop mobile application with React Native, Expo, and
                      TypeScript
                    </li>
                  </ul>

                  <div className="pt-6">
                    <a
                      href="mailto:v.desdoigts@gmail.com"
                      className="inline-flex items-center gap-2 text-primary-500 transition-all hover:translate-x-1"
                    >
                      <span className="inline-block text-lg">→</span>{" "}
                      <span className="inline-block text-lg font-light">
                        let&apos;s talk
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Writing allWritings={allWritings} />
      <Explore />
      <Work />
      <Footer />
    </main>
  );
}
