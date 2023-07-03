<Router>
	<vbox class="app-content">
		<Route path="/">
			<Home />
		</Route>
		<Route path="hotel" component={Hotel} />
		<Route path="hotelDetails" component={HotelDetails} />
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
	</vbox>
</Router>

<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./apps/home/HomeApp.svelte";
	import Hotel from "./apps/hotel/HotelApp.svelte";
	import HotelDetails from "./apps/hotel/details/HotelDetailsApp.svelte";
	import Clock from "./apps/clock/Clock.svelte";
</script>

<style>
	.app-content {
		flex: 1 0 0;
	}
</style>
