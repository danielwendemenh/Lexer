<script lang="ts">
  import LexerInput from "../components/LexerInput.svelte";
  import TokenOutput from "../components/TokenOutput.svelte";
  import { tokenize } from "../lib/lexer";

  let tokens: { type: string; value: string }[] = [];

  function handleTokenize(event: any) {
    tokens = tokenize(event.detail.code);
  }
</script>

<main>
  <LexerInput on:tokenize={handleTokenize} />
  <TokenOutput {tokens} />
</main>

<style>
  main {
    padding: 20px;
    max-width: 600px;
    margin: auto;
  }
</style>
