<script lang="ts">
  import TeamMember from './TeamMember.svelte';  // Import the new component

  // Updated teamMembers array to include images
  let teamMembers = [
    {
      name: "Saiadithya Murali",
      role: "PMA - SIEM Entwickler - GOTT",
      description: "Zustaendig fuer die Entwicklung des SIEMs und fuer die Erstellung dieser Website",
      image: "saiadithya.jpg"  // Add the image path here
    },
    {
      name: "Ben Brendel",
      role: "PMA - Topologie Ersteller ",
      description: "Zustaendig fuer die Erstellung der Topologie sowie die Auseinandersetzung mit FortiGates durch die FCP-Zertifizierung",
      image: "ben.jpg"
    },
    {
      name: "Manuel Gsellmann",
      role: "PLstv - Website Entwickler",
      description: "Zuestaendig fuer das Aufsetzen und Absichern eines Webservers sowie Entwicklung einer darauf laufenden dynamischen Website",
      image: "manuel.jpg"
    },
    {
      name: "Linus Fruehstueck",
      role: "PL - Website Entwickler",
      description: "Zuestaendig fuer das Aufsetzen und Absichern eines Webservers sowie Entwicklung einer darauf laufenden dynamischen Website",
      image: "linus.jpg"
    },
    {
      name: "Mehmet Balikci",
      role: "PMA - Datenbank Entwickler",
      description: "Zuestaendig fuer das Aufsetzen und Warten eines Datenbank Clusters",
      image: "mehmet.jpg"
    }
  ];
</script>


<section id="team" class="pt-[10vh]"> <!-- Responsive padding -->
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-gray-800 mb-6">Das Projektteam</h2>

    <!-- Create a grid layout with 3 items in the top row and 2 in the second row -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
      <!-- First 3 team members will be in the top row -->
      {#each teamMembers.slice(0, 3) as member}
        <TeamMember
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
        />
      {/each}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-8">
      <!-- The last 2 team members will be in the bottom row -->
      {#each teamMembers.slice(3) as member}
        <TeamMember
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
        />
      {/each}
    </div>
  </div>
</section>