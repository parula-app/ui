<vbox class="home" class:fullscreen={fullScreen}>
  <vbox class="history">
    <MessageList {messages} />
  </vbox>
  {#if fullScreen}
    <TitleBar appName={context.app} on:close={() => fullScreen = false} />
    <AppLoad {context} />
  {/if}
  <div class="prompt">
    <Prompt />
  </div>
</vbox>

<script lang="ts">
  import MessageList from "../chat/MessageList.svelte";
  import Prompt from "../lib/Prompt.svelte";
  import { parula, messages, loadData } from "../../logic/chat/assistant";
  import { mockedData } from "./data";
  import { ParulaMessage } from "../../logic/chat/ParulaMessage";
  import { onMount } from "svelte";
  import AppLoad from "../loader/AppLoad.svelte";
  import TitleBar from "./TitleBar.svelte";
  import { Context } from "../../logic/chat/Context";

  $: lastMessage = $messages.get(messages.length - 1);
  $: context = lastMessage?.context;

  let fullScreen = false;
  $: startFullScreen(lastMessage);
  function startFullScreen(message: ParulaMessage) {
    fullScreen = !!(message?.context?.app) && !!(message?.context?.results);
  }

  onMount(async () => {
    await loadData()
    if (messages.isEmpty) {
      addSamples();
    }
  });

  function addSamples() {
    for (let sample of mockedData) {
      const message = new ParulaMessage();
      message.context = new Context();
      message.context.app = "sample";
      message.context.args = sample;
      message.context.resultText = sample.prompt;
      message.text = sample.prompt;
      message.html = sample.prompt;
      message.contact = parula;
      message.outgoing = true;
      messages.add(message);
    }
  }
</script>

<style>
  .home {
    flex: 1 0 0;
  }

  .history {
    flex: 1 0 0;
    margin-bottom: 3rem;
  }
  .fullscreen .history {
    max-height: 1em;
    flex: 0 0 0;
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
