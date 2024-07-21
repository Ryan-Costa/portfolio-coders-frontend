import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Social() {
  return (
    <section className="flex items-center justify-between px-8 py-6 !m-0 shadow-shape">
      <a href="https://github.com/Ryan-Costa" target="_blank">
        <GitHubIcon sx={{ fontSize: "3.6rem" }} />
      </a>
      <a
        href="https://wa.me/5585991623247?text=Olá,%20Ryan!%20Estou%20vindo%20através%20do%20seu%20portfólio!"
        target="_blank"
      >
        <WhatsAppIcon sx={{ fontSize: "3.6rem" }} />
      </a>
      <a href="https://www.linkedin.com/in/ryancosta122" target="_blank">
        <LinkedInIcon sx={{ fontSize: "3.6rem" }} />
      </a>
    </section>
  );
}
