import React from "react";

const Footer = () => {
  return (
    <footer className="mx-10 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center justify-between gap-2 p-6 text-sm text-gray-600 dark:text-gray-400 sm:flex-row">
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
