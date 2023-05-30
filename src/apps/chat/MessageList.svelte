<vbox class="messages">
    {#each $sortedMessages.each as message, i}
      <Message {message} previousMessage={sortedMessages.getIndex(i - 1)} />
    {/each}
</vbox>

<script lang="ts">
  import type { Collection } from "svelte-collections";
  import type { ChatMessage } from "../../../logic/chat/Message";
  import Message from "./Message.svelte";

  export let messages: Collection<ChatMessage>;

  $: sortedMessages = messages.sortBy(msg => msg.sent);
</script>

<style>
  .messages {
    flex: 1 0 0;
  }
</style>