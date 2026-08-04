import ArrowUpRight from "@/components/ArrowUpRight";

interface PillButtonProps {
  label: string;
  dark?: boolean;
  onClick?: () => void;
}

export default function PillButton({ label, dark = true, onClick }: PillButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group w-fit flex items-center gap-[10px] rounded-[40px] px-[14px] sm:px-[16px] py-[8px] sm:py-[10px] cursor-pointer transition-all duration-300 ${
        dark ? "bg-[#201e21] hover:bg-[#6751a4]" : "bg-[#f3ecec] hover:bg-white"
      }`}
    >
      <span
        className={`font-['Montserrat',sans-serif] font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] whitespace-nowrap ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {label}
      </span>
      <span
        className={`rounded-full p-[8px] sm:p-[10px] flex items-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${
          dark ? "bg-white" : "bg-black"
        }`}
      >
        <ArrowUpRight size={13} color={dark ? "black" : "white"} />
      </span>
    </button>
  );
}
