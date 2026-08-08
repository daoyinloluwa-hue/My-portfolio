import imgLandingPage from "@/imports/landing-page.png";
import imgWhatsApp from "@/imports/Desktop1/1f5966cb2a51fcf0db121c8e875607001e68b36b.png";
import imgImage2 from "@/imports/Desktop1/04a4175d61916ad339d54536c582f1d7d949d717.png";
import imgImage3 from "@/imports/Desktop1/fef05d0c2bf7fdc1ff7225cea865f75dd23ceeb2.png";
import imgImage4 from "@/imports/Desktop1/53fa5ba34e4d7b4a8bba4fc52e5792f0effa82f0.png";
import imgImage5 from "@/imports/Desktop1/5d340730fa39abae7d01409ef7a29f861c78c18b.png";
import img278 from "@/imports/Desktop1/2c483670d684a4c12ad0592c842f2565471dbf66.png";
import { onImgError } from "@/lib/image";

const marqueeImages = [
  imgLandingPage, imgWhatsApp, imgImage2, imgImage3,
  imgImage4, imgImage5, img278,
];

export default function ImageMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];
  return (
    <div className="overflow-hidden w-full h-[180px] sm:h-[280px]">
      <div className="flex gap-[16px] sm:gap-[32px] animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((src, i) => (
          <div key={i} className="relative rounded-[20px] sm:rounded-[32px] shrink-0 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-[#eee] dark:bg-[#26242b]">
            <img
              alt=""
              src={src}
              loading="lazy"
              decoding="async"
              onError={onImgError}
              className="absolute inset-0 w-full h-full object-cover rounded-[20px] sm:rounded-[32px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
