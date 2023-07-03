<MessageDisplay {message} {previousMessage}>
  <vbox class="app" slot="additional-content">
    {#if parulaMessage && parulaMessage.context?.app}
      <AppLoad context={parulaMessage.context} />
    {/if}
  </vbox>
</MessageDisplay>

<script lang="ts">
  import type { ChatMessage } from "../../logic/chat/ChatMessage";
  import { ParulaMessage } from "../../logic/chat/ParulaMessage";
  import MessageDisplay from "./MessageDisplay.svelte";
  import AppLoad from "../loader/AppLoad.svelte";

  export let message: ChatMessage;
  export let previousMessage: ChatMessage = null;
  $: parulaMessage = message instanceof ParulaMessage ? message : null; 
  $: console.log("parula message", parulaMessage, "app", parulaMessage.context?.app);
</script>

<style>
  .app {
    flex: 1 0 0;
    margin-top: 10px;
  }
</style>
