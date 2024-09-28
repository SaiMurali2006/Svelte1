<script lang='ts'>
  // Props: dictionary of items where the key is the name and the value contains sectionID and icon
  export let navItems: { [key: string]: { sectionID: string, icon?: any } } = {};
  import NeumorphicButton from '../src/NeomorphicButton.svelte';
  export let title: string = "Cyberscape";

  // Path to the favicon
  export let favicon: string = "favicon.png";

  // State for the mobile menu
  let isMenuOpen = false;

  // Scroll function
  function scrollToSection(sectionID: string) {
      const section = document.querySelector(sectionID);
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  }

  // Toggle the dropdown menu
  function toggleMenu() {
      isMenuOpen = !isMenuOpen;
  }

  // Close menu when clicking outside
  function handleClickOutside(event: MouseEvent) {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
          isMenuOpen = false;
      }
  }

  // Add event listener on mount to detect clicks outside
  import { onMount, onDestroy } from 'svelte';
  onMount(() => {
      document.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
      document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="bg-white p-4 shadow-neumorphic sticky top-0 z-50">
  <div class="container mx-auto flex justify-between items-center">
      <!-- Favicon / Logo -->
      <div class="flex items-center space-x-4 justify-center">
          <a href="/">
              <img src={favicon} alt="Brand Logo" class="h-12 w-12" />
          </a>
          <!-- Title next to logo -->
          <a href="/">
              <h2 class="text-4xl font-bold text-gray-800 text-center">{title}</h2>
          </a>
      </div>

      <!-- Hamburger Menu Button for small screens -->
      <button 
          class="block md:hidden focus:outline-none text-gray-800" 
          on:click={toggleMenu}
      >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
      </button>

      <!-- Navigation Links for desktop -->
      <ul class="hidden md:flex space-x-6 text-gray-800 ml-auto">
          {#each Object.entries(navItems) as [name, { sectionID, icon }] }
              <li>
                  <div class="flex items-center space-x-2">
                      <NeumorphicButton image={icon} buttonText={name} on:click={() => scrollToSection(sectionID)} />
                  </div>
              </li>
          {/each}
      </ul>
  </div>

  <!-- Dropdown Sliding Mobile Menu -->
  <div class={`fixed inset-x-0 top-full right-0 bg-white shadow-neumorphic overflow-hidden transition-transform duration-300 ease-in-out transform ${
      isMenuOpen ? 'max-h-96 translate-y-0 opacity-100' : 'max-h-0 opacity-0'
  }`}>
      <ul class="p-6 space-y-4 text-gray-800 text-right">
          {#each Object.entries(navItems) as [name, { sectionID, icon }] }
              <li>
                  <div class="flex items-center justify-end space-x-2">
                      <NeumorphicButton image={icon} buttonText={name} on:click={() => { scrollToSection(sectionID); toggleMenu(); }} />
                  </div>
              </li>
          {/each}
      </ul>
  </div>
</nav>

<style>
  /* Neomorphic shadow for white design */
  .shadow-neumorphic {
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), 
                  -4px -4px 10px rgba(255, 255, 255, 0.9);
  }

  /* Add percentage padding to images */
  img {
      padding: 10%; /* Adjust percentage as needed */
  }

  /* Button appearance */
  nav {
      background: linear-gradient(135deg, rgba(0, 0, 255, 0.06), rgba(255, 255, 255, 1));
      backdrop-filter: blur(10px);
  }

  /* Transition for dropdown menu */
  .max-h-0 {
      max-height: 0;
  }

  .max-h-96 {
      max-height: 24rem; /* You can adjust this to control the maximum height */
  }

  /* Sliding effect starts from just below the navbar */
  .translate-y-0 {
      transform: translateY(0%);
  }

  /* Smooth transition with opacity effect */
  .opacity-0 {
      opacity: 0;
  }

  .opacity-100 {
      opacity: 1;
  }

  /* Smooth transition effect */
  .transition-transform {
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
</style>
