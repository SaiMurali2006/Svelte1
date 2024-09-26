<script>
  import Navbar from "../Navbar.svelte";
    import NeomorphicButton from "../NeomorphicButton.svelte";
    const navLinks = {
      Projekt: "/projekt",
      Team: "/team",
      Kontakt: "/kontakt",
    };
    const favicon = "cyberscape.png";
</script>



<Navbar navItems={navLinks} favicon={favicon} />
<br>
<br>
<NeomorphicButton buttonText={"BUTTON CLICK ME"} />


