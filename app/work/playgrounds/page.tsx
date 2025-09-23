import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import { DateTime } from "luxon";
import Image from "next/image";

export default function Playgrounds() {
  return (
    <main className="py-3">
      <header className="container mx-auto mb-10 max-w-[780px] px-4">
        <div>
          <BackButton href="/" />
        </div>
      </header>
      <article
        className="prose prose-slate max-w-none lg:prose-xl
        prose-h2:mb-3 prose-h2:mt-16 prose-h2:font-serif prose-h2:text-2xl
    prose-h2:font-light
    prose-p:font-light
    prose-a:font-light prose-a:text-primary-500 prose-a:no-underline
    prose-li:font-light lg:prose-h3:text-3xl
    lg:prose-strong:font-normal"
      >
        <header className="not-prose container mx-auto max-w-[780px] px-4 pb-6">
          <div className="pb-2 text-xl font-light text-gray">
            {DateTime.fromISO("2023-01-01").setLocale("en").toFormat("DD")}
          </div>
          <h1 className="max-w-[650px] font-serif text-5xl font-bold uppercase leading-none text-black">
            Playgrounds, find players and courts
          </h1>
        </header>
        <div className="container mx-auto max-w-[780px] px-4">
          <p>
            Find the closest streetball courts near you. Join or organize
            events, invite your friends, follow other players&apos; activity.
            Join the growing community and connect with friends and new players
            wherever you go.
          </p>
        </div>
        <div className="container mx-auto max-w-[1000px] px-4">
          <div className="mt-8">
            <Image
              priority
              width="1400"
              height="1624"
              src="/images/playgrounds/playgrounds-app.png"
              alt="Playgrounds app screens presentation"
            />
          </div>
        </div>
        <div className="container mx-auto max-w-[780px] px-4">
          <h2>Why Playgrounds?</h2>
          <p>
            The application is a guide to help you locate the nearest streetball
            court. Playgrounds also offer the opportunity to engage in{" "}
            <strong>building a community around streetball</strong> by
            organizing and participating in events, tournaments, pickup games,
            and more.
          </p>
          <p>
            The founding idea is to provide all basketball players — whether
            regulars, occasional players, or newcomers — the chance to find
            nearby partners to share the joy of the orange ball with.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-2 pb-6 pt-4 prose-p:my-0 prose-img:my-0 md:grid-cols-2 lg:grid-cols-3">
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-01.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-02.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-03.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-04.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-05.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
          <Image
            priority
            width="800"
            height="800"
            src="/images/playgrounds/illu-06.png"
            alt="Playgrounds app illustration by Alexandre Godreau"
          />
        </div>
        <div className="container mx-auto max-w-[780px] px-4">
          <h2>The Journey</h2>
          <p>
            Nearly a decade has passed, spanning the time between the initial
            iteration and the recent launch of the Playgrounds - Basketball.
          </p>
          <p>
            It&apos;s been a rewarding and captivating project, where I&apos;ve
            invested my personal time, allowing me to explore skill areas that
            were previously unfamiliar to me. A project that has evolved over
            time, both in substance and form.
          </p>
          <p>
            What began as a passionate student project became a side project
            during my early career, and eventually a passion-driven endeavor
            accompanied by an unwavering quest:{" "}
            <strong>to see it through to the end</strong>.
          </p>
          <p>
            Certainly, the task didn&apos;t appear too daunting considering the
            final outcome. The tools evolved, both in application development
            and server-side setup, enabling me to create the current version in
            just a few months. One pursuit often leads to another, especially
            concerning communication about the application and the establishment
            / consolidation of a streetball community, organizing sponsored
            tournaments, and more.
          </p>
          <p>
            On the application side, additional features are in the pipeline.
            Expanding court listings is also on the agenda; currently available
            for Paris, Nantes, Lyon, Lille, Bordeaux, and New York. A multitude
            of exciting possibilities lie ahead, waiting for me to explore.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-2 pb-6 pt-4 prose-p:my-0 prose-img:my-0 md:grid-cols-2 lg:grid-cols-3">
          <Image
            width="828"
            height="1792"
            src="/images/playgrounds/map.png"
            alt="Search streetbal court screen"
          />
          <Image
            width="828"
            height="1792"
            src="/images/playgrounds/events.png"
            alt="Events screen"
          />
          <Image
            width="828"
            height="1792"
            src="/images/playgrounds/event.png"
            alt="Event screen"
          />
          <Image
            priority
            width="828"
            height="1792"
            src="/images/playgrounds/feed.png"
            alt="Feed screen"
          />
          <Image
            priority
            width="828"
            height="1792"
            src="/images/playgrounds/profile.png"
            alt="Profile screen"
          />
          <Image
            priority
            width="828"
            height="1792"
            src="/images/playgrounds/avatar.png"
            alt="Avatar screen"
          />
        </div>
        <div className="container mx-auto max-w-[780px] px-4">
          <h2>Under the Hood</h2>
          <p>
            It started with Appcelerator Titanium and a Symfony API, then
            transitioned to React Native in 2016, and more recently to NestJS.
          </p>
          <p>
            <strong>Playgrounds is a React Native app built with Expo.</strong>{" "}
            In the ever-evolving landscape of mobile app development, React
            Native has emerged as a powerful tool for crafting dynamic and
            efficient cross-platform applications. When combined with Expo, the
            result is a seamless and feature-rich mobile app that offers a great
            user experience.
          </p>
          <p>
            Expo provides a set of tools, libraries, and services that simplify
            the development process, from creating the app to deploying it on
            various platforms. Its help me to focus on the app itself, rather
            than the setup of the development environment.
          </p>
          <p>Among the libraries used:</p>
          <ul>
            <li>
              <a
                href="https://github.com/gorhom/react-native-bottom-sheet"
                target="_blank"
              >
                @gorhom/bottom-sheet
              </a>
            </li>
            <li>
              <a href="https://reactnavigation.org/" target="_blank">
                @react-navigation
              </a>
            </li>
            <li>
              <a href="https://turfjs.org/docs/" target="_blank">
                @turf
              </a>
            </li>
            <li>
              <a
                href="https://github.com/react-native-maps/react-native-maps"
                target="_blank"
              >
                react-native-maps
              </a>
            </li>
            <li>
              <a
                href="https://github.com/meliorence/react-native-snap-carousel"
                target="_blank"
              >
                react-native-snap-carousel
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto max-w-[780px] px-4">
          <h2>Current status</h2>
          <p>
            After two successful years in production, I made the decision to
            discontinue the Playgrounds - Basketball app. The reality of
            building and maintaining a thriving community requires dedicated
            time and resources that I could no longer commit to.
          </p>
          <p>
            The app had found its audience and was serving players across
            multiple cities, but sustaining meaningful community
            engagement—organizing events, moderating interactions, expanding to
            new locations, and continuously improving the platform—demanded more
            than I could provide as a solo developer juggling other
            responsibilities.
          </p>
          <p>
            The Playgrounds project taught me lessons about community building,
            mobile and back-end development, it remains one of my most rewarding
            endeavors.
          </p>
        </div>
        {/* <div className="container mx-auto max-w-[780px] px-4">
          <div className="pt-16">
            <LinksBox
              title="Links"
              links={[
                {
                  label: "App Store (not available anymore)",
                  url: "https://apps.apple.com/app/id1624112205",
                },
                {
                  label: "Google Play",
                  url: "https://play.google.com/store/apps/details?id=com.vdesdoigts.playgrounds",
                },
                {
                  label: "Behance",
                  url: "https://www.behance.net/gallery/162470931/Playgrounds-Find-players-and-courts",
                },
              ]}
            />
          </div>
        </div> */}
      </article>
      <Footer />
    </main>
  );
}
