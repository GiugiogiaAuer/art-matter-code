/**
 * i18n.js — Bilingual toggle (EN / 中文)
 * Art Between Matter and Code — Gianpiero Moioli
 * No external dependencies. Works in China (no Google/CDN).
 */

const LANG_KEY = "amcLang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerHTML = lang === "zh"
      ? (el.getAttribute("data-zh") || el.getAttribute("data-en"))
      : el.getAttribute("data-en");
  });

  // Toggle button state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initI18n() {
  const lang = getLang();

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  applyLang(lang);
}

document.addEventListener("DOMContentLoaded", initI18n);
