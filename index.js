var sc = require( 'subcommander' );
let fs = require('fs');
sc 
	.command('map', {
		desc: 'map 2 files',
		callback: function (options) {
			//console.log(options)
			readFiles(options)
		}
	})
		.option('file1', {
			abbr: 'f1',
			desc: 'fiel path for file 1'
		})
		.option('file2', {
			abbr: 'f2',
			desc: 'file path for file 2'
		})

	.end()
sc.parse();

function readFiles (filePath) {
	//console.log(filePath)
	var fileVars = [];
	var paths = Object.values(filePath)
	//console.log(paths)

	paths.forEach(function(element) {
		fs.readFile(element, (err, data) => {
			fileName = element.split('/').pop().split('.')[0]
			if (err) throw err;
			console.log(fileName + ' ' + element)
			fileVars['f'+fileName] = JSON.parse(data);
		});
			console.log(fileVars)

	})
	return(fileVars)
}

function afterFunction (fileVars) {
	console.log(fileVars)
}

