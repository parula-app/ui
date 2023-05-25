<container>
  <div class="prompt">
    <Prompt>Parula, I need help!</Prompt>
  </div>
  <MessageList {messages} />
</container>

<script lang="ts">
  import type { Collection } from "svelte-collections";
  import type { ChatMessage } from "../../../logic/chat/Message";
  import MessageList from "./MessageList.svelte";
  import Prompt from "../Prompt.svelte";

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
    top: 2rem;
    left: 0;
    right: 0;
    max-width: 35rem;
    margin-inline: auto;
  }
</style>
