<script lang='ts'>
  import Navbar from "../Navbar.svelte";
  import NeomorphicButton from "../NeomorphicButton.svelte";
  const navLinks = {
    'Project': '#project',
    'Team': '#team',
    'Contact': '#contact'
  };
  const favicon = "cyberscape.png";

  import Contact from "../Contact.svelte";
  import Project from "../Project.svelte";
  import Team from "../Team.svelte";
</script>


<Navbar navItems={navLinks} favicon={favicon} />


<Project></Project>
<Team></Team>
<Contact></Contact>


