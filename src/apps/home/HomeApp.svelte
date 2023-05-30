<vbox class="home">
  <Samples />
  <MessageList {messages} />
  <div class="prompt">
    <Prompt />
  </div>
</vbox>

<script lang="ts">
  import Samples from "./Samples.svelte";
  import MessageList from "../chat/MessageList.svelte";
  import Prompt from "../lib/Prompt.svelte";

  import { messages } from "../../logic/chat/assistant";
</script>

<style>
  .home {
    flex: 1 0 0;
    padding: 4rem;
    gap: 3rem;
  }

  .prompt {
    position: sticky;
    z-index: 1;
    bottom: 2rem;
    left: 0;
    max-width: 35rem;
    margin-inline: auto;
  }
</style>
