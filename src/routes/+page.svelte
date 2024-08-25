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

  const BREAKPOINT = 900;
  let width;
  let open = false
  let language = "EN"
  let showNavbar = false

  if(browser){
    width = window.innerWidth;
  }

  const handleResize = () => {
  width = window.innerWidth
  showNavbar = width > BREAKPOINT
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

  header {
    height: 50px;
    width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  
  button {
    border: 2px solid transparent;
    background-color: transparent;
    height: auto;
  }
  
  :global(.darkMode) {
    height: auto;
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: 3px;
  }
  :global(.language){
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    width: 63px;
    padding: 0 3px;
  }

  :global(.burguer) {
      display: block;
      height: 35px;
      width: 35px;
    }

  :global(.pageOptions){
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    height: auto;
    width: auto;
    gap:10px;
  }

  
  
  span {
    flex-grow: 1;
  }

  button:not(.bgButton) {
    transition: border-color 120ms ease-out;
  }

  button:not(.bgButton):hover{
    border-color: rgba(0, 0, 0, 0.5);
  }
  
</style>
<svelte:window on:resize={handleResize}/>
<svelte:head>
  <title>Portalfolio</title>
</svelte:head>
<body>
  
  <header>
    {#if width <= BREAKPOINT}
      <button class='bgButton' on:click={toggleMenu}>
        <Icon class="burguer" icon={ showNavbar ? "subway:left-arrow" : "rivet-icons:menu"} inline={false} />
      </button>
    {/if}
    <Menu {showNavbar} {width}/>
    <div class='pageOptions'>
      <button class="language" on:click={toggleLanguage}>
        <CompanyCube {language}/>
        <span>{language}</span>
      </button>   
    <button class="darkMode" on:click={toggleDarkMode}>
      <ColorModeLogo {open}/>
      <span>MODO {open ? "OSCURO" : "CLARO"}</span>
    </button>
    
  </div>
    
  </header>
  <main>
    <AboutMe id={'aboutMe'}/>
    <WorkExperience id={'workExperience'}/>
    <Proyects id={'proyects'}/>
    <Contact id={'contact'}/>
  </main> 
</body>


