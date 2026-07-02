export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1b1b] text-[#e2e2e2] w-full px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-start md:items-center border-t-4 border-[#1b1b1b]">
          <div className="font-['Anton',sans-serif] text-[32px] leading-8 text-[#9700cd] mb-4 md:mb-0">
            ./pahasara
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="font-['JetBrains_Mono',monospace] font-medium text-[12px] leading-4 text-[#e2e2e2] md:text-right self-end md:self-auto">
              ©2026 ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
  );
};