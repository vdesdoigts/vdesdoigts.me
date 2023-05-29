import LinksBox from "@/components/LinksBox";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

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

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Inner(props: any) {
  return (
    <div className="container mx-auto max-w-[780px] px-4">{props.children}</div>
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

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Inner,
  ImageGrid,
  Box,
  LinksBox,
  FolderGrid,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={{ ...components }} />;
}
