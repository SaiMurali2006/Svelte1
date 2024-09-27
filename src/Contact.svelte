<script>
  import Team from "./Team.svelte";

  export let logoSrc = "cyberscape_black.png";
  export let contact = {
    email: 'kontakt@cyberscape.at',
    address: 'HTL Rennweg, Rennweg 89b, 1030 Wien',
  };
</script>

<div class="pt-[10vh]">
  <div id="contact" class="bg-white shadow-neumorphic flex justify-between items-center">
    <div class="flex flex-col w-full md:w-1/2 pl-20 p-6">
      <h2 class="text-xl font-bold mb-2">Kontakt Informationen</h2>
      <p class="text-gray-600 mb-1">Email: <a href="mailto:{contact.email}" class="text-blue-500">{contact.email}</a></p>
      <p class="text-gray-600 mb-1">Adresse: <a href="www.htlrennweg.at">{contact.address}</a></p>

    </div >
    
     <div class="pr-20  p-6">
      <img src="{logoSrc}" alt="Logo" class="w-24 h-auto ml-4" />
    </div>
    
  </div>
</div>

<style>
  /* Neomorphic shadow for white design */
  .shadow-neumorphic {
      box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.1), 
                  -4px -4px 10px rgba(255, 255, 255, 0.9);
      background: linear-gradient(135deg, rgba(0,0,255,0.1), rgba(255,255,255,1));
      backdrop-filter: blur(10px);
  }
</style>
