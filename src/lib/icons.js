import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  Github,
  Globe,
  Layers3,
  LayoutGrid,
  Laptop,
  Mail,
  Menu,
  MonitorSmartphone,
  MoonStar,
  MoveRight,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  SquareUserRound,
  Star,
  TabletSmartphone,
  TimerReset,
  Workflow,
  Wind,
} from "lucide-react";
import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaLinkedinIn,
  FaNodeJs,
  FaPhoneAlt,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const socialIconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  phone: FaPhoneAlt,
};

const skillIconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: SiJavascript,
  react: FaReact,
  express: SiExpress,
  nodejs: FaNodeJs,
  mongodb: SiMongodb,
  github: FaGithub,
  vscode: VscVscode,
  projectsetup: Workflow,
  angular: Layers3,
  responsive: TabletSmartphone,
  layout: LayoutGrid,
  git: FaGitAlt,
  php: Code2,
  mysql: Database,
  api: Globe,
  bootstrap: ShieldCheck,
  laravel: Rocket,
  photoshop: Sparkles,
};

const uiIconMap = {
  menu: Menu,
  close: MoonStar,
  external: ExternalLink,
  arrow: MoveRight,
  star: Star,
  badge: BadgeCheck,
  briefcase: BriefcaseBusiness,
  code: Code2,
  laptop: Laptop,
  monitor: MonitorSmartphone,
  phone: Phone,
  mail: Mail,
  sparkles: Sparkles,
  shield: ShieldCheck,
  globe: Globe,
  timer: TimerReset,
  user: SquareUserRound,
  wind: Wind,
  file: FileCode2,
  rocket: Rocket,
};

export function getSocialIcon(name) {
  return socialIconMap[name] || FaGithub;
}

export function getSkillIcon(name) {
  return skillIconMap[name] || Code2;
}

export function getUiIcon(name) {
  return uiIconMap[name] || Sparkles;
}
