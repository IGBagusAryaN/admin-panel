const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleBtnMobile = document.getElementById("toggleBtnMobile");

const logoText = document.getElementById("logoText");
const arrow = document.getElementById("arrow");

toggleBtnMobile.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("translate-x-0");

  if (!sidebar.classList.contains("-translate-x-full")) {
    sidebar.classList.add("w-64");
    sidebar.classList.remove("w-16");

    setTimeout(() => {
      texts.forEach((t) => {
        t.classList.remove("hidden", "-translate-x-2");
        t.classList.add("opacity-100", "translate-x-0");
      });
      logoText.classList.remove("hidden", "-translate-x-2");
      logoText.classList.add("opacity-100", "translate-x-0");
    }, 200);
  }
});

// --- MOBILE CLOSE BUTTON (✕) ---
closeBtnMobile.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.add("-translate-x-full");
  sidebar.classList.remove("translate-x-0");

  texts.forEach((t) => {
    t.classList.add("hidden");
    t.classList.remove("opacity-100", "translate-x-0");
  });
  logoText.classList.add("hidden");
  logoText.classList.remove("opacity-100", "translate-x-0");

  sidebar.classList.remove("w-64");
  sidebar.classList.add("w-16");
});
// --- DESKTOP EXPAND/COLLAPSE ---
let expanded = false;
toggleBtn.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    sidebar.classList.replace("w-16", "w-48"); // lebih panjang (w-64)

    toggleBtn.classList.replace("w-10", "w-[90%]");
    toggleBtn.classList.replace("rounded-lg", "rounded-md");
    arrow.classList.add("rotate-180");

    setTimeout(() => {
      texts.forEach((t) => {
        t.classList.remove("hidden", "-translate-x-2");
        t.classList.add("opacity-100", "translate-x-0");
      });
      logoText.classList.remove("hidden", "-translate-x-2");
      logoText.classList.add("opacity-100", "translate-x-0");
    }, 200);
  } else {
    texts.forEach((t) => {
      t.classList.remove("opacity-100", "translate-x-0");
      t.classList.add("-translate-x-2");
    });
    logoText.classList.remove("opacity-100", "translate-x-0");
    logoText.classList.add("-translate-x-2");

    toggleBtn.classList.replace("w-[90%]", "w-10");
    toggleBtn.classList.replace("rounded-md", "rounded-lg");
    arrow.classList.remove("rotate-180");

    setTimeout(() => {
      texts.forEach((t) => t.classList.add("hidden"));
      logoText.classList.add("hidden");
      sidebar.classList.replace("w-48", "w-16"); // kembali kecil
    }, 200);
  }
});

// --- RESET JIKA BALIK KE DESKTOP ---
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    // reset biar default desktop (collapsed)
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("-translate-x-full");
    sidebar.classList.remove("w-64");
    sidebar.classList.add("w-16");

    texts.forEach((t) => t.classList.add("hidden", "-translate-x-2"));
    logoText.classList.add("hidden", "-translate-x-2");

    expanded = false;
    arrow.classList.remove("rotate-180");
    toggleBtn.classList.replace("w-[90%]", "w-10");
    toggleBtn.classList.replace("rounded-md", "rounded-lg");
  }
});

const sidebarMenu = document.getElementById("sidebarMenu");

// daftar menu sidebar
const menuItems = [
  {
    label: "Dashboard",
    href: "index.html",
    active: true,
    icon: `<path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 
      3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 
      1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 
      1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 
      1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 
      3 0 0 1 3 3V18a3 3 0 0 
      1-3 3H6a3 3 0 0 
      1-3-3v-2.25Zm9.75 0a3 3 0 0 
      1 3-3H18a3 3 0 0 
      1 3 3V18a3 3 0 0 
      1-3 3h-2.25a3 3 0 0 
      1-3-3v-2.25Z" clip-rule="evenodd"/>`,
  },
  {
    label: "User",
    href: "#",
    icon: `<path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 
      9 0 4.5 4.5 0 0 1-9 0ZM3.751 
      20.105a8.25 8.25 0 0 1 16.498 0 .75.75 
      0 0 1-.437.695A18.683 18.683 
      0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 
      0 0 1-.437-.695Z" clip-rule="evenodd"/>`,
  },
  {
    label: "Service",
    href: "#",
    icon: `<path d="M5.566 4.657A4.505 4.505 0 0 
      1 6.75 4.5h10.5c.41 0 .806.055 
      1.183.157A3 3 0 0 0 15.75 
      3h-7.5a3 3 0 0 0-2.684 
      1.657ZM2.25 12a3 3 0 0 
      1 3-3h13.5a3 3 0 0 1 3 
      3v6a3 3 0 0 1-3 3H5.25a3 
      3 0 0 1-3-3v-6ZM5.25 
      7.5c-.41 0-.806.055-1.184.157A3 
      3 0 0 1 6.75 6h10.5a3 3 
      0 0 1 2.683 1.657A4.505 4.505 
      0 0 0 18.75 7.5H5.25Z"/>`,
  },
  {
    label: "Billing",
    href: "#",
    icon: `<path d="M12 7.5a2.25 2.25 0 1 0 
      0 4.5 2.25 2.25 0 0 0 0-4.5Z"/>
      <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 
      2.34 3 3.375 3h17.25c1.035 0 
      1.875.84 1.875 1.875v9.75c0 
      1.036-.84 1.875-1.875 
      1.875H3.375A1.875 1.875 0 0 
      1 1.5 14.625v-9.75Z" clip-rule="evenodd"/>`,
  },
  {
    label: "Setting",
    href: "#",
    icon: `<path fill-rule="evenodd" d="M12 6.75a5.25 5.25 
      0 0 1 6.775-5.025.75.75 0 0 
      1 .313 1.248l-3.32 3.319c.063.475.276.934.641 
      1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 
      0 0 1 1.248.313 5.25 5.25 0 0 
      1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 
      21.3A3.298 3.298 0 1 1 2.7 
      16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 
      5.342 0 0 1 12 6.75Z" clip-rule="evenodd"/>`,
  },
];

// render menu
menuItems.forEach((item) => {
  const link = document.createElement("a");
  link.href = item.href;
  link.title = item.label;
  link.className = `flex items-center py-2 px-9 lg:px-3 rounded-xl transition-all ${
    item.active
      ? "bg-[#69A6FF] text-white"
      : "text-gray-400 hover:text-[#69A6FF]"
  }`;

  link.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" class="size-6">
      ${item.icon}
    </svg>
    <span class="sidebar-text ml-3 pr-1 hidden opacity-0 -translate-x-2 transition-all duration-300">
      ${item.label}
    </span>
  `;
  sidebarMenu.appendChild(link);
});

const texts = document.querySelectorAll(".sidebar-text");