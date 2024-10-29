import Image from "next/image";
import data from "@/data/links.json";
import AvatarIcon from "./AvatarIcon.png";
// import { InstagramIcon, TikTokIcon, GithubIcon } from "@/icons";

export default function Home() {
  return (
    <div className="drop-shadow- mx-auto mt-16 flex w-full flex-col items-center px-8">
      <Image className="rounded-full" alt={data.name} src={AvatarIcon} width={96} height={96} />

      <h1 className="mb-8 mt-4 text-xl font-bold">{data.name}</h1>

      {data.links.map((link) => {
        return <LinkCard key={link.title} {...link}></LinkCard>;
      })}

      {/* <div className="mt-8 flex items-center gap-4">
        {data.socials &&
          data.socials.map((link) => {
            return (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.title}>
                {link.href.includes("instagram") ? <InstagramIcon key={link.title} /> : link.href.includes("github") ? <GithubIcon key={link.title} /> : link.href.includes("tiktok") ? <TikTokIcon key={link.title} /> : null}
              </a>
            );
          })}
      </div> */}
    </div>
  );
}

const LinkCard = ({ href, title, image }: { href: string; title: string; image?: string }) => {
  return (
    <a href={href} target={"_blank"} rel="noopener noreferrer" className="mb-3 flex w-full max-w-3xl items-center rounded-md bg-gray-100 p-1 drop-shadow-2xl transition-all hover:scale-105">
      <div className="flex w-full text-center">
        <div className="flex h-10 w-10">{image && <Image className="rounded-md" alt={data.name} src={image} width={40} height={40} />}</div>
        <h2 className="-ml-10 flex w-full items-center justify-center font-semibold text-gray-700">{title}</h2>
      </div>
    </a>
  );
};
