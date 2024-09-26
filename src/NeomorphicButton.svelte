<script>
    // Define a prop for the button text
    export let buttonText = "Click Me";
    // State to track button press
    let isPressed = false;
    

</script>
  
<button class="bg-white text-gray-700 px-6 py-3 rounded-lg shadow-neumorph transition-all duration-200 ease-in-out"
on:mousedown={() => (isPressed = true)}
on:mouseup={() => (isPressed = false)}
on:mouseleave={() => (isPressed = false)}>
{buttonText}
</button>
  
<style>
/* Custom shadows for Neumorphism */
.shadow-neumorph {
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
}

/* Pressing animation */
button:active {
    transform: scale(0.95);
    box-shadow: inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff;
}


</style>