<vbox class="sample">
  <img src={args.src} alt={args.alt} />
</vbox>

<script lang="ts">
  export let args: { [prop in string]: any};
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
    margin-top: 10px;
  }

  p {
    margin: 0;
    padding: 0.5rem;
  }
</style>
