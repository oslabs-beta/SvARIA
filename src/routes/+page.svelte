
<script>
    import Hero from "../splashPageLib/Hero.svelte";
    import WhySvARIA from "../splashPageLib/WhySvARIA.svelte";
    import GettingStarted from "../splashPageLib/GetStart.svelte";
    import CompTab from "../splashPageLib/CompTab.svelte";
    import GitHubFAQ from "../splashPageLib/GitHubFAQ.svelte";
  
</script>

<main class="flex flex-col">
    <Hero />
    <WhySvARIA />
    <GettingStarted />
    <CompTab />
    <GitHubFAQ />
    
  
  
    <!-- <style>
        :global(body) {
            display: flex;
            justify-content: center;
            height: 100vh;
        }
    </style>
      
    <div class='main-cont'>
        <div class='splash-heading'>
           
            <a href='/gitHub'><button class='gitBut' type='button'>GitHub</button></a>
        </div>
    </div> -->
    
</main>
