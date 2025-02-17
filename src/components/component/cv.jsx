const DownloadCV = ({ isSpanish }) => {
  return (
    <a
      href={isSpanish ? 
        "https://drive.google.com/uc?export=download&id=1WI18mx_rhQut61gB66g9nAIBDSI2ersA" :
        "https://drive.google.com/uc?export=download&id=1a5Evhr7SlIlkqeVkMyZ3GsEz29DfvW3R"
      }
      download="CV.pdf"
      className="inline-flex h-10 items-center justify-center rounded-md bg-[#4b6a9b] px-6 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#4b6a9b] to-[#294a6b] shadow-md hover:from-[#0b2845] hover:to-[#0b2845]"
    >
      {isSpanish ? "Descargar CV" : "Download CV"}
    </a>
  );
};

export default DownloadCV;