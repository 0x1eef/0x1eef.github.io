;(function() {
  if (window.devicePixelRatio >= 1) {
    document.body.classList.add("zoom")
  }
  window.addEventListener("resize", () => {
    if (window.devicePixelRatio >= 1) {
      document.body.classList.add("zoom")
    } else {
      document.body.classList.remove("zoom")
    }
  })
})()

;(function() {
  const nodes = document.querySelectorAll("details")
  nodes.forEach((node) => {
    node.addEventListener("toggle", () => {
      if (node.open) {
        node.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })
})()

;(function() {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("hidden")
  })
})()

;(function() {
  const themeToggle = document.getElementById('theme-toggle')
  const sunIcon = document.querySelector('.theme-icon-sun')
  const moonIcon = document.querySelector('.theme-icon-moon')
  const body = document.body

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      sunIcon.style.opacity = '0'
      sunIcon.style.transform = 'scale(0.8)'
      moonIcon.style.opacity = '1'
      moonIcon.style.transform = 'scale(1)'
    } else {
      body.classList.remove('dark-mode')
      sunIcon.style.opacity = '1'
      sunIcon.style.transform = 'scale(1)'
      moonIcon.style.opacity = '0'
      moonIcon.style.transform = 'scale(0.8)'
    }
    localStorage.setItem('theme', theme)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  });

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  });
})()