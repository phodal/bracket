'use strict';

// Example of lambda function using nunjucks template
// https://github.com/guardian/ses-send-email-lambda/blob/master/src/index.js

// Related interesting reads
// https://medium.com/engineers-optimizely/using-serverless-to-simplify-and-automate-aws-lambda-442addd80d72

const base_page = `
<!DOCTYPE html>
<html lang=" en-US">
<head>
	<meta charset='utf-8'>
	<meta http-equiv="X-UA-Compatible" content="chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://phodal.github.io/bracket/assets/css/style.css?v=a666bcb001a438d4f0ead39f0dcea76f3fe7038f">

	<!-- Begin Jekyll SEO tag v2.3.0 -->
<title>bracket | A Serverless IoT Server for Fun</title>
<meta property="og:title" content="bracket" />
<meta property="og:locale" content="en_US" />
<meta name="description" content="A Serverless IoT Server for Fun" />
<meta property="og:description" content="A Serverless IoT Server for Fun" />
<link rel="canonical" href="https://phodal.github.io/bracket/" />
<meta property="og:url" content="https://phodal.github.io/bracket/" />
<meta property="og:site_name" content="bracket" />
<script type="application/ld+json">
{"name":"bracket","description":"A Serverless IoT Server for Fun","author":null,"@type":"WebSite","url":"https://phodal.github.io/bracket/","image":null,"publisher":null,"headline":"bracket","dateModified":null,"datePublished":null,"sameAs":null,"mainEntityOfPage":null,"@context":"http://schema.org"}</script>
<!-- End Jekyll SEO tag -->

</head>

<body>
<main class="wrapper">

	<nav class="navigation">
		<section class="container">
			<a class="navigation-title" href="https://github.com/phodal/bracket">
			<h1 class="title">bracket</h1></a>
			<a href="https://github.com/phodal/bracket" title="bracket on Github" target="_blank">
				<svg class="octocat" viewBox="0 0 250 250">
					<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
					<path class="octocat-arm"
						  d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"></path>
					<path class="octocat-body"
						  d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path>
				</svg>
			</a>
		</section>
	</nav>
	<header class="header" id="home">
		<section class="container">
			<h1>bracket</h1>
			<h2>A Serverless IoT Server for Fun</h2>
		</section>
	</header>

	<div class="container">
		<section id="main_content">
			<h1 id="bracket">bracket</h1>

<p>A Serverless IoT Server for Fun</p>

<p><strong>Features</strong></p>

<ul>
  <li>QRCode</li>
  <li>On/Off Toggle</li>
  <li>JSON support</li>
  <li>Wechat Login</li>
</ul>

<h2 id="onoff-toggle">On/Off Toggle</h2>

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>HTTP Method</th>
      <th>URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>create</td>
      <td>POST</td>
      <td>/q</td>
    </tr>
    <tr>
      <td>on</td>
      <td>GET</td>
      <td>/q/{device_id}/on</td>
    </tr>
    <tr>
      <td>off</td>
      <td>GET</td>
      <td>/q/{device_id}/off</td>
    </tr>
    <tr>
      <td>status</td>
      <td>GET</td>
      <td>/q/{device_id}</td>
    </tr>
    <tr>
      <td>status</td>
      <td>GET</td>
      <td>/q/{device_id}/status</td>
    </tr>
  </tbody>
</table>

<h2 id="setup">Setup</h2>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npm install -g serverless
</code></pre></div></div>

<p>1.install</p>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>yarn install
</code></pre></div></div>

<p>2.create domain</p>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>sls create_domain
</code></pre></div></div>

<p>3.deloy</p>

<div class="highlighter-rouge"><div class="highlight"><pre class="highlight"><code>sls deploy
</code></pre></div></div>

<h2 id="license">LICENSE</h2>

<p><a href="http://ideas.phodal.com/"><img src="http://brand.phodal.com/shields/idea-small.svg" alt="Phodal's Idea" /></a></p>

<p>© 2018 A <a href="https://www.phodal.com">Phodal Huang</a>’s <a href="http://github.com/phodal/ideas">Idea</a>.  This code is distributed under the MIT license. See <code class="highlighter-rouge">LICENSE</code> in this directory.</p>


		</section>
	</div>

	
</main>
<footer>
	<div class="footer">
		<div class="container">
			@<a href="https://www.phodal.com/">Phodal</a> Powered by <a href="https://github.com/phodal/mifa">Mifa Design</a>
		</div>
	</div>
</footer>
</body>
</html>
`

module.exports.main = (event, context, callback) => {
  callback(null, {
      statusCode: 200,
      body: base_page,
      headers: {'Content-Type': 'text/html'},
    }
  );
};
