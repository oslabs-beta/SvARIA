<script>
    export let htmlCode;
  </script>
  
  <div class="preview" on:load="{() => {}}">
    {@html htmlCode}
  </div>
  
  <style>
    .preview {
      border: 1px solid #ccc;
      padding: 10px;
      margin-top: 10px;
    }
  </style>