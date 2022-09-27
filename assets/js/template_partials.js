// Entire footer
class MyFooter extends HTMLElement{
	connectedCallback() {
		this.innerHTML = `
		
		<section id="footer">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<ul class="social">
							<li><a class="icon brands fa-linkedin-in" href="#"><span class="label">LinkedIn</span></a></li>
							<li><a class="icon brands fa-instagram" href="https://www.instagram.com/s.v.null/"><span class="label">Instagram</span></a></li>
							<li><a class="icon fa-envelope" href="mailto:svnull@che.nl"><span class="label">Mail</span></a></li>
						</ul>

						<div id="copyright">
							<ul class="links">
								<li><a href="#">Impressum</a></li>
								<li><a href="#">Privacyverklaring</a></li>
								<li><a href="#">Cookiebeleid</a></li>
								<li><a href="#">Statuten</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		`
	}
}

customElements.define('my-footer', MyFooter)



// Every repeatable thing in the head portion of each page.
class MyHeadinfo extends HTMLElement{
	connectedCallback() {
		this.innerHTML = `
		
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		
		`
	}
}

customElements.define('my-headinfo', MyHeadinfo)