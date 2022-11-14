import { ExternalLink } from "../../components/ExternalLink"
import { fetchPinnedRepos } from "../../lib/fetchPinnedRepos"
import { List } from "../../components/List"
import styles from "./Repos.module.css"

import { TbStar } from "@react-icons/all-files/tb/TbStar"
import { TbGitFork } from "@react-icons/all-files/tb/TbGitFork"
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare"
import { FaExternalLinkSquareAlt } from "@react-icons/all-files/fa/FaExternalLinkSquareAlt"

export const Repos = async () => {

  const repos = await fetchPinnedRepos("nwylynko")

  return (
    <>
      <h1 style={{ color: "white" }}>Recent Projects</h1>
      <List>
        {repos.map((props) => (
          <RepoItem key={props.id} {...props} />
        ))}
      </List>
    </>
  )

}

type RepoItemProps = Awaited<ReturnType<typeof fetchPinnedRepos>>[number]

const RepoItem = (repo: RepoItemProps) => {

  return (
    <div className={styles.item}>
      <span>{repo.createdAt.getFullYear()}</span>
      <div className={styles.header}>
        <h2>{repo.name}</h2>
        <span>{repo.primaryLanguage}</span>
      </div>

      <span className={styles.desc}>{repo.description}</span>

      <div className={styles.details}>
        <TbStar /><span>Stars: {repo.stargazerCount}</span>
        {repo.forkCount !== 0 && <><span> | </span><TbGitFork /><span>Forks: {repo.forkCount}</span></>}
      </div>
      <div className={styles.details}>
        <FaGithubSquare /><ExternalLink className={styles.link} href={repo.url}>Repo</ExternalLink>
        {repo.homepageUrl && <><span> | </span><FaExternalLinkSquareAlt /><ExternalLink className={styles.link} href={repo.homepageUrl}>Link</ExternalLink></>}
      </div>
    </div>
  )

}