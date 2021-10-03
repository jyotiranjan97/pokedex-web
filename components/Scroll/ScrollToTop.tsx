import { useEffect, useState } from "react";
import Image from "next/image";
import scroll from "../../public/Scroll.svg";

export default function ScrollToTop() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed text-white text-sm bottom-3 bg-red-600 rounded-lg h-12 hover:bg-red-800 right-5 cursor-pointer">
      {isButtonVisible && (
        <div onClick={scrollToTop}>
          <Image src={scroll} alt="Top" height={40} width={50} />
        </div>
      )}
    </div>
  );
}
