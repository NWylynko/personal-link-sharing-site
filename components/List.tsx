
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { clsx } from "clsx"

type LinksProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const List = ({ children, ...props }: LinksProps) => {
  return (
    <div className={clsx("flex flex-col gap-4 mt-0 mb-8 mx-auto w-full max-w-xl", props.className)} {...props}>
      {children}
    </div>
  )
}