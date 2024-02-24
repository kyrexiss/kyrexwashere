import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: '',
    description: '',
    link: '',
    iconURL: '',
  },
  {
    name: '',
    description: '',
    link: '',
    iconURL: '',
  },
];

export const githubUsername = 'kyrexiss';
export const discordId = '767433426742542396';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/kyrexrxd',
    iconURL: BsInstagram,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Typescript',
    iconURL: SiTypescript,
  },
  {
    name: 'Next.js',
    iconURL: TbBrandNextjs,
  },
  {
    name: 'Tailwindcss',
    iconURL: SiTailwindcss,
  },
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
  {
    name: 'Firebase',
    iconURL: SiFirebase,
  },
];
