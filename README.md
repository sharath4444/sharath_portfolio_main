# 💼 Mankala Sharathchandra - Portfolio Website

Welcome to my **personal portfolio website** built using **HTML, CSS, JavaScript**, and **EmailJS**. This site showcases my background, technical skills, projects, certifications, and allows visitors to contact me directly via email.

> 🔗 [Live Demo](https://sharath4444.github.io/sharath_portfolio_main/)

---

## 📌 Features

- 🧑‍💻 About Me section with dynamic animated role
- 🛠️ Skills and technical stack
- 🧾 Projects with GitHub links
- 🏆 Achievements and Certifications
- 📞 Contact form with real-time EmailJS integration
- 🌙 Light/Dark mode toggle
- 🎨 Animated 3D particle background
- 🔗 Social links to GitHub, LinkedIn, LeetCode, CodeChef, HackerRank

---

## 📁 Tech Stack

| Category        | Technologies Used                        |
|----------------|-------------------------------------------|
| Frontend       | HTML, CSS, JavaScript                     |
| Icons          | Font Awesome                              |
| Email Service  | [EmailJS](https://www.emailjs.com)        |
| Animation      | Particles.js                              |
| Hosting        | GitHub Pages                              |

---


## 📬 Contact Form Setup

This project uses **EmailJS** for the contact form.

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add an **Email Service** (e.g., Gmail)
3. Create a new **Email Template** with variables:
   - `from_name`
   - `from_email`
   - `message`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Replace them in your `script.js` or embedded JS:

```js
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams);
