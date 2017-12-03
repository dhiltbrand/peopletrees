import React from 'react';

import Utils from '../../Utils';

const maxCanvasDimension = 16384;
const maxIECanvasDimension = 8192;

class Graph extends React.Component {

	constructor (props) {
		super(props);

		this.BEZIER_CONTROL_POINT = 0.552284749831;

		this.data = this.props.data;
		this.datauid = 'kljdlfkdsj';

		this.scale = 1;
		
		this.styling = (this.props.styling) ? this.props.styling : {
			titleFont: 'Arial',
			titleFontSize: '30px',
			nodeColor: 'rgba(128,128,128,1)',
			nodeFont: 'Arial',
			nodeFontSize: '16px'
		};
	}

	componentDidMount() {

		//this.viewportWidth = 
		//this.context = this.canvas.getContext('2d');
		//this.drawGraph(this.context);
	}

	drawGraph(context) {
		this.drawGraphTitle(context, this.data.name);
		this.drawTree(context);
	}

	drawTree(context) {
		this.drawNode(context, this.data.nodes, this.viewPortWidth / 2, 100);
	}

	drawGraphTitle(context) {
		let font = this.styling.titleFont;

		context.font = `${this.styling.titleFontSize} ${this.styling.titleFont}`;
		context.fillText(this.data.name, 10.5, 50.5);
	}

	drawNode(context, node, xPosition, yPosition) {
	  context.beginPath();
	  context.arc(xPosition, yPosition, 40.5, 0, 2 * Math.PI, false);
	  context.lineWidth = 3;
	  context.strokeStyle = this.styling.nodeColor;
	  context.stroke();
	  context.font = `${this.styling.nodeFontSize} ${this.styling.nodeFont}`;
	  let personName = `${node.given_name} ${node.family_name}`;
	  let jobTitle = node.job_title;

	  context.fillText(personName, xPosition - (context.measureText(personName).width / 2), yPosition + 75.5);
	  context.fillText(jobTitle, xPosition - (context.measureText(jobTitle).width / 2), yPosition + 100.5);
	}

	exportPDF() {
		//this.drawTree(new C2S(desiredHeight, desiredWidth));
	}

	exportSVG(desiredHeight, desiredWidth) {
		//this.drawTree(new C2S(desiredHeight, desiredWidth));
	}

	//Gets the max-width of all descendent leaf nodes below the specified node
	getLeafWidth(node, generation) {

	}

	flush() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	//given an (x,y) coordinate pair, return a tree node corresponding to that point in the graph
	mapCoordsToNode(x, y) {

	}

	render () {
		return (
			<svg className='graph' data-uid={this.datauid} height={this.props.height} width={this.props.width} xmlns="http://www.w3.org/2000/svg">
			</svg>
		)
	}
	//<canvas className='graph' height={Utils.getViewportHeight() - 65} width={Utils.getViewportWidth()}></canvas>
};

export default Graph;