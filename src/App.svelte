<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="hotel">Hotel</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
		<Route path="hotel" component={Hotel} />
		<!-- <Route path="blog/*">
			<Route path="/">
				<Blog />
			</Route>
			<Route path=":id" component={BlogPost} />
		</Route>
		<Route path="search/:query" let:params>
			<Search query={params.query} />
		</Route> -->
	</div>
</Router>

<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./apps/home/HomeApp.svelte";
	import Hotel from "./apps/hotel/HotelApp.svelte";
</script>