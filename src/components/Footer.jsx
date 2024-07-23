export default function Footer() {
  return (
    <footer className="bg-[#E1E0E070] p-4 ">
      <div className="lg:text-md text-sm text-center text-black hover:text-[#464646]">
        <a
          href="https://www.linkedin.com/in/avellaneda-agustín-tns"
          target="_blank"
        >
          <p>
            Pala Digital || All rights reserved Copyright ©{" "}
            {new Date().getFullYear()} <br className="lg:hidden" />
            <span className="lg:inline hidden"> ||</span> Dev with &hearts; by
            Agustín Avellaneda
          </p>
        </a>
      </div>
    </footer>
  );
}
