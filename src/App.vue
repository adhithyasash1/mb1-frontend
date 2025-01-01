<template>

  <div :class="{ 'dark': isDarkMode }" class="one">
    <!-- Header -->
      <h1 class="two">
        Hi, I'm Sashi Adhithya
      </h1>
    <p class="jkl">
      A data scientist passionate about AI and DevOps exploring exciting stuff in it.
    </p>
      <button
          @click="toggleDarkMode"
          class="three"
      >
        <span>Dark Mode</span>
      </button>

    <!-- Main Content -->
    <div class="four">
      <!-- Left Section -->
      <div class="five">
        <Intro />
        <Skills />
      </div>
      <div class="six">
        <Resume />
        <Contact />
      </div>
      <aside>
        <br><Chatbot /></br>
      </aside>
    </div>
  </div>

</template>
<style>
/* Utility classes are handled by Tailwind, but here’s additional custom styling if needed */

/* General Styles for Dark Mode */
body.dark {
  background-color: #1a202c; /* Dark background */
  color: #f7fafc;           /* Light text */
}

.one {
}

.two {
  text-align: center;
}

.jkl {
  text-align: center;
}

.three {
  top: 11%;
  left: 55%;
  width: 120px;
  height: 50px;
  position: absolute;
  z-index: 2;
  background: linear-gradient(135deg, #ff6f00, #ff3d00); /* Gradient for a vibrant feel */
  border-radius: 30px; /* Rounded corners for a modern touch */
  color: white;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
  transition: all 0.3s ease-in-out; /* Smooth transition */
}

.three:hover {
  transform: scale(1.05); /* Slight hover zoom for interactive feel */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Darker shadow on hover */
  background: linear-gradient(135deg, #1d883f, #00ff19); /* Reverse the gradient on hover */
}

.three:active {
  transform: scale(0.98); /* Slight shrink on click */
}

.three::before {
  content: "🌙";
  margin-right: 10px;
}

.three span {
  font-size: 0.77rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}


.six {
  position: absolute;
  top: 250px;
  right: 250px;
  font-size: 18px;
}

/* Hero Section */
header {
  background: linear-gradient(to right, #4299e1, #805ad5); /* Blue to purple gradient */
  text-align: center;
  color: white;
  padding: 4rem 0; /* Vertical padding */
}

header h1 {
  font-size: 3rem; /* Large heading */
  font-weight: 700;
  margin-bottom: 1rem; /* Spacing below heading */
}

header p {
  font-size: 1.25rem;
  font-weight: 300; /* Light subtext */
  margin-bottom: 2rem; /* Spacing below subtext */
}

header button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 9999px; /* Fully rounded */
  transition: background-color 0.3s, color 0.3s; /* Smooth hover effect */
}

header button:hover {
  background-color: #f7fafc; /* Slight hover effect */
  color: #2d3748;           /* Dark text for light background */
}

/* Main Sections */
main {
  padding: 4rem 1.5rem; /* Overall spacing for sections */
}

section {
  background-color: #ffffff; /* Default light mode */
  padding: 2rem;
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: background-color 0.3s, box-shadow 0.3s;
}

body.dark section {
  background-color: #2d3748; /* Dark mode card background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Stronger shadow for dark mode */
}

/* Spacing Between Sections */
section + section {
  margin-top: 2rem; /* Add spacing between sections */
}

/* Grid Layout for Responsiveness (if needed) */
@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid layout */
    gap: 2rem; /* Space between items */
  }

  section {
    margin: 0; /* Remove default spacing in grid layout */
  }
}
</style>
<script>
import { ref } from 'vue';
import Intro from './components/Intro.vue';
import Skills from './components/Skills.vue';
import Resume from './components/Resume.vue';
import Contact from './components/Contact.vue';
import Chatbot from './components/Chatbot.vue';

export default {
  components: {
    Intro,
    Skills,
    Resume,
    Contact,
    Chatbot,
  },
  setup() {
    const isDarkMode = ref(localStorage.getItem('dark-mode') === 'true');

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem('dark-mode', isDarkMode.value);
      document.body.classList.toggle('dark', isDarkMode.value);
    };

    // Initialize dark mode based on localStorage setting
    if (isDarkMode.value) {
      document.body.classList.add('dark');
    }

    return { isDarkMode, toggleDarkMode };
  },
};
</script>