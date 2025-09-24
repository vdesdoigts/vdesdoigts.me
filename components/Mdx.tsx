import LinksBox from "@/components/LinksBox";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

function Info({ label }: { label: string }) {
  return (
    <div className="pt-2">
      <div className="not-prose rounded-md bg-primary-50 px-6 py-4 prose-p:text-sm">
        <div className="flex">
          <div className="flex-1 md:flex md:justify-between">
            <p className="text-base font-light text-primary-600">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MainLink = ({ label, ...props }: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary-500 transition-all hover:translate-x-1"
      >
        <span className="inline-block text-lg">→</span>{" "}
        <span className="inline-block text-lg font-light">{label}</span>
      </Link>
    );
  }

  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center gap-2 text-primary-500 transition-all hover:translate-x-1"
    >
      <span className="inline-block text-lg">→</span>{" "}
      <span className="inline-block text-lg font-light">{label}</span>
    </a>
  );
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Inner(props: any) {
  return (
    <div className="container mx-auto max-w-[780px] px-4">{props.children}</div>
  );
}

function LargeInner(props: any) {
  return (
    <div className="container mx-auto max-w-[1000px] px-4">
      {props.children}
    </div>
  );
}

function Box(props: any) {
  return <div {...props} />;
}

function ImageGrid(props: any) {
  return (
    <div
      className={`mx-auto grid max-w-[1000px] grid-cols-1 gap-2 pb-6 pt-4 prose-p:my-0 prose-img:my-0 md:grid-cols-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

function Video({
  mp4Src,
  oggSrc,
  width = 320,
  height = 240,
}: {
  mp4Src: string;
  oggSrc: string;
  width: number;
  height: number;
}) {
  return (
    <video width={width} height={height} controls className="w-full">
      {mp4Src && <source src={mp4Src} type="video/mp4" />}
      {oggSrc && <source src={oggSrc} type="video/ogg" />}
      Your browser does not support the video tag.
    </video>
  );
}

function FolderGrid({
  links,
  ...props
}: {
  links: {
    label: string;
    url: string;
  }[];
  children: any;
}) {
  return (
    <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-2 pb-6 pt-4 prose-p:my-0 prose-img:my-0 md:grid-cols-7">
      <div className="col-span-1 md:col-span-2">
        <LinksBox links={links} />
      </div>
      <div className="col-span-1 md:col-span-5">{props.children}</div>
    </div>
  );
}

function VimeoEmbed({ id }: { id: string }) {
  return (
    <div className="relative aspect-video">
      <iframe
        className="absolute h-full w-full"
        src={`https://player.vimeo.com/video/${id}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const components = {
  Info: Info,
  Image: RoundedImage,
  a: CustomLink,
  MainLink: MainLink,
  Inner,
  LargeInner,
  ImageGrid,
  Box,
  LinksBox,
  FolderGrid,
  Video,
  VimeoEmbed,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={{ ...components }} />;
}
