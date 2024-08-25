<script>

  export let showNavbar = false;

</script>
<style>
li {
  list-style-type: none;
}

nav {
  height: auto;
  width: auto;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

}

ul {
  width: auto;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
}

a {
  display: block;
  padding: 5px;
  transition: all 100ms ease-in;
  font-size: 0.7rem;
}

a:hover {
  background-color: rgb(255, 255, 255, 0.5);
  transform: translate(1px, -3px);
  color: #000;
  box-shadow:  -1px -10px 0px -4px  #000 inset;
}



/*hover oscuro -> background-color: #384247; color: #51F0FF;*/

@media (width <= 900px) {
  
  nav {
    position: absolute;
    max-width: 350px;
    top: 100%;
    left: 0;
    height: calc(100vh - 50px);
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 5px 3px 7px -1px rgba(0,0,0,0.58);
  }



  ul {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
    gap: 3px;

  }
  
  li {
    width: 100%;

  }

  a {
    padding: 10px 30px;
  }

  a:hover {
  box-shadow: 12px -1px  0px -4px  #000 inset;
}
}

</style>

<nav style={showNavbar ? 'display:flex;' : 'display:none;'}>
  <ul>
    <li><a href='#aboutMe'>SOBRE MÍ</a></li>
    <li><a href='#projects'>PROYECTOS</a></li>
    <li><a href='#technologies'>TECNOLOGÍAS Y HERRAMIENTAS</a></li>
    <li><a href='#workingExperience'>EXPERIENCIA LABORAL</a></li>
    <li><a href='#contact'>CONTACTO</a></li>
  </ul>
</nav>
