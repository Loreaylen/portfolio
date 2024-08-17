<script>
import Icon from '@iconify/svelte';
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

:global(.menu){
display: none;
}

button {
  border: none;
}

@media (width <= 950px) {
  :global(.menu) {
    display: block;
    height: 30px;
    width: 30px;
  }
  
  nav {
    max-width: 350px;
    height: 100%;
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

<nav>
  <button>
    <Icon class="menu" icon="simple-line-icons:menu" inline={false} />
  </button>
  
  <ul>
    <li><a href='#aboutMe'>SOBRE MÍ</a></li>
    <li><a href='#workingExperience'>EXPERIENCIA LABORAL</a></li>
    <li><a href='#projects'>PROYECTOS</a></li>
    <li><a href='#technologies'>TECNOLOGÍAS Y HERRAMIENTAS</a></li>
    <li><a href='#contact'>CONTACTO</a></li>
  </ul>
</nav>