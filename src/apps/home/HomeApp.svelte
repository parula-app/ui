<vbox>
  <grid>
    {#each mockedData as item (item.id)}
      <Card src={item.src} alt={item.alt} prompt={item.prompt} />
    {/each}
  </grid>
  <Chat {messages} />
</vbox>

<script lang="ts">
  import Chat from "../chat/Chat.svelte";
  import Card from "./Card.svelte";
  import { mockedData } from "./data";

  import { messages } from "../../logic/chat/assistant";
</script>

<style>
  vbox {
    padding: 4rem;
    gap: 3rem;
  }
  grid   {
    --cols: auto-fit;
    display: grid;
    grid-template-columns: repeat(var(--cols), 200px);
    gap: 1rem;
    justify-content: center;
  }
  @media (width >= 880px) {
    grid {
      --cols: 4;
    }
  }
</style>
