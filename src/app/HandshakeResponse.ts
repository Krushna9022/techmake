import { Link } from "./model/Link";
import { Category } from "./model/Category "

export interface HandshakeResponse {
    bannerLink: Link;
    socialMediaLinks: Link[];
    services: Link[];
    footerLinks: Link[];
    topCategory: Category[];
  }