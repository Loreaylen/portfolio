<script>
  export let showNavbar = false
</script>
<style>

li {
  list-style-type: none;
}

nav {
  height: auto;
  width: auto;
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

ul {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

a {
  display: block;
  padding: 15px;
  transition: all 100ms ease-in;
}

a:hover {
  background-color: rgb(255, 255, 255, 0.5);
  transform: translate(1px, -3px);
  color: #000;
  box-shadow:  -1px -10px 0px -4px  #000 inset;
}

/*hover oscuro -> background-color: #384247; color: #51F0FF;*/




@media (width <= 950px) {

  nav {
    position: absolute;
    max-width: 350px;
    top: 100%;
    height: 600px;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    gap: 10px;
    background-color:#F1F1F1;
    box-shadow: 5px 3px 7px -1px rgba(0,0,0,0.58);
  }

  ul {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 5px;
  }
  
  li {
    width: 100%;
  }

  a:hover {
  box-shadow: 10px -1px  0px -4px  #000 inset;
}
}

</style>

<nav style="display:{showNavbar ? 'block': 'none'};">
  <ul>
    <li><a href='#aboutMe'>SOBRE MÍ</a></li>
    <li><a href='#workingExperience'>EXPERIENCIA LABORAL</a></li>
    <li><a href='#projects'>PROYECTOS</a></li>
    <li><a href='#technologies'>TECNOLOGÍAS Y HERRAMIENTAS</a></li>
    <li><a href='#contact'>CONTACTO</a></li>
  </ul>
</nav>
