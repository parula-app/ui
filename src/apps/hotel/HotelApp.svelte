<main>
  <h1>Hotel App</h1>
  <div class="prompt">
    <Prompt>
      Parula, ich brauche deine Hilfe!
    </Prompt>
  </div>
</main>

<script lang="ts">
  import Prompt from "./Prompt.svelte";
</script>

<style>
  main {
    padding: 4rem;
  }
  .prompt {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: 560px;
    margin-inline: auto;
  }
</style>