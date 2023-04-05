import clsx from "clsx"
import Link from "next/link"

type ExternalLink = React.ComponentProps<typeof Link>

export const ExternalLink = (props: ExternalLink) => {
  return <Link {...props} target="_blank" rel="noopener" className={clsx("underline", props.className)} />
}