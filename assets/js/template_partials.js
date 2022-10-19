// Entire footer
class MyFooter extends HTMLElement{
	connectedCallback() {
		this.innerHTML = `
		
		<section id="footer">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<ul class="social">
							<li><a class="icon brands fa-linkedin-in" href="https://www.linkedin.com/company/studievereniging-null/" target="_blank"><span class="label">LinkedIn</span></a></li>
							<li><a class="icon brands fa-instagram" href="https://www.instagram.com/s.v.null/" target="_blank"><span class="label">Instagram</span></a></li>
							<li><a class="icon fa-envelope" href="mailto:svnull@che.nl" target="_blank"><span class="label">Mail</span></a></li>
						</ul>

						<div id="copyright">
							<ul class="links">
								<li><a href="statuten">Statuten</a></li>
								<li><a href="privacy&cookies">Privacy & Cookies</a></li>
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