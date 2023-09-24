var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function InfoBlockHL(props) {
  //with hyperlink
  return React.createElement(
    'div',
    { id: props.id, className: 'infoBlock',
      onClick: function onClick() {
        return window.open(props.hyperlink, '_blank', 'noopener');
      } },
    React.createElement(
      'div',
      { className: 'infoBlockTitle' },
      props.title
    ),
    React.createElement('p', { dangerouslySetInnerHTML: { __html: props.description } })
  );
}

function InfoBlock(props) {
  //without hyperlink
  return React.createElement(
    'div',
    { className: 'margin-bottom-1 border-1px border-solid border-base' },
    React.createElement(
      'h2',
      { className: 'usa-accordion__heading' },
      React.createElement(
        'button',
        { className: 'usa-accordion__button',
          'aria-expanded': 'false',
          'aria-controls': props.idx },
        props.title
      )
    ),
    React.createElement(
      'div',
      { id: props.idx, className: 'usa-accordion__content usa-prose', hidden: true },
      React.createElement('p', { dangerouslySetInnerHTML: { __html: props.description } })
    )
  );
}

function CatCheckbox(props) {
  var checkBox = props.checked ? true : false;
  var tmpId = props.id.split(' ').join("_");

  if (props.type == "main") {
    //type: "main" or "sub"
    return React.createElement(
      'div',
      { className: 'usa-checkbox' },
      React.createElement('input', { className: 'usa-checkbox__input', id: tmpId, type: 'checkbox', onClick: function onClick() {
          props.onClickFunc(!props.checked);
        }, checked: checkBox }),
      React.createElement(
        'label',
        { className: 'usa-checkbox__label font-sans-sm text-bold', 'for': tmpId },
        props.name
      )
    );
  } else if (props.type = "sub") {
    return (//type: "main" or "sub"
      React.createElement(
        'div',
        { className: 'usa-checkbox margin-left-105' },
        React.createElement('input', { className: 'usa-checkbox__input', id: tmpId, type: 'checkbox', onClick: function onClick() {
            props.onClickFunc(!props.checked);
          }, checked: checkBox }),
        React.createElement(
          'label',
          { className: 'usa-checkbox__label font-sans-sm', 'for': tmpId },
          props.name
        )
      )
    );
  }
}

