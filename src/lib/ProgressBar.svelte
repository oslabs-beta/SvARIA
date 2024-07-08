<!-- ProgressBar.svelte -->
<script>
    // Props
    export let progress = 0; // Initial progress value
  
    // Computed style for the progress bar width
    $: barWidth = progress + '%';
  </script>
  
  <style>
    .progress-bar {
      width: 100%;
      background-color: #f1f1f1;
      height: 20px;
      border-radius: 4px;
      overflow: hidden;
    }
  
    .progress {
      width: barWidth;
      height: 100%;
      background-color: #4caf50;
      transition: width 0.3s ease;
    }
  </style>
  
  <div class="progress-bar">
    <div class="progress"></div>
  </div>