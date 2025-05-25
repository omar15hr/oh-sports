import clsx from "clsx";
import { InstagramIcon, TiktokIcon, WhatsAppIcon, YoutubeIcon } from "../Icons";
import { FooterColumn } from "./FooterColumn";


const socialLinks = [
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "#",
    bgColor: "hover:bg-purple-800",
  },
  {
    name: "TikTok",
    icon: <TiktokIcon />,
    href: "#",
    bgColor: "hover:bg-black",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    href: "#",
    bgColor: "hover:bg-green-600",
  },
  {
    name: "YouTube",
    icon: <YoutubeIcon />,
    href: "#",
    bgColor: "hover:bg-red-600",
  },
];

const shopLinks = [
  { name: "Hombre", href: "#" },
  { name: "Mujeres", href: "#" },
  { name: "Niños", href: "#" },
  { name: "Accesorios", href: "#" },
  { name: "Nuevos productos", href: "#" },
  { name: "Ofertas", href: "#" },
];

const helpLinks = [
  { name: "Servicio al cliente", href: "#" },
  { name: "Mi cuenta", href: "#" },
  { name: "Encuentra la tienda", href: "#" },
  { name: "Guía de tallas", href: "#" },
  { name: "Envíos y devoluciones", href: "#" },
  { name: "Preguntas frecuentes", href: "#" },
];

const aboutLinks = [
  { name: "Nuestra historia", href: "#" },
  { name: "Carreras", href: "#" },
  { name: "Responsabilidad corporativa", href: "#" },
  { name: "Inversores", href: "#" },
  { name: "Prensa", href: "#" },
  { name: "Contáctanos", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-4xl font-bold mb-6 font-lunabar">OH</h3>
            <p className="text-gray-400 mb-6">
              Vestimos atletas y personas con diseños de calidad.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon, bgColor }) => (
                <a
                  href={href}
                  className={clsx(
                    "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 cursor-pointer",
                    bgColor
                  )}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Tienda" links={shopLinks} />
          <FooterColumn title="Ayuda" links={helpLinks} />
          <FooterColumn title="Acerca de" links={aboutLinks} />
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OH Sports. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}