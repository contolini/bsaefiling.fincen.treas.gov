var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterBlock = function (_React$Component) {
	_inherits(FooterBlock, _React$Component);

	function FooterBlock() {
		_classCallCheck(this, FooterBlock);

		return _possibleConstructorReturn(this, (FooterBlock.__proto__ || Object.getPrototypeOf(FooterBlock)).apply(this, arguments));
	}

	_createClass(FooterBlock, [{
		key: "handleClick",
		value: function handleClick(link, e) {
			e.preventDefault();
			openExternalPage(link);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var links = [];
			if (privateFooter) {
				links.push(React.createElement(
					"ul",
					{ className: "grid-row grid-gap" },
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: contextPath + "/DashboardHome" },
							"Home"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "AboutBsa.html", rel: "noopener", target: "_blank" },
							"About"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "WebsiteComments.html", rel: "noopener", target: "_blank" },
							"Feedback"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "Help.html", rel: "noopener", target: "_blank" },
							"Help"
						)
					)
				));
			} else {
				links.push(React.createElement(
					"ul",
					{ className: "grid-row grid-gap" },
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "main.html" },
							"Home"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "AboutBsa.html" },
							"About"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "WebsiteComments.html" },
							"Feedback"
						)
					),
					React.createElement(
						"li",
						{ className: "mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content" },
						React.createElement(
							"a",
							{ className: "usa-footer__primary-link", href: publicRootUrl + "Help.html" },
							"Help"
						)
					)
				));
			}

			return React.createElement(
				"div",
				{ id: "footerContentContainer" },
				React.createElement(
					"footer",
					{ className: "usa-footer usa-footer--slim" },
					React.createElement(
						"div",
						{ className: "grid-container usa-footer__return-to-top" },
						React.createElement(
							"a",
							{ href: "#main-content" },
							"Return to top"
						)
					),
					React.createElement(
						"div",
						{ className: "usa-footer__primary-section" },
						React.createElement(
							"div",
							{ className: "usa-footer__primary-container grid-row" },
							React.createElement(
								"div",
								{ className: "mobile-lg:grid-col-8" },
								React.createElement(
									"nav",
									{ className: "usa-footer__nav", "aria-label": "Footer navigation" },
									links
								)
							),
							React.createElement(
								"div",
								{ className: "mobile-lg:grid-col-4" },
								React.createElement(
									"address",
									{ className: "usa-footer__address" },
									React.createElement(
										"div",
										{ className: "grid-row" },
										React.createElement(
											"div",
											{ className: "grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto desktop:margin-left-auto desktop:margin-right-2" },
											React.createElement(
												"div",
												{ className: "usa-footer__contact-info" },
												React.createElement(
													"a",
													{ className: "text-bold", href: privateRootUrl + "HelpTicketForm", rel: "noopener", target: "_blank" },
													"Contact Us"
												)
											)
										)
									)
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "usa-footer__secondary-section" },
						React.createElement(
							"div",
							{ className: "grid-container" },
							React.createElement(
								"div",
								{ className: "grid-row grid-gap" },
								React.createElement(
									"div",
									{ className: "grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2" },
									React.createElement(
										"div",
										{ className: "mobile-lg:grid-col-auto" },
										React.createElement("img", { className: "width-10", src: "images/FinCEN_eagle_insignia_blue.webp", alt: "FinCEN insignia" })
									),
									React.createElement(
										"div",
										{ className: "mobile-lg:grid-col-auto" },
										React.createElement(
											"h3",
											{ className: "usa-footer__logo-heading desktop:margin-top-3" },
											"BSA E-Filing"
										)
									)
								),
								React.createElement(
									"div",
									{ className: "mobile-lg:grid-col-6" },
									React.createElement(
										"div",
										{ className: "grid-row desktop:margin-top-6" },
										React.createElement(
											"div",
											{ className: "grid-col-auto desktop:margin-left-auto" },
											React.createElement(
												"a",
												{ className: "text-ink", href: "", onClick: function onClick(e) {
														return _this2.handleClick('https://www.treasury.gov', e);
													} },
												"U.S. Dept. Of Treasury"
											),
											"\xA0|\xA0",
											React.createElement(
												"a",
												{ className: "text-ink", href: "", onClick: function onClick(e) {
														return _this2.handleClick('https://www.fincen.gov', e);
													} },
												"FinCEN.gov"
											),
											"\xA0|\xA0",
											React.createElement(
												"a",
												{ className: "text-ink", href: "", onClick: function onClick(e) {
														return _this2.handleClick('https://www.fincen.gov/privacy-security', e);
													} },
												"Privacy Policy"
											),
											"\xA0|\xA0",
											React.createElement(
												"a",
												{ className: "text-ink", href: "", onClick: function onClick(e) {
														return _this2.handleClick('https://www.fincen.gov/accessibility', e);
													} },
												"Accessibility"
											)
										)
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return FooterBlock;
}(React.Component);

ReactDOM.render(React.createElement(FooterBlock, null), document.getElementById('footer'));