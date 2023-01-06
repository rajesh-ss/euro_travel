
/***************************************************
 * 
 * DirectedGraph class for struct of graph 
 * The vertices are the places he visited.
 * Map is used so that we wel'll get like this
 * place1: [place1, place2, place3, ...],
 * place2: [place1, place3, ...]
 * 
 ***************************************************/

class DirectedGraph {

    
	constructor(totalVer)
	{
		this.totalVer = totalVer;
		this.adjLs = new Map();
	}

/**
 * purpose: Add only vertices with empty list or array 
 */
addVertex(v)
{
	this.adjLs.set(v, []);
}

/**
 * purpose: Add places to the list that is there for each place
 */
addEdge(v, w)
{
	this.adjLs.get(v).push(w);
}


/**
 * This function is for printing graph in console
 * purpose: for initial testing in console
 */

printGraph()
{
	let kys = this.adjLs.keys();
    console.log(this.adjLs)
	for (let i of kys)
{
		let get_values = this.adjLs.get(i);
		let conc = "";
		for (let j of get_values)
			conc += j + " ";
		console.log(i + " -> " + conc);
	}
}

/**
 * purpose: Print the graph in the html page
 * This fun is same as printGraph, except it prints 
 * in html
 */
visulize(adj)
{
	let kys = this.adjLs.keys();
    console.log(this.adjLs)

    document.write("<div class='cont'>");
	for (let i of kys){

        let get_values = this.adjLs.get(i);
		let conc = "";
		for (let j of get_values)
			conc += j + " ";
			document.write("<div class='row'><div class='container'>"+ i+"</div> <img class='trainimg' src='train.png'/><div class='container'>"+conc+"</div></div>");
		}

    document.write("</div>")

}

/**
 * DFS: depth first search
 * 
 */
dfs(startingNode)
{
	let visited = {};
	this.prnDFS(startingNode, visited);
}

/**
 * Purpose: DFS Depth first search all the nodes
 * The destination list of the one particular source is 
 * printed recursely 
 */
prnDFS(vert, visited)
{
	visited[vert] = true;
	console.log(vert);
  
    document.write("<img class='trainimg' src='train.png'/> <div class='container'>"+vert+"</div>");

	let get_neighbours = this.adjLs.get(vert);

	for (let i in get_neighbours) {
		let get_elem = get_neighbours[i];
		if (!visited[get_elem])
			this.prnDFS(get_elem, visited);
	}
}

}

/**
 * Driver Code here
 * Function: create graph, add vertices, edges, display the graph
 */


let g = new DirectedGraph(6);

// name of vertices, here they are places he visited
let vertices = [ 'Kiev', 'Prague', 'Zurich', 'Amsterdam', 'Barcelona', 'Berlin' ];


for (let i = 0; i < vertices.length; i++) {
	g.addVertex(vertices[i]);
}

// add required edges
g.addEdge('Kiev', 'Prague');
g.addEdge('Prague', 'Zurich');
g.addEdge('Zurich', 'Amsterdam');
g.addEdge('Amsterdam', 'Barcelona');
g.addEdge('Barcelona', 'Berlin');
g.addEdge('Berlin', 'Kiev');


g.visulize()
g.printGraph();
document.write("<br><br>According to his train tickets he has travelled this way (DFS)<br><br>");
g.dfs('Kiev')

