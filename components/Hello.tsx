import Image from "next/image";
import CompaniesText from "./CompaniesText";

export default function Hello() {
  return (
    <div className="flex basis-[100vh] bg-main xl:max-h-[35.625rem] 2xl:max-h-[47.5rem]">
      <div className="container mx-auto flex items-end px-4 py-20 lg:pb-48 lg:pt-24 xl:pb-20 xl:pt-24 2xl:pb-16 2xl:pt-24">
        <div className="grid w-full grid-cols-1 gap-x-8 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2 lg:col-start-2">
            <div>
              <div className="relative pb-11">
                <Image
                  priority
                  width="501"
                  height="95"
                  src="/assets/hello-there-stroke.svg"
                  alt="hello there"
                  className="relative z-10"
                />
                <Image
                  priority
                  width="501"
                  height="95"
                  src="/assets/hello-there.svg"
                  alt="hello there"
                  className="absolute left-[2px] top-[2px] z-0"
                />
              </div>
              <div className="max-w-[45rem] text-2xl font-light leading-normal lg:text-3xl">
                <p className="pb-8">
                  I’m Vincent, a multidisciplinary developer and creative. With
                  strong skills in development and user experience, I love
                  creating user-friendly interfaces.
                </p>
                <p>
                  I’m the co-founder of{" "}
                  <a
                    href="https://premieroctet.com"
                    target="_blank"
                    className="transition-colors hover:text-primary-500"
                  >
                    Premier Octet
                  </a>
                  , an agency that develops apps for companies like{" "}
                  <CompaniesText />
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:order-first">
            <div className="relative h-full pt-12 lg:pt-0">
              <Image
                priority
                width="1440"
                height="1405"
                src="/assets/avatar-color.png"
                alt="hello there"
                className="z-0 w-full max-w-none lg:absolute lg:bottom-[-160px] lg:right-[-70px] lg:w-[225%]
                xl:bottom-[-150px] xl:right-[-80px] xl:w-[150%]
                2xl:bottom-[-150px] 2xl:right-[-50px] 2xl:w-[140%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
