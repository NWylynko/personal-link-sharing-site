import { ExternalLink } from "~/components/ExternalLink";

export const Footer = () => {
  return (
    <>
      <span className="text-white mx-4"><ExternalLink href="https://github.com/NWylynko/personal-link-sharing-site" className="text-white">Fork the repo</ExternalLink> to make you own version.</span>
      <span className="text-white mx-4">Built with <ExternalLink href="https://nextjs.org/" className="text-white">Next.js</ExternalLink>, deployed to <ExternalLink href="https://vercel.com/" className="text-white">Vercel</ExternalLink>.</span>
    </>
  )
}