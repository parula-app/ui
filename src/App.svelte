<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="clock">Clock</Link>
		<Link to="hotel">Hotel</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
		<Route path="hotel" component={Hotel} />
		<Route path="clock" component={Clock} />
		<!-- <Route path="hotel/*">
			<Route path="/">
				<Hotel />
			</Route>
			<Route path=":id" component={HotelDetail} />
		</Route>
		<Route path="hotel/search/:query" let:params>
			<HotelSearch query={params.query} />
		</Route> -->
	</div>
</Router>

<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./apps/home/HomeApp.svelte";
	import Hotel from "./apps/hotel/HotelApp.svelte";
	import Clock from "./apps/clock/Clock.svelte";
</script>
