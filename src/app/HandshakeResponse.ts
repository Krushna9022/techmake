import { Link } from "./Link";
import { Category } from "./Category "

export interface HandshakeResponse {
    bannerLink: Link;
    socialMediaLinks: Link[];
    services: Link[];
    footerLinks: Link[];
    topCategory: Category[];
  }