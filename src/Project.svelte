<script lang='ts'>
  export let projectName = "Cyberscape - Die ideale SIEM-Lösung";
</script>

<!-- New Section with Image and Neomorphic Style -->
<section id="project" class="pt-[10vh] md:pt-[10vh]">
  <div class="pb-[3vh]">
    <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">{projectName}</h2>
    <p class="text-base sm:text-lg font-semibold text-gray-600 text-center mb-6 sm:mb-8">
      Die perfekte SIEM-Lösung für kleine Unternehmen und Bildungseinrichtungen – Höchste Sicherheit, minimaler Aufwand!
    </p>
  </div>

  <div class="container mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-4 md:px-6">
    <!-- Image on the left -->
    <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
      <div class="relative p-6 md:p-8 bg-gray-200 rounded-[1.5rem] md:rounded-[2rem] shadow-neomorph">
        <img
          src="cyberscape_visual_1.png"
          alt="Project Illustration"
          class="w-full rounded-[1rem] object-cover"
        />
      </div>
    </div>

    <!-- Text on the right -->
    <div class="w-full lg:w-1/2">
      <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Problem</h3>
      <p class="text-base sm:text-lg font-semibold text-gray-600 mb-4">
        Die IT-Infrastruktur ist für so gut wie jede Organisation einer der wichtigsten Bestandteile. Mit zunehmender Mitarbeiterzahl wächst das Netzwerk und es wird immer schwieriger, den Netzwerkverkehr zu verfolgen. Bei großen Netzen können sogar ausgebildete Administratoren leicht den Überblick verlieren. Genau hier kommt unsere Lösung ins Spiel – unser Projekt soll das Geschehen im Netzwerk erfassen, analysieren und auf übersichtliche Weise zusammenfassen.
      </p>
      <p class="text-base sm:text-lg font-semibold text-gray-600">
        Mit einer schlanken und modernen Benutzeroberfläche sorgt unsere Lösung für eine reibungslose Benutzererfahrung und erhöhte Produktivität.
      </p>
    </div>
  </div>


  <div class="pt-[6vh] container mx-auto  lg:flex-row items-center gap-8 md:gap-12 px-4 md:px-6">
    <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4" >Innovative Lösung</h3>
    <p class="text-base sm:text-lg font-semibold text-gray-600 mb-6 sm:mb-8">
      Wir entwickeln ein eigenes SIEM-System, das die essenziellsten Funktionen abdeckt. Die verarbeiteten Daten und Statistiken werden anschließend auf einer benutzerfreundlichen Website in Form von Diagrammen und visuellen Darstellungen präsentiert. So können sicherheitsrelevante Informationen leicht verständlich und übersichtlich abgerufen werden.
    </p>
    <p class="text-base sm:text-lg font-semibold text-gray-600 mb-6 sm:mb-8">
      Daten, die unser SIEM-System verarbeitet, stammen aus verschiedenen Quellen im Netzwerk. Die Visualisierung auf der Website ermöglicht es, die Sicherheitslage des Netzwerks auf einen Blick zu erfassen, potenzielle Bedrohungen zu identifizieren und darauf basierend schnell und zielgerichtet Maßnahmen zu ergreifen.    </p>
  </div>
</section>

<style>
  /* Custom neomorphic shadow style */
  .shadow-neomorph {
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff;
    background: linear-gradient(135deg, rgba(0, 0, 255, 0.1), rgba(255, 255, 255, 0.95));
    backdrop-filter: blur(10px);
  }
</style>
