<script lang="ts">
    import  '$lib/styles/globals.css';

    let { children } = $props();
</script>

<svelte:head>
    <title>HunQRBox</title>
    <meta name="description" content={`enough "Bhaiya code likhna"`}>
</svelte:head>

{@render children()}