/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
	return (
		<footer className={`${classText ? classText : ""}`}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="item md-mb50">
							<div className="title">
								<h5>Contact Us</h5>
							</div>
							<ul>
								<li>
									<span className="icon pe-7s-map-marker"></span>
									<div className="cont">
										<h6>Officeal Address</h6>
										<p style={{ color: "#fff" }}>ABC, Pune</p>
									</div>
								</li>
								<li>
									<span className="icon pe-7s-mail"></span>
									<div className="cont">
										<h6>Email Us</h6>
										<p style={{ color: "#fff" }}>support@peaceinteriors.com</p>
									</div>
								</li>
								<li>
									<span className="icon pe-7s-call"></span>
									<div className="cont">
										<h6>Call Us</h6>
										<p style={{ color: "#fff" }}>+123456789</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4">
						{/* <div className="item md-mb50">
							<div className="title">
								<h5>Recent News</h5>
							</div>
							<ul>
								<li>
									<div className="img">
										<img src="/assets/img/blog/1.jpg" alt="" />
									</div>
									<div className="sm-post">
										<p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
										<span className="date">14 Jan 2022</span>
									</div>
								</li>
								<li>
									<div className="img">
										<img src="/assets/img/blog/2.jpg" alt="" />
									</div>
									<div className="sm-post">
										<p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
										<span className="date">14 Jan 2022</span>
									</div>
								</li>
								<li>
									<div className="subscribe">
										<input type="text" placeholder="Type Your Email" />
										<span className="subs pe-7s-paper-plane"></span>
									</div>
								</li>
							</ul>
						</div> */}
					</div>
					<div className="col-lg-4">
						<div className="item">
							<div className="logo">
								<img src="/assets/img/logo.png" alt="" />
							</div>
							<div className="social">
								<Link href="#">
									<a>
										<i className="fab fa-facebook-f"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-twitter"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-instagram"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-youtube"></i>
									</a>
								</Link>
							</div>
							<div className="copy-right">
								<p>© 2023, Peace Interiors.</p>
							</div>
						</div>
					</div>

					{/* <div className="col-lg-4">
						<div className="item">
							<div className="logo">
								<img src="/assets/img/logo.png" alt="" />
							</div>
							<div className="social">
								<Link href="#">
									<a>
										<i className="fab fa-facebook-f"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-twitter"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-instagram"></i>
									</a>
								</Link>
								<Link href="#">
									<a>
										<i className="fab fa-youtube"></i>
									</a>
								</Link>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
