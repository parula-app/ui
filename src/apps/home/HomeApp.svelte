<vbox class="home">
  <MessageList {messages} />
  <div class="prompt">
    <Prompt />
  </div>
</vbox>

<script lang="ts">
  import MessageList from "../chat/MessageList.svelte";
  import Prompt from "../lib/Prompt.svelte";
  import { messages, parula } from "../../logic/chat/assistant";
  import { mockedData } from "./data";
  import { ParulaMessage } from "../../logic/chat/ParulaMessage";
  import { onMount } from "svelte";

  onMount(() => {
    if (messages.isEmpty) {
      for (let sample of mockedData) {
        const message = new ParulaMessage();
        message.app = "sample";
        message.appArgs = sample;
        message.text = sample.prompt;
        message.html = sample.prompt;
        message.contact = parula;
        message.outgoing = true;
        messages.add(message);
      }
    }
  });
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
