<script lang="ts">
    import  { user } from "$lib/firebase";
</script>

{#if $user}
    <slot />
{:else}	
    <p class=" text-error my-10">
        You must be sighed in to see this page
        <a class="btn btn-primary" href="/login">Sign in</a>
    </p>
{/if}