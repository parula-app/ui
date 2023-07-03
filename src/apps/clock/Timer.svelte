<hbox class="time">
  <hbox class="hour-min">{hourMin}</hbox>
  <hbox class="seconds">:{seconds}</hbox>
</hbox>

<script lang="ts">
  import type { Context } from "../../logic/chat/Context";

export let context: Context;

  $: context?.args?.totalSeconds && startTimer(context.args.totalSeconds);
  let totalTime: Date;
  let startTime: Date;
  let finishTime: Date;
  let remainingTime: Date;
  /**
   * @param totalSeconds time from which to start counting down.
   * in seconds
   */
   function startTimer(totalSeconds: number) {
    console.log("total seconds", totalSeconds);
    totalTime = new Date(0, 0, 0, 0, 0, totalSeconds, 0);
    startTime = new Date();
    finishTime = new Date();
    finishTime.setSeconds(finishTime.getSeconds() + totalSeconds);
    updateRemainingTime();
    console.log("total seconds", totalSeconds, startTime, finishTime, remainingTime);
    ticker = setInterval(updateTime, 1000);
  }
  function updateRemainingTime() {
    remainingTime = new Date(finishTime.getTime() - Date.now());
  }

  let hourMin = "";
  let seconds = "";
  function updateTime() {
    updateRemainingTime();
    hourMin = remainingTime.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    seconds = remainingTime.toLocaleTimeString([], { second: "2-digit" });
    if (remainingTime.getTime() < 0) {
      clearInterval(ticker);
    }
  }

  let ticker: NodeJS.Timeout;
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
