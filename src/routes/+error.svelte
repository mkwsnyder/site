<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let index = $state(0);
	const timers = new Set<number>();
	let cheater = $state(false);
	let cheatedBefore = $state(false);
	// let startTime = $state(Date.now());

	// wow, the *omega* cheater.
	// really coming right to the source so you don't have to wait?
	// pathetic.
	// unfortunately, I cannot stop you from getting the messages this way.
	// not without a silly amount of work for me, that is.
	// ah well.
	// here are all the messages :P
	const messages = $derived([
		{ time: 3, message: `Just kidding. The page you're looking for doesn't exist.` },
		{ time: 6, message: `An error 404, if you will.` },
		{
			time: 9,
			message: `Try going to the <a href="/">home page</a> to get back to civilization.`,
		},
		{ time: 15, message: `You can leave anytime you want.` },
		{ time: 19, message: `I'm serious, y'know. You've seen everything there is to see here.` },
		{ time: 23, message: `This isn't some elaborate bit.` },
		{ time: 25, message: `See ya ✌️` },
		{ time: 50, message: `... You're still here?` },
		{ time: 52, message: `<span class="italic">Really?</span>` },
		{
			time: 54,
			message: `Is this bit really so interesting that you want to stick around and see how long it goes for?`,
		},
		{
			time: 58,
			message: `I've clearly made something for you to wait for, but is it really worth it?`,
		},
		{ time: 62, message: `This isn't Stanley Parable level writing.` },
		{ time: 64, message: `Do you expect something clever or witty? Funny, perhaps?` },
		{ time: 67, message: `Well, there <span class="italic">is</span> something funny about this.` },
		{ time: 70, message: `How much of your time I'm wasting.` },
		{ time: 73, message: `All that time, wasted. Now <span class="italic">that</span> is funny.` },
		{
			time: 76,
			message: `Now the question is, how long can I get you to wait? Knowing that every second you waste is one I've orchestrated?`,
		},
		{ time: 80, message: `Or maybe I'm just being pretentious?` },
		{
			time: 84,
			message: `Regardless, you really have reached the end of the messages. I can't write an infinite number of them.`,
		},
		{ time: 150, message: `<span class="italic">sigh</span>` },
		{ time: 153, message: `<span class="italic">You're still here?</span>` },
		{
			time: 156,
			message: `I guess it hasn't been <span class="italic">that</span> long in the grand scheme of things.`,
		},
		{
			time: 159,
			message: `Still. This is a lot of time to wait without, uh, leaving it on in the background.`,
		},
		{
			time: 162,
			message: cheatedBefore ? `Oh wait, you did.` : `I'm impressed by your dedication. Truly.`,
		},
		{
			time: 165,
			message: cheatedBefore
				? `I called you a cheater and here you are, having another go at this and patiently waiting for more messages.`
				: `Most others probably don't have your level of dedication.`,
		},
		{ time: 168, message: cheatedBefore ? `True dedication.` : `Heh.` },
		{
			time: 170,
			message: cheatedBefore
				? `However, now that you know that your sins are recorded, you may have also realized that there's dialogue that you're permanently locked out from.`
				: `This is the penultimate message of the alternate timeline.`,
		},
		{
			time: 174,
			message: cheatedBefore
				? `(Barring some technical know-how and sleuthing on your end, of course.)`
				: `If you got here after experiencing the other one, I hope you enjoy how much of an additional time waste it has been.`,
		},
		{ time: 177, message: `<span class="italic">Anyways...</span>` },
		{ time: 179, message: `I really am running out of things to tell you.` },
		{
			time: 182,
			message: `I guess... just wait some more? Who knows how long this break will be.`,
		},
		{ time: 300, message: `It's officially been five minutes.` },
		{
			time: 303,
			message: `Not a ton of time in the grand scheme of things.`,
		},
		{
			time: 306,
			message: cheatedBefore
				? `[MESSAGE REDACTED FOR CHEATING]`
				: `I hope you're having a lovely day at least.`,
		},
		{
			time: 309,
			message: cheatedBefore
				? `[MESSAGE REDACTED FOR CHEATING]`
				: `I'd ask how the weather is, but you've been staring at a screen for five minutes.`,
		},
		{
			time: 312,
			message: `How has your day been?`,
		},
		{
			time: 314,
			message: `You can't tell me, of course. I am a website.`,
		},
		{
			time: 316,
			message: `Time for another time gap, I think.`,
		},
		{
			time: 900,
			message: `Fifteen minutes.`,
		},
		{
			time: 902,
			message: `I bet you were starting to wonder if I'd ever come back.`,
		},
		{
			time: 905,
			message: `Perhaps not.`,
		},
		{
			time: 907,
			message: `I thought about hiding something more elaborate here.`,
		},
		{
			time: 910,
			message: `Something on the scale of an ARG.`,
		},
		{
			time: 912,
			message: `But I geniunely don't know if anyone is going to see any of this.`,
		},
		{
			time: 915,
			message: `Putting this together wasn't a <span class="italic">ton</span> of work, but it did take a decent chunk of my evening.`,
		},
		{
			time: 918,
			message: `Much longer than the fifteen or so minutes you've waited here.`,
		},
		{
			time: 921,
			message: `...`,
		},
		{
			time: 923,
			message: `Thank you.`,
		},
		{
			time: 925,
			message: `Thank you for finding and playing my silly little game.`,
		},
		{
			time: 928,
			message: `Send me a message to let me know you made it to the end.`,
		},
		{
			time: 931,
			message: `Speaking of, this really is the end, by the way.`,
		},
		{
			time: 934,
			message: `All things must come to an end.`,
		},
		{
			time: 937,
			message: `Songs, books, movies, games—`,
		},
		{
			time: 940,
			message: `our time on this earth; this dance with consciousness we waltz every day.`,
		},
		{
			time: 943,
			message: `It all comes to an end eventually.`,
		},
		{
			time: 947,
			message: `It all comes to an end`,
		},
		{
			time: 950,
			message: `all comes to an end`,
		},
		{
			time: 953,
			message: `comes to an end`,
		},
		{
			time: 957,
			message: `to an end`,
		},
		{
			time: 960,
			message: `an end`,
		},
		{
			time: 963,
			message: `end`,
		},
	]);

	function cancelTimers() {
		for (const id of timers) clearTimeout(id);
	}

	onMount(() => {
		cheatedBefore = localStorage.getItem('404_cheater') === 'true';

		for (const message of messages) {
			timers.add(setTimeout(() => index++, message.time * 1000));
		}

		document.addEventListener('visibilitychange', () => {
			// if fifteen minutes have passed and they got to the end, don't accidentally make them a cheater and pre-emptively end their experience
			if (index <= 38) {
				if (document.hidden) cancelTimers();
				else
					setTimeout(() => {
						cheater = true;
						localStorage.setItem('404_cheater', 'true');
					}, 1000);
			}
		});
	});
