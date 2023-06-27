
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type LinksProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const List = ({ children, ...props }: LinksProps) => {
  return (
    <div className={twMerge("flex flex-col gap-4 mt-0 mb-8 mx-auto w-full max-w-xl", props.className)} {...props}>
      {children}
    </div>
  )
}