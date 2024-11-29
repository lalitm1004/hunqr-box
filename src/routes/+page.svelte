<script lang="ts">
    import { qr } from '@svelte-put/qr/svg';

    const defaultDisplay: string = "https://youtu.be/X16G2hsVI9w?t=50";
    let displayValue: string = $state(defaultDisplay);

    const handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const value = target.value;

        target.value = value.replace(/[^0-9]/g, '');

        if (value.length > 4) {
            target.value = value.slice(0, 4);
        } else if (value.length === 0) {
            displayValue = defaultDisplay;
        } else {
            displayValue = value;
        }
    }
</script>

<main class={`h-dvh w-dvw overflow-hidden bg-[#3A1593] grid place-items-center font-inter`}>
    <div class={`h-[60%] lg:w-[20%] md:w-[50%] w-[80%] flex flex-col justify-start items-center gap-2 py-4 bg-neutral-50 rounded-lg`}>
        <div class={`flex items-center gap-2`}>
            <svg class={`h-[30px] aspect-square stroke-2 stroke-[#3A1593] lucide lucide-qr-code`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" >
                <rect width="5" height="5" x="3" y="3" rx="1"/>
                <rect width="5" height="5" x="16" y="3" rx="1"/>
                <rect width="5" height="5" x="3" y="16" rx="1"/>
                <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                <path d="M21 21v.01"/>
                <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                <path d="M3 12h.01"/>
                <path d="M12 3h.01"/>
                <path d="M12 16v.01"/>
                <path d="M16 12h1"/>
                <path d="M21 12v.01"/>
                <path d="M12 21v-1"/>
            </svg>
            <h1 class={`md:text-4xl text-3xl font-parkinsans`}>HunQRBox</h1>
        </div>

        <div class={`h-full w-full flex flex-col items-center gap-6 pt-10`}>
            <input
                oninput={handleInput}
                class={`h-[50px] w-[80%] rounded-xl bg-slate-200/80 text-center`}
                placeholder={`Enter Code`}
                type="number"
            >

            <svg
                class={`h-[180px] aspect-square`}
                use:qr={{
                    data: displayValue,
                }}
            />
        </div>
    </div>
</main>