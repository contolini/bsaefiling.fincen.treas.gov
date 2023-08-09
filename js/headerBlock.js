var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function USFlag() {
	return React.createElement(
		"div",
		{ className: "usa-banner" },
		React.createElement(
			"div",
			{ className: "usa-accordion" },
			React.createElement(
				"header",
				{ className: "usa-banner__header" },
				React.createElement(
					"div",
					{ className: "usa-banner__inner" },
					React.createElement(
						"div",
						{ className: "grid-col-auto" },
						React.createElement("img", { className: "usa-banner__header-flag", src: "uswds/img/us_flag_small.png", alt: "U.S. flag" })
					),
					React.createElement(
						"div",
						{ className: "grid-col-fill tablet:grid-col-auto" },
						React.createElement(
							"p",
							{ className: "usa-banner__header-text" },
							"An official website of the United States government"
						)
					)
				)
			)
		)
	);
}

var HeaderBlock = function (_React$Component) {
	_inherits(HeaderBlock, _React$Component);

	function HeaderBlock() {
		_classCallCheck(this, HeaderBlock);

		return _possibleConstructorReturn(this, (HeaderBlock.__proto__ || Object.getPrototypeOf(HeaderBlock)).apply(this, arguments));
	}

	_createClass(HeaderBlock, [{
		key: "render",
		value: function render() {
			var alertBanner = [];
			if (noticeObj.newsAlerts.length > 0) {
				alertBanner.push(React.createElement(
					"div",
					{ className: "padding-y-1 bg-accent-warm-lighter font-sans-sm text-bold text-center", id: "noticeMsg" },
					React.createElement(
						"a",
						{ className: "text-primary-darker", href: publicRootUrl + "Notice.html", rel: "noopener", target: "_blank" },
						noticeObj.alertTitle
					)
				));
			}

			var bannerText = [];
			if (serverId != "") {
				bannerText.push(React.createElement(
					"div",
					{ className: "grid-col-8 margin-top-1 margin-left-neg-2 text-base-lightest" },
					React.createElement(
						"div",
						{ "class": "serverId grid-row margin-bottom-1 font-serif-lg text-base-lightest" },
						serverId
					),
					React.createElement(
						"div",
						{ className: "grid-row font-serif-2xl text-base-lightest" },
						"BSA E-Filing System"
					),
					React.createElement(
						"div",
						{ className: "grid-row margin-top-1 font-serif-md text-ls-2" },
						"Financial Crimes Enforcement Network"
					)
				));
			} else {
				bannerText.push(React.createElement(
					"div",
					{ className: "grid-col-8 margin-top-4 margin-left-neg-2 text-base-lightest" },
					React.createElement(
						"div",
						{ className: "grid-row font-serif-2xl text-base-lightest" },
						"BSA E-Filing System"
					),
					React.createElement(
						"div",
						{ className: "grid-row margin-top-1 font-serif-md text-ls-2" },
						"Financial Crimes Enforcement Network"
					)
				));
			}

			return React.createElement(
				"div",
				{ id: "headerBlockContainer" },
				React.createElement(USFlag, null),
				React.createElement("div", { className: "usa-overlay" }),
				React.createElement(
					"header",
					{ className: "usa-header usa-header--extended bg-primary" },
					React.createElement(
						"div",
						{ className: "usa-navbar" },
						React.createElement(
							"div",
							{ className: "usa-logo", id: "extended-logo" },
							React.createElement(
								"a",
								{ href: publicRootUrl + "main.html", title: "Home", "aria-label": "Home", className: "display-block" },
								React.createElement(
									"div",
									{ className: "grid-row" },
									React.createElement(
										"div",
										{ className: "width-4 position-relative" },
										React.createElement("img", { src: "images/server_id.jpg", className: "position-absolute bottom-0", id: "serverId", alt: "Server Identification" })
									),
									React.createElement(
										"div",
										{ className: "grid-col-3" },
										React.createElement("img", { src: "images/FinCEN_eagle_insignia.webp", id: "insignia", alt: "FinCEN insignia" })
									),
									bannerText
								)
							)
						),
						React.createElement(
							"button",
							{ className: "usa-menu-btn" },
							"Menu"
						)
					),
					React.createElement(
						"nav",
						{ "aria-label": "Primary navigation", className: "usa-nav bg-primary-dark" },
						React.createElement(
							"div",
							{ className: "usa-nav__inner" },
							React.createElement(
								"button",
								{ className: "usa-nav__close" },
								React.createElement("img", { src: "uswds/img/close.svg", alt: "close" })
							),
							React.createElement(
								"ul",
								{ className: "usa-nav__primary usa-accordion" },
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"a",
										{ className: "usa-nav__link", href: publicRootUrl + "main.html" },
										React.createElement(
											"span",
											null,
											"HOME"
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"button",
										{ className: "usa-accordion__button usa-nav__link", "aria-expanded": "false", "aria-controls": "extended-nav-section-one" },
										React.createElement(
											"span",
											null,
											"ABOUT"
										)
									),
									React.createElement(
										"ul",
										{ id: "extended-nav-section-one", className: "usa-nav__submenu" },
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "AboutBsa.html" },
												"BSA E-Filing System"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "Benefits.html" },
												"Benefits"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "Costs.html" },
												"Costs"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "SupportedForms.html" },
												"Supported Forms"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "MethodsOfTransmission.html" },
												"Supported Methods of Transmission"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "SystemRequirements.html" },
												"System Requirements"
											)
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"button",
										{ className: "usa-accordion__button usa-nav__link", "aria-expanded": "false", "aria-controls": "extended-nav-section-two" },
										React.createElement(
											"span",
											null,
											"RESOURCES"
										)
									),
									React.createElement(
										"ul",
										{ id: "extended-nav-section-two", className: "usa-nav__submenu" },
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "FilingInformation.html" },
												"Filing Information"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "NAICSCodeList.html" },
												"NAICS Code List"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "SDTMInfo.html" },
												"Secure Direct Transfer Mode"
											)
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"a",
										{ className: "usa-nav__link", href: publicRootUrl + "Newsroom.html" },
										React.createElement(
											"span",
											null,
											"NEWSROOM"
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"button",
										{ className: "usa-accordion__button usa-nav__link", "aria-expanded": "false", "aria-controls": "extended-nav-section-three" },
										React.createElement(
											"span",
											null,
											"FILE FBAR"
										)
									),
									React.createElement(
										"ul",
										{ id: "extended-nav-section-three", className: "usa-nav__submenu" },
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "NoRegFBARFiler.html" },
												"File FBAR ( PDF | HTML )"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: checkSubStat },
												"Check Submission Status"
											)
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"button",
										{ className: "usa-accordion__button usa-nav__link", "aria-expanded": "false", "aria-controls": "extended-nav-section-four" },
										React.createElement(
											"span",
											null,
											"ENROLL"
										)
									),
									React.createElement(
										"ul",
										{ id: "extended-nav-section-four", className: "usa-nav__submenu" },
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "Enroll_Now.html" },
												"Becoming a Registered E-Filer"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: publicRootUrl + "InitialUserDesignation.html" },
												"Initial User Designation"
											)
										),
										React.createElement(
											"li",
											{ className: "usa-nav__submenu-item" },
											React.createElement(
												"a",
												{ href: privateRootUrl + "AddUser" },
												"Supervisory User Enrollment"
											)
										)
									)
								),
								React.createElement(
									"li",
									{ className: "usa-nav__primary-item" },
									React.createElement(
										"a",
										{ className: "usa-nav__link", href: publicRootUrl + "Help.html" },
										React.createElement(
											"span",
											null,
											"HELP"
										)
									)
								)
							),
							React.createElement(
								"div",
								{ className: "usa-nav__secondary" },
								React.createElement(
									"ul",
									{ className: "usa-nav__secondary-links" },
									React.createElement(
										"li",
										{ className: "usa-nav__secondary-item" },
										React.createElement(
											"a",
											{ href: privateRootUrl + "PublicAccess" },
											"Login"
										)
									),
									React.createElement(
										"li",
										{ className: "usa-nav__secondary-item" },
										React.createElement(
											"a",
											{ href: publicRootUrl + "NoRegFBARFiler.html" },
											"File FBAR"
										)
									)
								),
								React.createElement(
									"form",
									{ className: "usa-search usa-search--small", action: publicRootUrl + "Help.html", method: "GET", autocomplete: "off" },
									React.createElement(
										"div",
										{ role: "search" },
										React.createElement(
											"label",
											{ className: "usa-sr-only", "for": "extended-search-field-small" },
											"Search small"
										),
										React.createElement("input", { className: "usa-input", id: "extended-search-field-small", type: "search", name: "searchStr", placeholder: "Search", maxlength: "200" }),
										React.createElement(
											"button",
											{ className: "usa-button bg-cyan", type: "submit", onClick: submitSearchForm },
											React.createElement(
												"span",
												{ className: "usa-sr-only" },
												"Search"
											)
										)
									)
								)
							)
						)
					)
				),
				alertBanner
			);
		}
	}]);

	return HeaderBlock;
}(React.Component);

ReactDOM.render(React.createElement(HeaderBlock, null), document.getElementById('headerBlock'));

function submitSearchForm() {
	document.getElementById("searchBarForm").submit();
}