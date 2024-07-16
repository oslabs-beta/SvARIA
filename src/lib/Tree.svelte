<script>
    export let node;
    export let isSelected;
    export let selectNode;
  </script>
  
  <li role="treeitem" {aria-expanded="!!node.children"} {aria-selected="isSelected(node)"}>
    <div on:click={() => selectNode(node)}>{node.label}</div>
    {#if node.children}
      <ul role="group">
        {#each node.children as child}
          <TreeNode {node: child} {isSelected} {selectNode} />
        {/each}
      </ul>
    {/if}
  </li>