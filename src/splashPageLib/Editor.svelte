<script>
  export let code;
  export let updatePreview;

  function handleChange(event) {
    updatePreview(event.target.value);
  }  
</script>
  
  <textarea bind:value={code} on:input={handleChange}></textarea>
  
  <style>
    textarea {
      width: 100%;
      height: 100%;
      font-family: monospace;
      font-size: 14px;
      border: 1px solid #ccc;
      padding: 10px;
      box-sizing: border-box;
    }
  </style>