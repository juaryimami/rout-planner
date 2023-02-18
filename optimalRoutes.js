
// A utility function to find the vertex with
// minimum key value, from the set of vertices
// not yet included in optimal route
function minKey(key, mstSet, V)
{
	// Initialize min value
	let min = Number.MAX_VALUE, min_index;

	for (let v = 0; v < V; v++)
		if (mstSet[v] == false && key[v] < min)
			min = key[v], min_index = v;

	return min_index;
}

// A utility function to print the
// constructed optimalRoute stored in parent[]
const printRoute = (parent, graph) =>{
	let optimalPath = [];
	let distances = 0;
	for (let i = 1; i < graph.length; i++){
		optimalPath.push(parent[i] + "  - " + i );
		distances = distances +  graph[i][parent[i]];
	}
	let results = {
		distance: distances,
		path: optimalPath,
	};

	return results;

};

// Function to construct and print the optimalRoute graph for
// a graph represented using adjacency
// matrix representation
const optimalRoute = (buildings, start) =>{
	// Array to store constructed MST
	let parent = [];
	
	// Key values used to pick minimum weight edge in cut
	let key = [];
	
	// To represent set of vertices included in optimalroute
	let mstSet = [];
	
	// lets count the total number of vertices
	let V = buildings.length;

	// Initialize all keys as INFINITE
	for (let i = 0; i < V; i++)
		key[i] = Number.MAX_VALUE, mstSet[i] = false;

	// Always include starting 1st vertex in optimal route.
	// Make key 0 so that this vertex is picked as first vertex.
	key[0] = start;
	parent[0] = -1; // First node is always root of our optimalRoute

	// The MST will have V vertices
	for (let count = 0; count < V - 1; count++)
	{
		// Pick the minimum key vertex from the
		// set of vertices not yet included in out optimal route
		let u = minKey(key, mstSet, V);

		// Add the picked vertex to the optimalRoute Set
		mstSet[u] = true;

		// Update key value and parent index of
		// the adjacent vertices of the picked vertex.
		// Consider only those vertices which are not
		// yet included in optimalRoute
		for (let v = 0; v < V; v++)

			// graph[u][v] is non zero only for adjacent vertices of m
			// mstSet[v] is false for vertices not yet included in optimalRoute
			// Update the key only if graph[u][v] is smaller than key[v]
			if (buildings[u][v] && mstSet[v] == false && buildings[u][v] < key[v])
				parent[v] = u, key[v] = buildings[u][v];
	}

	// print the constructed route
	return printRoute(parent, buildings);
};
module.exports = optimalRoute;