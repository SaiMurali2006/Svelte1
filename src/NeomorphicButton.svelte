<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  // https://css-tricks.com/neumorphism-and-css/#:~:text=Creating%20a%20neumorphic%20interface%20with,types%20of%20effects%20and%20variations.
  // Define props for the button text and optional image
  export let buttonText = "Click Me";
  export let image: string | null = null; // The image URL can be null if no image is passed

  // State to track button press
  let isPressed = false;

  // Create an event dispatcher to forward the click event to the parent
  const dispatch = createEventDispatcher();
</script>

<button 
  class="bg-white font-bold text-gray-700 px-6 py-3 rounded-lg shadow-neumorph transition-all duration-200 ease-in-out flex items-center space-x-2"
  on:mousedown={() => (isPressed = true)}
  on:mouseup={() => (isPressed = false)}
  on:mouseleave={() => (isPressed = false)}
  on:click={() => dispatch('click')}>

  {#if image}
      <img src={image} alt="Button Icon" class="h-6 w-6 object-contain" />
  {/if}
  
  <span>{buttonText}</span>
</button>

<style>
  /* Custom shadows for Neumorphism */
  .shadow-neumorph {
      box-shadow: 8px 8px 16px #d1d9e6,
      -8px -8px 16px #ffffff;
  }

  /* Pressing animation */
  button:active {
      transform: scale(0.95);
      box-shadow: inset 8px 8px 16px #d1d9e6,
                  inset -8px -8px 16px #ffffff;
  }

  button {
  background: linear-gradient(135deg, rgba(0,0,0,0.06), rgba(255,255,255,0.25));
  }
</style>
