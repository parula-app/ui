<vbox class="messages">
  <Scroll bind:this={scroller}>
    {#each $sortedMessages.each as message, i}
      <ParulaMessageDisplay {message} previousMessage={sortedMessages.getIndex(i - 1)} />
    {/each}
  </Scroll>
</vbox>

<script lang="ts">
  import type { Collection } from "svelte-collections";
  import type { ChatMessage } from "../../logic/chat/ChatMessage";
  import ParulaMessageDisplay from "./ParulaMessageDisplay.svelte";
  import Scroll from "../lib/Scroll.svelte";
  import { tick } from "svelte";

  export let messages: Collection<ChatMessage>;

  $: sortedMessages = $messages.sortBy(msg => msg.sent);

  let scroller: Scroll;
  $: $messages && scroller && scrollDown();
  async function scrollDown() {
    await tick(); // wait for message to be added to HTML
    if (scroller && scroller.scrollDown) {
      scroller.scrollDown();
    }
  }
</script>

<style>
  .messages {
    flex: 1 0 0;
    color: #002E56; /* dark blue */
  }
  .messages,
  :global(body[theme="dark"]) .messages {
    background-color: #002E56; /* dark blue */
  }
  :global(body[theme="light"]) .messages {
    background-color: #E7EEFC; /* light blue*/
  }
</style>
