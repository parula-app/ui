<script lang="ts">
  export let progress: number;
</script>

<div style="background: linear-gradient(90deg, #1F476A 0%, #1F476A {progress}%, #5E96BD {progress}%)">
</div>

<style>
  div {
    width: 100%;
    border-radius: 0.125rem;
    min-height: 0.25rem;
  }
</style>