"use client";

import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
  FaYoutube,
  FaMedium,
} from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import type { IconType } from "react-icons";

const YEAR = new Date().getFullYear();

type SocialLinkProps = {
  href: string;
  icon: IconType;
};

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-inherit hover:text-blue-500 transition-colors duration-200"
      aria-label={href}
    >
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
      <SocialLink href={socialLinks.medium} icon={FaMedium} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href="/rss.xml" icon={FaRss} />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline hover:underline"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}
