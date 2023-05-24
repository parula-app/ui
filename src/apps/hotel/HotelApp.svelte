<main>
  <h2>Hotels <span>in <u>Madrid</u></span></h2>
  <vbox>
    <MainFilterBar />
    <CustomFilterBar />
  </vbox>
  <div class="prompt">
    <Prompt>
      Parula, ich brauche deine Hilfe!
    </Prompt>
  </div>
</main>

<script lang="ts">
  import Prompt from "./Prompt.svelte";
  import MainFilterBar from "./MainFilterBar.svelte";
  import CustomFilterBar from "./CustomFilterBar.svelte";
</script>

<style>
  main {
    padding: 4rem;
  }

  vbox {
    gap: 2rem;
  }
  .prompt {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: 560px;
    margin-inline: auto;
  }

  h2 span {
    font-weight: 300;
  }
</style>