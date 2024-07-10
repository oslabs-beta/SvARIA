ProgressBar.svelte
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
      height: 100%;
      background-color: #4caf50;
      transition: width 0.3s ease;
    }

    .progressText{
        padding-left: 50%;
    }
  </style>
  
  <div class="progress-bar">
    <div class="progress" style="width: {barWidth};">
        <span class="progressText">{barWidth}/100</span>
    </div>
  </div>

