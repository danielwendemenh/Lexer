<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { tokenize } from "../lib/lexer";

  let code = "";
  let tokens: { type: string; value: string }[] = [];

  const dispatch = createEventDispatcher();

  function tokenizeInput() {
        dispatch("tokenize", { code }); // Send the code to the parent

  }
</script>

<div>
  <h2>Enter JavaScript Code:</h2>
  <textarea bind:value={code} placeholder="Type your JavaScript code here..."></textarea>
  <button on:click={tokenizeInput}>Tokenize</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  textarea {
    width: 100%;
    height: 150px;
    font-size: 16px;
    padding: 8px;
  }

  button {
    width: 120px;
    padding: 8px;
    cursor: pointer;
  }
</style>

