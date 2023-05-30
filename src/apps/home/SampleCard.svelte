<div>
  <img {src} {alt} />
  <p>{prompt}</p>
</div>

<script lang="ts">
  export let src: string;
  export let alt: string;
  export let prompt: string;
</script>

<style>
  div {
    width: 200px;
  }

  img {
    display: block;
    width: 100%;
    background: white;
    height: auto;
  }

  p {
    margin: 0;
    padding: 0.5rem;
  }
</style>
