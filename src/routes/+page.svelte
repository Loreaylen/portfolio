<script>
  import Menu from '../lib/components/Menu.svelte'
  import AboutMe from '../lib/components/AboutMe.svelte'
  import WorkExperience from '../lib/components/WorkExperience.svelte'
  import Proyects from '../lib/components/Proyects.svelte'
  import Contact from '../lib/components/Contact.svelte'
  import Icon from '@iconify/svelte';
  import ColorModeLogo from '../lib/components/ColorModeLogo.svelte'

  let showNavbar = false
  let open = true

  const toggleMenu = () => {
    return showNavbar = !showNavbar
  }

  const toggleDarkMode = () => {
    return open = !open
  }
</script>

<style>
  
  :global(.darkMode) {
    height: auto;
    width: 130px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: 3px;
  }

  :global(.menu){
    height: 100%;
    width: 100%;
  }

  div {
    width: 120px;
    border: 1px solid pink;
    padding: 10px;
  }

  header {
    height: auto;
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    position: relative;
  }

  @media (width <= 950px) {
    button {
      display: block;
      height: 50px;
      width: 50px;
    }
  }
</style>

<body>
  
  <header>
    <button on:click={toggleMenu}>
      <Icon class="menu" icon="simple-line-icons:menu" inline={false} />
    </button>
    <button class="darkMode" on:click={toggleDarkMode}>
      <ColorModeLogo {open}/>
      <span>Modo {open ? "oscuro" : "claro"}</span>
    </button>
    <div>Idioma</div>
    <Menu {showNavbar}/>
  </header>
  <main>
    <AboutMe id={'aboutMe'}/>
    <WorkExperience id={'workExperience'}/>
    <Proyects id={'proyects'}/>
    <Contact id={'contact'}/>
  </main> 
</body>


