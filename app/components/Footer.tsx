import React from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-20 mx-10">
      <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
        <div>© 2026 ThishanJay</div>

        <div className="flex items-center gap-1">
          <span>Made with</span>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png"
            alt="love"
            width={18}
            height={18}
          />
          <span>using Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
