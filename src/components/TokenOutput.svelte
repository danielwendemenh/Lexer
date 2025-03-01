
<script lang="ts">
  export let tokens: { type: string; value: string }[] = [];
</script>

<div>
  <h2>Tokens:</h2>
  {#if tokens.length > 0}
    <ul>
      {#each tokens as token}
        <li><strong>{token.type}</strong>: "{token.value}"</li>
      {/each}
    </ul>
  {:else}
    <p>No tokens generated yet.</p>
  {/if}
</div>

<style>
  div {
    margin-top: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin: 5px 0;
  }

  p {
    color: gray;
  }
</style>
