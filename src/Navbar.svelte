<script>
  // Props: dictionary of items where the key is the name and the value is the URL
  export let navItems = {};

  // Path to the favicon
  export let favicon = "favicon.png";
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
              <li class="shadow-neumorphic rounded-lg p-2">
                  <a href={link} class="hover:text-gray-600">{name}</a>
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
</style>
