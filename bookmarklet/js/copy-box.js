javascript:(
	function(){
		console.log('Hello World!\nWritten by JavaScript!\nVersion alpha');
		
		var tablearea = document.getElementById("table1");
		tablearea.select();
		document.execCommand("copy");
	}
)()
