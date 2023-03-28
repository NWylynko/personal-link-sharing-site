import { DropDown } from "~/components/DropDown";
import { LinkItem, LinkItemProps } from "~/components/LinkItem";
import { List } from "~/components/List";

import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";

import { config } from "~/config";
import { ContactForm } from "~/features/FormSpree";
import { isFeatureEnabled } from "~/lib/isFeatureEnabled";

const contact = isFeatureEnabled("formspree")

export const Links = () => {
  return (
    <List>

      {config.links.map((link) => (
        <LinkItem key={link.label} {...link as LinkItemProps} />
      ))}

      {contact && <DropDown icon={HiOutlineMail} label="Get in Contact">
        <ContactForm />
      </DropDown>}

    </List>
  )
}