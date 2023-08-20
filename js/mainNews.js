var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNews = function (_React$Component) {
	_inherits(MainNews, _React$Component);

	function MainNews() {
		_classCallCheck(this, MainNews);

		return _possibleConstructorReturn(this, (MainNews.__proto__ || Object.getPrototypeOf(MainNews)).apply(this, arguments));
	}

	_createClass(MainNews, [{
		key: "render",
		value: function render() {
			var MAX_NEWS_ITEMS = 5;
			var newsLinks = [];

			for (var newsIndex = 0; newsIndex < MAX_NEWS_ITEMS; newsIndex++) {
				var origTitle = newsroomContents[newsIndex].title;
				var finalTitle = "";
				if (origTitle.length > 45) {
					finalTitle = origTitle.substring(0, 45) + "...";
				} else {
					finalTitle = origTitle;
				}
				newsLinks.push(React.createElement(
					"div",
					{ className: "grid-row padding-bottom-1" },
					React.createElement(
						"span",
						{ className: "text-base-dark margin-bottom-0 margin-right-1" },
						dateConverter(newsroomContents[newsIndex].date)
					),
					React.createElement(
						"a",
						{ href: newsroomContents[newsIndex].link, className: "font-sans-xs text-primary" },
						finalTitle
					)
				));
			}

			return React.createElement(
				"div",
				{ className: "grid-row grid-gap" },
				React.createElement(
					"div",
					{ className: "tablet:grid-col padding-3 font-sans-md" },
					newsLinks,
					React.createElement(
						"div",
						{ className: "grid-row" },
						React.createElement(
							"a",
							{ href: "Newsroom.html", className: "usa-link pin-bottom" },
							"More News"
						)
					)
				)
			);
		}
	}]);

	return MainNews;
}(React.Component);

ReactDOM.render(React.createElement(MainNews, null), document.getElementById('mainNewsReactContainer'));

function dateConverter(dateIn) {
	//ie. 20201227 would be converted to Dec 27 2020
	var tmpDate = new Date(dateIn.substring(0, 4), dateIn.substring(4, 6) - 1, dateIn.substring(6, 8));
	return tmpDate.toDateString().slice(4);
}