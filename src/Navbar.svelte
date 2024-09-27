<script lang='ts'>
    // Props: dictionary of items where the key is the name and the value is the section ID
// Props: dictionary of items where the key is the name and the value contains sectionID and icon
export let navItems: { [key: string]: { sectionID: string, icon?: any } } = {};
import NeumorphicButton from '../src/NeomorphicButton.svelte';
export let title: string = "Cyberscape";

// Path to the favicon
export let favicon: string = "favicon.png";

// Scroll function
function scrollToSection(sectionID: string) {
    const section = document.querySelector(sectionID);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}



</script>
  
  <nav class="bg-white p-4 shadow-neumorphic sticky top-0 z-50 ">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Favicon / Logo -->

        <div class="flex items-center space-x-4 justify-center">
            <a href="/">
              <img src={favicon} alt="Brand Logo" class="h-12 w-12" />
            </a>
            <!-- Title next to logo -->
            <a href="/">
            <h2 class="text-4xl font-bold text-gray-800 text-center" >{title}</h2> <!-- Update 'Brand Title' with your desired text -->
            </a>
          </div>
  
        <!-- Navigation Links -->
        <ul class="flex space-x-6 text-gray-800">
            {#each Object.entries(navItems) as [name, { sectionID, icon }]}
                
                    
                    <div class="flex items-center space-x-2">
                        <NeumorphicButton image= {icon} buttonText={name} on:click={() => scrollToSection(sectionID)} />
                    </div>
                    
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
    background: linear-gradient(135deg, rgba(0,0,255,0.06), rgba(255,255,255,1));
    backdrop-filter: blur(10px);
    }

   

  </style>
  