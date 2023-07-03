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
    let elapsed = new Date(Date.now() - startTime.getTime());
    hourMin = elapsed.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    seconds = elapsed.toLocaleTimeString([], { second: "2-digit" });
  }
  let startTime: Date;
  function start() {
    startTime = new Date();
    setTime();
    ticker = setInterval(setTime, 1000);
  }
  function stop() {
    clearInterval(ticker);
  }

  let ticker: NodeJS.Timeout;
  onMount(start);
  onDestroy(stop);
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
