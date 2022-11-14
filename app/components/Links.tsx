
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { RiDiscordLine } from "@react-icons/all-files/ri/RiDiscordLine";
import { TbBrandGithub } from "@react-icons/all-files/tb/TbBrandGithub";
import { TbBrandLinkedin } from "@react-icons/all-files/tb/TbBrandLinkedin";
import { TbBrandTwitter } from "@react-icons/all-files/tb/TbBrandTwitter";
import { TbCpu } from "@react-icons/all-files/tb/TbCpu";

import { DropDown } from "../../components/DropDown";
import { LinkItem } from "../../components/LinkItem";
import { List } from "../../components/List";

import { ContactForm } from "../FormSpree";

export const Links = () => {
  return (
    <List style={{ marginTop: 16 }}>
      <LinkItem label="Github" url="https://github.com/NWylynko" icon={TbBrandGithub} />
      <LinkItem label="Twitter" url="https://twitter.com/wylynko" icon={TbBrandTwitter} />
      <LinkItem label="Linkedin" url="https://www.linkedin.com/in/nick-wylynko/" icon={TbBrandLinkedin} />
      <LinkItem label="NPM" url="https://www.npmjs.com/~nwylynko" icon={TbCpu} />
      <DropDown icon={HiOutlineMail} label="Get in Contact">
        <ContactForm />
      </DropDown>
      <LinkItem label="Discord" url="https://discordapp.com/users/272984261433491456" icon={RiDiscordLine} />
    </List>
  )
}