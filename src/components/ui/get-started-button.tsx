import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton({ name }: { name: string }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Utkarsh Singhal.pdf"; // Path to the PDF in the public folder
    link.download = "Utkarsh Singhal.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="group relative overflow-hidden bg-green-400 cursor-pointer"
      size="lg"
      onClick={handleDownload}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {name}
      </span>
      <i className="absolute right-0 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black-500">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}