var CatSelectorBar = function (_React$Component) {
  _inherits(CatSelectorBar, _React$Component);

  function CatSelectorBar(props) {
    _classCallCheck(this, CatSelectorBar);

    var _this = _possibleConstructorReturn(this, (CatSelectorBar.__proto__ || Object.getPrototypeOf(CatSelectorBar)).call(this, props));

    var mainInit = Array(5).fill(false);
    var subInit = Array(maxSubCount.length);
    for (var i = 0; i < maxSubCount.length; i++) {
      subInit[i] = Array(maxSubCount[i]).fill(false);
    }
    _this.state = {
      mainChecked: mainInit,
      subChecked: subInit
    };
    return _this;
  }

  _createClass(CatSelectorBar, [{
    key: 'mainCheckHandler',
    value: function mainCheckHandler(index, currName, checked) {
      //console.debug("mainCheckHandler- index: "+index+", currName: "+currName+", checked: "+checked);
      var tmpMain = this.state.mainChecked.slice();
      tmpMain[index] = checked;
      var tmpSub = this.state.subChecked.slice();
      for (var i = 0; i < tmpSub[index].length; i++) {
        tmpSub[index][i] = checked;
      }
      this.setState({
        mainChecked: tmpMain,
        subChecked: tmpSub
      });
      //console.debug("mainCheckHandler- tmpCount[index]"+tmpCount[index]+", tmpMain[index]"+tmpMain[index]);
      //console.debug("mainCheckHandler- maxSubCount[index]"+maxSubCount[index]+", checked"+checked);

      this.props.catUpdateFunc("main", currName, checked);
    }
  }, {
    key: 'subCheckHandler',
    value: function subCheckHandler(parentIndex, selfIndex, currName, checked) {
      var tmpSub = this.state.subChecked.slice();
      var trueCount = 0;
      for (var i = 0; i < tmpSub[parentIndex].length; i++) {
        if (tmpSub[parentIndex][i]) {
          trueCount++;
        }
      }

      if (checked) {
        tmpSub[parentIndex][selfIndex] = true;
        if (trueCount == maxSubCount[parentIndex] - 1) {
          var tmpMain = this.state.mainChecked.slice();
          tmpMain[parentIndex] = true;
          this.setState({
            mainChecked: tmpMain
          });
        }
      } else {
        tmpSub[parentIndex][selfIndex] = false;
        if (trueCount == maxSubCount[parentIndex]) {
          var _tmpMain = this.state.mainChecked.slice();
          _tmpMain[parentIndex] = false;
          this.setState({
            mainChecked: _tmpMain
          });
        }
      }

      this.setState({
        subChecked: tmpSub
      });

      this.props.catUpdateFunc("sub", currName, checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var catSelectorContents = [];

      var _loop = function _loop(i) {
        var currName = mainCats[i];
        catSelectorContents.push(React.createElement(CatCheckbox, {
          key: i,
          type: 'main',
          name: currName,
          id: currName,
          onClickFunc: function onClickFunc(checked) {
            return _this2.mainCheckHandler(i, currName, checked);
          },
          checked: _this2.state.mainChecked[i]
        }));

        var subCatArr = getSubCat[currName];
        if (subCatArr != null) {
          var subCatSelectorContents = [];

          var _loop2 = function _loop2(j) {
            var currSubName = subCatArr[j];
            var currCatName = void 0;

            if (currName == "Batch Entry") {
              currCatName = currSubName + "(B)";
            } else {
              currCatName = currSubName;
            }

            subCatSelectorContents.push(React.createElement(CatCheckbox, {
              key: i + "" + j,
              type: 'sub',
              name: currSubName,
              id: currCatName,
              onClickFunc: function onClickFunc(checked) {
                return _this2.subCheckHandler(i, j, currCatName, checked);
              },
              checked: _this2.state.subChecked[i][j]
            }));
          };

          for (var j = 0; j < subCatArr.length; j++) {
            _loop2(j);
          }

          catSelectorContents.push(React.createElement(
            'div',
            { key: "sub" + i, className: 'subCatsContainer' },
            subCatSelectorContents
          ));
        }
      };

      for (var i = 0; i < mainCats.length; i++) {
        _loop(i);
      }

      return React.createElement(
        'div',
        { id: 'catSelectorContainer', className: 'float-left' },
        React.createElement(
          'div',
          { className: 'padding-y-2 bg-primary font-sans-md text-base-lightest text-bold text-center' },
          "Search filter"
        ),
        React.createElement(
          'div',
          { id: 'catSelector', className: 'padding-top-105 padding-bottom-205 padding-x-3' },
          catSelectorContents
        )
      );
    }
  }]);

  return CatSelectorBar;
}(React.Component);

var HelpApp = function (_React$Component2) {
  _inherits(HelpApp, _React$Component2);

  function HelpApp(props) {
    _classCallCheck(this, HelpApp);

    var _this3 = _possibleConstructorReturn(this, (HelpApp.__proto__ || Object.getPrototypeOf(HelpApp)).call(this, props));

    _this3.updateCat = _this3.updateCat.bind(_this3);
    _this3.clearSidebar = _this3.clearSidebar.bind(_this3);
    var arrInit = [];
    var searchStr = getURLParameter("searchStr");
    _this3.state = {
      filterString: searchStr ? searchStr : "",
      categories: arrInit
    };
    return _this3;
  }

  _createClass(HelpApp, [{
    key: 'updateFStr',
    value: function updateFStr(newFStr) {
      //console.debug("updateFStr called - newFStr: " + newFStr);
      this.setState({
        filterString: newFStr
      });
    }
  }, {
    key: 'updateCat',
    value: function updateCat(type, category, checked) {
      //console.debug("updateCat called - category: "+category+", checked: "+checked);
      var oldCats = this.state.categories.slice();
      //console.debug("updateCat - oldCats: "+oldCats);

      if (type == "main" && category != "Other") {
        var subCatNames = getSubCat[category];
        var newCats = [];

        if (category == "Batch Entry") {
          for (var _i = 0; _i < subCatNames.length; _i++) {
            //console.debug("updateCat loop - index: "+i+", subCatNames[i]: "+subCatNames[i]+", catNameValDict[subCatNames[i]]: "+catNameValDict[subCatNames[i]]+", tagsDb[catNameValDict[subCatNames[i]]]: "+tagsDb[catNameValDict[subCatNames[i]]]);
            newCats[_i] = tagsDb[catNameValDict[subCatNames[_i] + "(B)"]];
          }
        } else {
          for (var _i2 = 0; _i2 < subCatNames.length; _i2++) {
            //console.debug("updateCat loop - index: "+i+", subCatNames[i]: "+subCatNames[i]+", catNameValDict[subCatNames[i]]: "+catNameValDict[subCatNames[i]]+", tagsDb[catNameValDict[subCatNames[i]]]: "+tagsDb[catNameValDict[subCatNames[i]]]);
            newCats[_i2] = tagsDb[catNameValDict[subCatNames[_i2]]];
          }
        }

        if (checked) {
          //merge tags and remove duplicates (checks all subcats)
          //console.debug("updateCat - newCats: "+newCats);
          oldCats = oldCats.concat(newCats);
          //console.debug("updateCat - oldCats before filter: "+oldCats);
          oldCats = oldCats.filter(function (item, index) {
            return oldCats.indexOf(item) === index;
          });
          //console.debug("updateCat - oldCats after filter: "+oldCats);
        } else {
          //unchecking main category, uncheck all sub categories 
          oldCats = oldCats.filter(function (currCat) {
            return newCats.indexOf(currCat) < 0;
          });
        }
      } else {
        //console.debug("updateCat- category: "+category+", checked: "+checked);
        var newCatTag = tagsDb[catNameValDict[category]];
        //console.debug("updateCat- newCatTag: "+newCatTag);
        if (checked) {
          //add new cat
          oldCats.push(newCatTag);
        } else {
          //remove cat
          for (var i = 0; i < oldCats.length; i++) {
            if (oldCats[i] === newCatTag) {
              oldCats.splice(i, 1);
              break;
            }
          }
        }
      }
      this.setState({
        categories: oldCats
      });
    }
  }, {
    key: 'clearSidebar',
    value: function clearSidebar() {
      var emptyArr = [];
      this.setState({
        categories: emptyArr
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var content;
      var sideBarLinkBlocks = [];

      if (this.state.filterString != "") {
        content = getContent(this.state.filterString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(" "), this.state.categories);
      } else {
        var emptyArr = [];
        content = getContent(emptyArr, this.state.categories);
        sideBarLinkBlocks.push(React.createElement(
          'div',
          { className: 'usa-alert usa-alert--slim usa-alert--info margin-bottom-1' },
          React.createElement(
            'div',
            { className: 'usa-alert__body' },
            React.createElement(
              'p',
              { className: 'usa-alert__text' },
              'Shown below are the most popular inquiries. If these are not helpful, try the keyword search above.'
            )
          )
        ));
      }

      var token = this.state.categories.join("") + this.state.filterString;
      if (content === undefined || content.length == 0) {
        sideBarLinkBlocks.push();
      } else {
        for (var i = 0; i < content.length; i++) {
          //console.debug("render - idx: " + i);
          sideBarLinkBlocks.push(React.createElement(InfoBlock, {
            key: i,
            idx: token + i,
            title: content[i].title,
            description: content[i].description
          }));
        }
      }

      return React.createElement(
        'div',
        { id: 'helpAppContainer' },
        React.createElement(
          'div',
          { id: 'helpSearchBarContainer' },
          React.createElement(
            'div',
            { id: 'helpSearchBar', className: 'leftSearchIcon' },
            React.createElement('input', { id: 'helpSearchInput', type: 'search', placeholder: 'Keyword search', onChange: function onChange() {
                _this4.updateFStr(document.getElementById('helpSearchInput').value);
              }, value: this.state.filterString })
          )
        ),
        React.createElement(
          'div',
          { id: 'filterAndResults' },
          React.createElement(CatSelectorBar, {
            catUpdateFunc: function catUpdateFunc(type, catName, checked) {
              return _this4.updateCat(type, catName, checked);
            }
          }),
          React.createElement(
            'div',
            { id: 'helpApp' },
            React.createElement(
              'div',
              { className: 'usa-accordion', key: token },
              sideBarLinkBlocks
            )
          )
        )
      );
    }
  }]);

  return HelpApp;
}(React.Component);

ReactDOM.render(React.createElement(HelpApp, { ref: function ref(sidebar) {
    window.sidebar = sidebar;
  } }), document.getElementById('helpAppReactContainer'));

/*
document.getElementById("selectSubCategory").addEventListener("change", event => {
  //console.debug("selectSubCategory changed.");
  updateHelpApp();
});

document.getElementById("selectCategory").addEventListener("change", event => {
  //console.debug("selectCategory changed.");
  updateHelpApp();
});
*/
function updateHelpApp() {
  //console.debug("updateHelpApp called.");
  document.getElementById("infoBlocksContainer").scrollTop = 0;

  var subCategoryValue = document.getElementById("selectSubCategory").value;
  var categorySelectedValue = document.getElementById("selectCategory").value;

  if (subCategoryValue != "") {
    if (categorySelectedValue == "Batch") {
      window.sidebar.updateCat(subCategoryValue.concat(" (B)"));
    } else {
      window.sidebar.updateCat(subCategoryValue);
    }
  } else if (categorySelectedValue != "") {
    window.sidebar.updateCat(categorySelectedValue);
  } else {
    window.sidebar.clearSidebar();
  }
}

function getContent(tagsArr, categories) {
  var fetchedInfoBlocks = [];

  if (tagsArr === undefined) {
    return fetchedInfoBlocks;
  }

  if (tagsArr.length == 0) {
    var initArr = ["MOST_POPULAR"];
    fetchedInfoBlocks = getInfoBlocks(sortMatches(getTitleMatches(initArr, categories)));
  } else {
    fetchedInfoBlocks = getInfoBlocks(sortMatches(getTitleMatches(tagsArr, categories)));
  }

  if (fetchedInfoBlocks.length > 0) {
    return fetchedInfoBlocks;
  }
  return fetchedInfoBlocks;
}

function getInfoBlocks(sortedMatches) {
  var retInfoBlocks = [];

  //console.debug("getInfoBlocks - sortedMatches: " + sortedMatches);

  for (var idx = 0; idx < sortedMatches.length; idx++) {
    retInfoBlocks.push(helpBlockArr[sortedMatches[idx][1][1]]);
  }

  //console.debug("getInfoBlocks - retInfoBlocks: " + retInfoBlocks);

  return retInfoBlocks;
}

//input is a dictionary
function sortMatches(input) {
  var MAX_INFO_BLOCKS = 99;

  var items = Object.keys(input).map(function (key) {
    //console.debug("sortMatches - [" + key + ", " + input[key] + "]");
    return [key, input[key]];
  });

  // Sort the array based on the number of matches (index: 1)
  items.sort(function (first, second) {
    return second[1][0] - first[1][0];
  });

  //console.debug("sortMatches - items: " + items);
  if (items.length > MAX_INFO_BLOCKS) {
    items = items.slice(0, MAX_INFO_BLOCKS);
  }
  return items;
}

//Search json/js for infoBlocks that pertain to the tags
function getTitleMatches(tagsArr, categories) {
  var MIN_WEIGHT = 1;
  var FILTER_WEIGHT = MIN_WEIGHT + 5;
  var returnDict = {};
  console.debug("getTitleMatches - [" + tagsArr + "], [" + categories + "]");

  if (categories === undefined || categories.length == 0) {
    var _loop3 = function _loop3(itemIdx) {
      var weightedSum = 0;
      var tmpArr = tagsArr.slice();

      tmpArr.filter(function (word) {
        var currWeight = helpBlockArr[itemIdx].tags[word];
        var hasMatch = currWeight > 0;
        if (hasMatch) {
          weightedSum += currWeight;
        }
        return hasMatch;
      });

      if (weightedSum >= MIN_WEIGHT) {
        //console.debug("getTitleMatches - " + helpBlockArr[itemIdx].tags + ", " + weightedSum);
        returnDict[helpBlockArr[itemIdx].title] = [weightedSum, itemIdx];
      }
    };

    //console.debug("getTitleMatches: there are no cat filters");
    for (var itemIdx = 0; itemIdx < helpBlockArr.length; itemIdx++) {
      _loop3(itemIdx);
    }
  } else {
    //console.debug("getTitleMatches: there are cat filters");
    var newTagsArr = categories.concat(tagsArr);
    //console.debug("getTitleMatches- newTagsArr: "+newTagsArr);

    var _loop4 = function _loop4(itemIdx) {
      var weightedSum = 0;
      var tmpArr = newTagsArr.slice();

      tmpArr.filter(function (word) {
        var hasMatch = word in helpBlockArr[itemIdx].tags;
        if (hasMatch) {
          weightedSum += helpBlockArr[itemIdx].tags[word];
          //console.debug("getTitleMatches match found - word: "+word+", weight: "+helpBlockArr[itemIdx].tags[word]);
          //console.debug("getTitleMatches in tags: "+helpBlockArr[itemIdx].tags);
        }
        return hasMatch;
      });

      //console.debug("getTitleMatches before IF- " + helpBlockArr[itemIdx].tags + ", " + weightedSum);
      if (weightedSum >= FILTER_WEIGHT) {
        //console.debug("getTitleMatches after IF- " + helpBlockArr[itemIdx].tags + ", " + weightedSum);
        returnDict[helpBlockArr[itemIdx].title] = [weightedSum, itemIdx];
      }
    };

    for (var itemIdx = 0; itemIdx < helpBlockArr.length; itemIdx++) {
      _loop4(itemIdx);
    }
  }

  return returnDict;
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}