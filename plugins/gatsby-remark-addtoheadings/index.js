const visit = require("unist-util-visit")



//const toString = require("mdast-util-to-string")

var markdownASTstring_to_slug = function (str)
{
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
	var to   = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

	for (var i=0, l=from.length ; i<l ; i++)
	{
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace('.', '-') // replace a dot by a dash
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by a dash
		.replace(/-+/g, '-') // collapse dashes
		.replace( /\//g, '' ); // collapse all forward-slashes

	return str;
}



module.exports = ({ markdownAST }, pluginOptions) => {

  var count = 0

  visit(markdownAST, "heading", node => {
    let { depth } = node
    // Skip if not an h1
    if (depth == 1 || depth == 2) count++
    // Grab the innerText of the heading node
    //let text = toString(node)
    console.log(node)

    let text = node.children[0].value
    let slug = markdownASTstring_to_slug(text)

    const html = `

        <h${depth} class="heading heading-${depth}" id="${slug}">
          ${text}
        </h${depth}>
        <Waypoint class="waypoint waypoint-${count}" id="waypoint-${count}" ref=""></Waypoint>

      `
    node.type = "html"
    node.children = undefined
    node.value = html

  })


  return markdownAST
}
