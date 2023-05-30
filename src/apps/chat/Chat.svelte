<container>
  <MessageList {messages} />
  <div class="prompt">
    <Prompt />
  </div>
</container>

<script lang="ts">
  import { type Collection } from "svelte-collections";
  import type { ChatMessage } from "../../logic/chat/Message";
  import MessageList from "./MessageList.svelte";
  import Prompt from "../lib/Prompt.svelte";

  export let messages: Collection<ChatMessage>;
</script>

<style>
  container {
    padding-block: 2rem;
    background: #fafafa;
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