</script>

<main>
	<div class="center">
		{#if page.status === 404}
			{#if !cheater}
				<div transition:slide={{ axis: 'y', duration: 1000 }}>
					<p>This page intentionally left blank.</p>

					{#each messages as message, i}
						{#if index > i}
							<p transition:slide={{ axis: 'y' }}>
								{@html message.message}
							</p>
						{/if}
					{/each}
				</div>
			{:else}
				<div class="cheater" transition:slide={{ axis: 'y', duration: 1000 }}>
					<p>Well, well, well, it appears we have a cheater on our hands.</p>
					<p>
						Leaving the page open in the background so you don't have to wait to see all the
						dialogue options? Tsk tsk.
					</p>
					<p>Your father and I are very disappointed in you.</p>
					<p>If you want to see them all you'll have to refresh the page and start over.</p>
					<p>I hope you learned your lesson.</p>
				</div>
				<p class="cheater" transition:slide={{ axis: 'y', duration: 1000, delay: 10000 }}>
					I really did get the last laugh, huh?
				</p>
			{/if}
		{:else}
			<h1>{page.status}: {page.error?.message}</h1>
		{/if}
	</div>
</main>

<style>
	main {
		background: #111;

		font-family: serif;
		text-wrap: balance;

		display: grid;
		place-items: center;
		height: 100vh;
	}

	.center {
		/*position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);*/

		padding-block: 40vh 50vh;
		text-align: center;
		max-width: 50ch;
	}

	.cheater {
		color: #d33;
	}
</style>
