(function () {
  const searchInput = document.querySelector("#guideSearch");
  const sections = Array.from(document.querySelectorAll(".searchable"));
  const noResults = document.querySelector("#noResults");
  const toast = document.querySelector(".toast");
  const navLinks = Array.from(document.querySelectorAll(".toc a"));

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 1600);
  }

  function normalize(value) {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function filterSections() {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    sections.forEach((section) => {
      const haystack = normalize(`${section.textContent} ${section.dataset.search || ""}`);
      const visible = !query || haystack.includes(query);
      section.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    noResults.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterSections);

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const block = button.parentElement.querySelector("pre");
      if (!block) return;

      try {
        await navigator.clipboard.writeText(block.innerText.trim());
        showToast("コピーしました");
      } catch (error) {
        showToast("コピーできませんでした");
      }
    });
  });

  document.querySelectorAll("[data-progress]").forEach((checkbox) => {
    const key = `claude-guide:${checkbox.dataset.progress}`;
    checkbox.checked = localStorage.getItem(key) === "1";
    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked ? "1" : "0");
    });
  });

  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-20% 0px -68% 0px", threshold: [0.1, 0.35, 0.6] }
  );

  observedSections.forEach((section) => observer.observe(section));
})();
