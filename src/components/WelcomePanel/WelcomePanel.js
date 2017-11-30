import React from 'react';

const WelcomePanel = (props) => (
	<div className='welcome-panel panel'>
		<h1></h1>
		<div className='column-container three'>
			<div className='column'>
				<h3 className='center'>Build Attractive Organizational Charts</h3>
				<p>Build your chart painlessly by hand with our simple build tools.</p>
				<p>Or save time and import a CSV file.</p>
				<p>Automate your chart programmatically with the Peopletre.es RESTful API.</p>
			</div>
			<div className='column'>
				<h3 className='center'>Export Your Chart</h3>
				<p>Export all or part of your chart as a PDF document, or a PNG or SVG image file.</p>
				<p>Insert it into a document or presentation.</p>
				<p>Customize colors and fonts to make your chart, yours.</p>
			</div>
			<div className='column'>
				<h3 className='center'>Share and Embed Your Chart</h3>
				<p>Embed all or part your organizational chart in your website.</p>
				<p>Control where your chart can be shown and who can see it.  View Filters allow you to tailor the chart to your audience.</p>
			</div>
		</div>
	</div>
);

export default WelcomePanel;