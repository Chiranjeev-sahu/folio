import Image from "next/image";
// import profile from "./profile.jpg";
import profile from "@/public/profile.jpg";
import { CustomToggle } from "@/components/custom-theme-switcher";
export const InfoCard = () => {
  return (
    <div className="flex justify-between items-start w-full p-4 lg:w-[46%]">
      <div className="bg-background p-2 rounded-xl border border-color [box-shadow:inset_3px_3px_6px_#d1d1d1,inset_-1px_-1px_2px_#d1d1d1] dark:[box-shadow:inset_2px_2px_6px_#222222,inset_-2px_-2px_4px_#121212]">
        <div className="relative w-25 border  aspect-square shadow-[1px_1px_3px_var(--border-color)] rounded-md overflow-hidden">
          <Image
            src={profile}
            alt="Profile picture"
            fill
            className="object-cover"
            quality={80}
            fetchPriority="high"
            placeholder="blur"
            sizes="110px"
          />
        </div>
      </div>
      <CustomToggle />
    </div>
  );
};
