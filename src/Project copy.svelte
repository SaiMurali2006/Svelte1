<script lang='ts'>
    export let projectName = "Awesome Project";
  </script>
  
  <section id="project" class="pt-[10vh]"> <!-- Responsive padding -->
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-800 mb-4 text-center">{projectName}</h2>
      <p class="text-lg text-gray-600 text-center mb-8">
        This project is a groundbreaking solution to an everyday problem, leveraging modern technologies to deliver exceptional results. It’s designed to be scalable, efficient, and user-friendly.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 bg-white shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
          <p class="text-gray-600">
            A brief explanation of the feature and how it benefits the project.
          </p>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 2</h3>
          <p class="text-gray-600">
            Another key feature that provides enhanced performance and usability.
          </p>
        </div>
        <div class="p-6 bg-white shadow-lg rounded-lg">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Feature 3</h3>
          <p class="text-gray-600">
            This feature showcases the innovative use of technology to solve a specific problem.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- New Section with Image and Neomorphic Style -->
<section id="image-with-text" class="py-16 ">
  <div class="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
    <!-- Image on the left -->
    <div class="w-full lg:w-1/2">
      <div class="relative p-8 bg-gray-200 rounded-[2rem] shadow-neomorph">
        <img
          src="cyberscape_visual_1.png"
          alt="Project Illustration"
          class="w-full rounded-[1rem] object-cover"
        />
      </div>
    </div>

    <!-- Text on the right -->
    <div class="w-full lg:w-1/2">
      <h3 class="text-3xl font-bold text-gray-800 mb-4">Innovative Solution</h3>
      <p class="text-lg text-gray-600 mb-4">
        This section highlights a key aspect of the project, explaining how the innovative solution is addressing a specific need. The design is tailored to provide both form and functionality, making it easier for users to interact with the platform.
      </p>
      <p class="text-lg text-gray-600">
        With a sleek and modern UI, the solution ensures a smooth user experience and enhanced productivity.
      </p>
    </div>
  </div>
</section>

<style>
  /* Custom neomorphic shadow style */
  .shadow-neomorph {
    box-shadow: 8px 8px 16px #d1d9e6,
      -8px -8px 16px #ffffff;
    background: linear-gradient(135deg, rgba(0,0,0,0.06), rgba(255,255,255,0.25));
  }


  button {
  background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(255,255,255,0.25));
  }
</style>
  