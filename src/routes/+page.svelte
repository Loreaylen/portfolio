<script>
  import Menu from '../lib/components/Menu.svelte'
  import AboutMe from '../lib/components/AboutMe.svelte'
  import WorkExperience from '../lib/components/WorkExperience.svelte'
  import Proyects from '../lib/components/Proyects.svelte'
  import Contact from '../lib/components/Contact.svelte'
  import Icon from '@iconify/svelte';

  let showNavbar = false

  const toggleMenu = () => {
    return showNavbar = !showNavbar
  }
</script>

<style>
  
  button {
    display: none;
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
    <div>Modo claro/oscuro</div>
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


