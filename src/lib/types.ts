import { navLinks } from '@/lib/data'

export type SectionName = (typeof navLinks)[number]['name']

export type Project = {
  video: string
  title: string
  description: string
  technologies: string[]
  links: {
    preview: string
    github: string
    githubApi: string
  }
}

export type Experience = {
  title: string
  company: string
  description: string
  period: string
  technologies: string[]
}

export type Certification = {
  ctitle: string
  ccompany: string
  cdescription: string
  cperiod: string
  ctechnologies: string[]
}

export type Archivement = {
  atitle: string
  adescription: string
  aperiod: string
  aexp: string[]
}


export type NavName = 'Home' | 'About' | 'Experience' | 'Projects' | 'Certification'|'Contact'

export type NavLink = {
  name: NavName
  href: string
}

export type Skill = {
  name: string
  icon: React.ReactNode
}

