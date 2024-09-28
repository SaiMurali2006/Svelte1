<script lang="ts">
    export let name: string;
    export let role: string;
    export let description: string;
    export let image: string;  // Pass image as prop
  </script>
  
  <div class="bg-gray-50 p-6 rounded-lg text-center shadow-neumorph">
    <h3 class="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
    <!-- Image for the team member without circular styling -->
    <img class="w-48 h-64 mx-auto mb-4 object-cover" src={image} alt={name} />
    <p class="text-lg text-gray-600 font-semibold">{role}</p>
    <p class="mt-4 text-gray-600 font-semibold">{description}</p>
  </div>




  <style>
    /* Custom shadows for Neumorphism */
    .shadow-neumorph {
        box-shadow: 8px 8px 16px #d1d9e6,
        -8px -8px 16px #ffffff;
        background: linear-gradient(135deg, rgba(0,0,255,0.06), rgba(255,255,255,1));
        
        
    }

  </style>
  