import { Config } from "./lib/configSchema";

import { z } from "zod"
import ProfilePic from "~/public/profile.jpg"

import { RiDiscordLine } from "@react-icons/all-files/ri/RiDiscordLine";
import { TbBrandLinkedin } from "@react-icons/all-files/tb/TbBrandLinkedin";
import { TbBrandTwitter } from "@react-icons/all-files/tb/TbBrandTwitter";
import { TbCpu } from "@react-icons/all-files/tb/TbCpu";
import { TbBrandGithub } from "@react-icons/all-files/tb/TbBrandGithub";
import { HiOutlinePuzzle } from "@react-icons/all-files/hi/HiOutlinePuzzle";


const serverEnvSchema = z.object({
  GITHUB_TOKEN: z.string(),
  WAKATIME_TOKEN: z.string()
})

const clientEnvSchema = z.object({
  NEXT_PUBLIC_FORMSPREE_TOKEN: z.string(),
})

const serverEnv = () => serverEnvSchema.parse(process.env)

const clientEnv = () => clientEnvSchema.parse({
  NEXT_PUBLIC_FORMSPREE_TOKEN: process.env["NEXT_PUBLIC_FORMSPREE_TOKEN"],
})

export const config = Config({
  site: {
    language: "en"
  },
  profile: {
    name: "Nick Wylynko",
    picture: ProfilePic,
    language: "Typescript"
  },
  links: [
    {
      label: "Playful Systems",
      url: "https://playful-systems.com.au",
      icon: HiOutlinePuzzle
    },
    {
      label: "Github",
      url: "https://github.com/NWylynko",
      icon: TbBrandGithub
    },
    {
      label: "Twitter",
      url: "https://twitter.com/wylynko",
      icon: TbBrandTwitter
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/nick-wylynko/",
      icon: TbBrandLinkedin
    },
    {
      label: "NPM",
      url: "https://www.npmjs.com/~nwylynko",
      icon: TbCpu
    },
    {
      label: "Discord",
      url: "https://discordapp.com/users/272984261433491456",
      icon: RiDiscordLine
    }
  ],
  features: {
    github: {
      enabled: true,
      token: () => serverEnv().GITHUB_TOKEN,
      username: "nwylynko"
    },
    formspree: {
      enabled: true,
      token: () => clientEnv().NEXT_PUBLIC_FORMSPREE_TOKEN
    },
    wakatime: {
      enabled: true,
      token: () => serverEnv().WAKATIME_TOKEN
    },
    vercelAnalytics: {
      enabled: true
    }
  }
})