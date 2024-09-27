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
  