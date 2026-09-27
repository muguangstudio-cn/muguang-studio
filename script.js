(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开导航菜单");
    navigation.classList.remove("open");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "打开导航菜单" : "关闭导航菜单");
    navigation?.classList.toggle("open", !isOpen);
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.2, 0.5, 0.8] });
    sections.forEach((section) => observer.observe(section));
  }

  const copyButton = document.querySelector("[data-copy-qq]");
  const copyStatus = document.querySelector("#copy-status");
  copyButton?.addEventListener("click", async () => {
    const qq = copyButton.dataset.copyQq;
    try {
      await navigator.clipboard.writeText(qq);
      if (copyStatus) copyStatus.textContent = "QQ 号已复制，可以粘贴到 QQ 搜索。";
    } catch {
      const temporary = document.createElement("textarea");
      temporary.value = qq;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.append(temporary);
      temporary.select();
      const copied = document.execCommand("copy");
      temporary.remove();
      if (copyStatus) copyStatus.textContent = copied
        ? "QQ 号已复制，可以粘贴到 QQ 搜索。"
        : `QQ 号：${qq}`;
    }
    window.setTimeout(() => {
      if (copyStatus) copyStatus.textContent = "";
    }, 4500);
  });
})();
