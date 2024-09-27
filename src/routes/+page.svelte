<script lang='ts'>
  import { base } from '$app/paths';
  import Navbar from "../Navbar.svelte";
  import NeomorphicButton from "../NeomorphicButton.svelte";


  const navItems = {
        "Project": { sectionID: '#project', icon: "project.png" },
        "Team": { sectionID: '#team', icon: "team.png" },
        "Contact": { sectionID: '#contact', icon: "contact.png" },
    };
  const favicon = "cyberscape_black.png";

  import Contact from "../Contact.svelte";
  import Project from "../Project.svelte";
  import Team from "../Team.svelte";
</script>


<Navbar navItems={navItems} favicon={favicon} />


<Project></Project>
<Team></Team>
<Contact></Contact>


