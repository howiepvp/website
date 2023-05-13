<script lang="ts">
  import IconCopy from "~icons/heroicons/document-duplicate";
  import {PUBLIC_SERVER_IP} from "$env/static/public";

  function onClick(): void {
    navigator.clipboard
      .writeText(PUBLIC_SERVER_IP)
      .catch(() => alert("Could not copy IP to clipboard!"))
      .then(() => alert("IP copied to clipboard!"));
  }
</script>

<div class="tooltip" data-tip="Click to copy">
  <button class="btn btn-outline" on:click={onClick}>
    {PUBLIC_SERVER_IP}&nbsp;<IconCopy />
  </button>
</div>
