<script>
  import { browser } from '$app/environment';
  import Menu from '../lib/components/Menu.svelte'
  import AboutMe from '../lib/components/AboutMe.svelte'
  import WorkExperience from '../lib/components/WorkExperience.svelte'
  import Proyects from '../lib/components/Proyects.svelte'
  import Contact from '../lib/components/Contact.svelte'
  import Icon from '@iconify/svelte';
  import ColorModeLogo from '../lib/components/ColorModeLogo.svelte'
  import CompanyCube from '../lib/components/CompanyCube.svelte'


  let width;
  let open = true
  let language = "EN"
  let showNavbar = false

  if(browser){
    width = window.innerWidth;
  }

  const handleResize = () => {
  width = window.innerWidth
  showNavbar = width >= 950
}


  const toggleMenu = () => {
    return showNavbar = !showNavbar
  }

  const toggleDarkMode = () => {
    return open = !open
  }

  const toggleLanguage = () => {
    return language = (language == "ES" ? "EN" :"ES")
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

  :global(.burguer){
    display: none;
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
    :global(.burguer) {
      display: block;
      height: 50px;
      width: 50px;
    }
  }
</style>
<svelte:window on:resize={handleResize}/>
<body>
  
  <header>
    <button on:click={toggleMenu}>
      <Icon class="burguer" icon="simple-line-icons:menu" inline={false} />
    </button>
    <Menu {showNavbar}/>
    <button class="darkMode" on:click={toggleDarkMode}>
      <ColorModeLogo {open}/>
      <span>Modo {open ? "oscuro" : "claro"}</span>
    </button>
    <button class="language" on:click={toggleLanguage}>
      <CompanyCube {language}/>
      <span>{language}</span>
    </button>
    
  </header>
  <main>
    <AboutMe id={'aboutMe'}/>
    <WorkExperience id={'workExperience'}/>
    <Proyects id={'proyects'}/>
    <Contact id={'contact'}/>
  </main> 
</body>


