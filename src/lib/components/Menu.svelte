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
  flex-flow: row nowrap;
  justify-content: space-between;
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
  background-color: #fff;
  transform: translate(1px, -3px);
  color: #000;
  box-shadow:  -1px -10px 0px -4px  #000 inset;
}

/*hover oscuro -> background-color: #384247; color: #51F0FF;*/

:global(.menu){
height: 30px;
width: 30px;
display: block;
}

</style>

<nav>
  <Icon class="menu" icon="simple-line-icons:menu" inline={false} />
  <ul>
    <li><a href='#aboutMe'>SOBRE MÍ</a></li>
    <li><a href='#workingExperience'>EXPERIENCIA LABORAL</a></li>
    <li><a href='#projects'>PROYECTOS</a></li>
    <li><a href='#technologies'>TECNOLOGÍAS Y HERRAMIENTAS</a></li>
    <li><a href='#contact'>CONTACTO</a></li>
  </ul>
</nav>