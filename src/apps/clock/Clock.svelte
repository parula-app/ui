<hbox class="time">
  <hbox class="hour-min">{hourMin}</hbox>
  <hbox class="seconds">:{seconds}</hbox>
</hbox>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;

  let hourMin = "";
  let seconds = "";
  function setTime() {
    hourMin = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    seconds = new Date().toLocaleTimeString([], { second: "2-digit" });
  }

  let ticker: NodeJS.Timeout;
  onMount(() => {
    setTime();
    ticker = setInterval(setTime, 1000);
  });
  onDestroy(() => {
    clearInterval(ticker);
  });
</script>

<style>
  .time {
    align-items: baseline;
    justify-content: center;
  }
  .hour-min {
    font-size: 40pt;
  }
  .seconds {
    font-size: 10pt;
  }
</style>
