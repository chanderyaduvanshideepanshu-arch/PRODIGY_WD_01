  /* === Mobile menu toggle === */
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
    burger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      burger.classList.toggle("active");
      burger.setAttribute("aria-expanded", open);
    });

    /* === Theme toggle === */
    const themeBtn = document.getElementById("themeToggle");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeBtn.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
    });

    /* === Intersection Observer for scroll‑spy & nav color changing === */
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main > section");
    const navbar = document.getElementById("navbar");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // highlight nav link
            links.forEach((a) =>
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + entry.target.id
              )
            );
            // change navbar bg to section color if provided
            const c = entry.target.getAttribute("data-nav-color");
            if (c) {
              navbar.style.backgroundColor = c + "80"; // 50% overlay
            } else {
              navbar.style.backgroundColor = "";
            }
          }
        });
      },
      { threshold: [0.5] }
    );
    sections.forEach((sec) => io.observe(sec));