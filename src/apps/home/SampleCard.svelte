<vbox class="sample">
  <img src={context.args.src} alt={context.args.alt} />
</vbox>

<script lang="ts">
  import type { Context } from "../../logic/chat/Context";

  export let context: Context;
</script>

<style>
  .sample {
    width: 200px;
  }

  img {
    display: block;
    width: 100%;
    background: white;
    height: auto;
  }
</style>
