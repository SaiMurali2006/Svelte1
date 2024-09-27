<script>
    // Props: dictionary of items where the key is the name and the value is the section ID
    export let navItems = {};
    import NeumorphicButton from '../src/NeomorphicButton.svelte';
  
    // Path to the favicon
    export let favicon = "favicon.png";

    function scrollToSection(sectionID) {
        const section = document.querySelector(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }


  </script>
  
  <nav class="bg-white p-4 rounded-xl shadow-neumorphic">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Favicon / Logo -->
        <div>
            <a href="/">
                <img src={favicon} alt="Brand Logo" class="h-8 w-8 shadow-neumorphic rounded-full p-2" />
            </a>
        </div>
  
        <!-- Navigation Links -->
        <ul class="flex space-x-6 text-gray-800">
            {#each Object.entries(navItems) as [name, link]}
                <li >
               
                    <NeumorphicButton buttonText={name} on:click={() => scrollToSection(link)} />
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

  </style>
  