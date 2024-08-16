<script>
  import Menu from '../lib/components/Menu.svelte'
  import AboutMe from '../lib/components/AboutMe.svelte'
  import WorkExperience from '../lib/components/WorkExperience.svelte'
  import Proyects from '../lib/components/Proyects.svelte'
  import Contact from '../lib/components/Contact.svelte'
</script>



<body>
  <header>
    <Menu/>
  </header>
  <main>
    <AboutMe id={'aboutMe'}/>
    <WorkExperience id={'workExperience'}/>
    <Proyects id={'proyects'}/>
    <Contact id={'contact'}/>
  </main> 
</body>


