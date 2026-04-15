import { Button } from "./button";

export default function PrimaryButton({
  children,
  varient = "primary",
  asChild
}: {
  children: React.ReactNode;
  varient?: "primary" | "outline";
  asChild?: boolean
}) {
  if (varient === "primary") {
    return (
      <Button asChild={asChild} className="bg-primary hover:bg-[#dede8a] text-black border-2 border-[#2a2a2a] rounded-2xl px-8 py-5 text-base font-medium shadow-[4px_4px_0px_#2a2a2a] hover:shadow-[2px_2px_0px_#2a2a2a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150">
        {children}
      </Button>
    );
  }

  if (varient === "outline") {
    return (
      <Button
        variant="outline"
        className="bg-transparent hover:bg-[#e8e8a0]/20 text-[#2a2a2a] border-2 border-[#2a2a2a] rounded-2xl px-8 py-5 text-base font-medium shadow-[4px_4px_0px_#2a2a2a] hover:shadow-[2px_2px_0px_#2a2a2a] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
      >
        {children}
      </Button>
    );
  }
}
