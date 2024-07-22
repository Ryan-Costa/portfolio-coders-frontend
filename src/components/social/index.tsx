import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Social() {
  return (
    <section className="flex items-center justify-center px-8 py-6 !m-0 shadow-shape xl:hidden">
      <div className="flex items-center justify-between w-full xl:max-w-[1440px]">
        <div className="hidden md:block">
          <h4 className="text-subtitle-md font-semibold">Siga-me</h4>
          <p className="text-normal-sm font-normal">
            Navegue pelas minha redes!
          </p>
        </div>
        <div className="w-full md:w-fit flex items-center justify-center md:justify-end gap-20">
          <a
            href="https://github.com/Ryan-Costa"
            target="_blank"
            title="Acessar GitHub de Ryan Costa"
          >
            <GitHubIcon
              sx={{ fontSize: "3.6rem" }}
              className="hover:fill-red-c2"
            />
          </a>
          <a
            href="https://wa.me/5585991623247?text=Olá,%20Ryan!%20Estou%20vindo%20através%20do%20seu%20portfólio!"
            target="_blank"
            title="Entrar em contato com Ryan Costa"
          >
            <WhatsAppIcon
              sx={{ fontSize: "3.6rem" }}
              className="hover:fill-red-c2"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ryancosta122"
            target="_blank"
            title="Acessar Linkedin de Ryan Costa"
          >
            <LinkedInIcon
              sx={{ fontSize: "3.6rem" }}
              className="hover:fill-red-c2"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
