<script lang='ts'>
    let teamMembers = [
      { name: "Alice Smith", role: "Lead Developer", description: "Alice is the driving force behind the project's technical development." },
      { name: "John Doe", role: "UI/UX Designer", description: "John ensures the design and user experience is seamless and beautiful." },
      { name: "Jane Williams", role: "Project Manager", description: "Jane manages the project and makes sure everything stays on track." }
    ];
  </script>
  
  <section id="team" class="pt-[10vh]"> <!-- Responsive padding -->
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-800 mb-6 text-center">Meet the Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamMembers as member}
          <div class="bg-gray-50 p-6 shadow-lg rounded-lg text-center">
            <h3 class="text-2xl font-semibold text-gray-800">{member.name}</h3>
            <p class="text-lg text-gray-600">{member.role}</p>
            <p class="mt-4 text-gray-600">{member.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  