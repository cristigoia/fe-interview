import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-LLMH55BD.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);

// app/global.css.ts
var global_css_exports = {};
__export(global_css_exports, {
  atIcon: () => atIcon,
  atMenu: () => atMenu,
  atMenuActive: () => atMenuActive,
  atMenuImg: () => atMenuImg,
  atMenuLi: () => atMenuLi,
  atMenuLiFocused: () => atMenuLiFocused,
  atMenuLiName: () => atMenuLiName,
  atMenuUl: () => atMenuUl,
  atMenuWrap: () => atMenuWrap,
  atToggle: () => atToggle,
  button: () => button,
  buttonActive: () => buttonActive,
  buttonIcon: () => buttonIcon,
  chatbox: () => chatbox,
  chatboxActive: () => chatboxActive,
  chatboxLeft: () => chatboxLeft,
  chatboxRight: () => chatboxRight,
  container: () => container,
  containerRight: () => containerRight,
  header: () => header,
  logo: () => logo,
  logoIcon: () => logoIcon,
  menu: () => menu,
  searchTag: () => searchTag,
  searchTagActive: () => searchTagActive,
  searchTagCloseIcon: () => searchTagCloseIcon,
  searchTagWrap: () => searchTagWrap,
  textarea: () => textarea,
  textareaPlaceholder: () => textareaPlaceholder
});
var header = "global_header__1oq7a2b0";
var logo = "global_logo__1oq7a2b1";
var menu = "global_menu__1oq7a2b2";
var container = "global_container__1oq7a2b3";
var containerRight = "global_containerRight__1oq7a2b4";
var chatbox = "global_chatbox__1oq7a2b5";
var chatboxLeft = "global_chatboxLeft__1oq7a2b6";
var chatboxRight = "global_chatboxRight__1oq7a2b7";
var chatboxActive = "global_chatboxActive__1oq7a2b8";
var textarea = "global_textarea__1oq7a2b9";
var textareaPlaceholder = "global_textareaPlaceholder__1oq7a2ba";
var buttonIcon = "global_buttonIcon__1oq7a2bb";
var button = "global_button__1oq7a2bc";
var buttonActive = "global_buttonActive__1oq7a2bd";
var atIcon = "global_atIcon__1oq7a2be";
var logoIcon = "global_logoIcon__1oq7a2bf";
var atToggle = "global_atToggle__1oq7a2bg";
var atMenuWrap = "global_atMenuWrap__1oq7a2bh";
var atMenu = "global_atMenu__1oq7a2bi";
var atMenuActive = "global_atMenuActive__1oq7a2bj";
var atMenuUl = "global_atMenuUl__1oq7a2bk";
var atMenuLi = "global_atMenuLi__1oq7a2bl";
var atMenuLiFocused = "global_atMenuLiFocused__1oq7a2bm";
var atMenuLiName = "global_atMenuLiName__1oq7a2bn";
var atMenuImg = "global_atMenuImg__1oq7a2bo";
var searchTagWrap = "global_searchTagWrap__1oq7a2bp";
var searchTag = "global_searchTag__1oq7a2bq";
var searchTagActive = "global_searchTagActive__1oq7a2br";
var searchTagCloseIcon = "global_searchTagCloseIcon__1oq7a2bs";

// app/components/useAutosizeTextArea.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/useAutosizeTextArea.tsx"
  );
  import.meta.hot.lastModified = "1700829077450.9028";
}
var useAutosizeTextArea = (textAreaRef, value) => {
  (0, import_react.useEffect)(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
var useAutosizeTextArea_default = useAutosizeTextArea;

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
var links = () => [{
  rel: "stylesheet",
  href: global_css_exports
}];
var ASSISTANT_DATA = {
  // dexa: {
  //   id: 'dexa',
  //   username: 'Dexa',
  //   displayName: 'Dexa',
  //   bio: 'Learn from the best.',
  //   feedIds: [],
  //   peopleIds: [],
  //   avatar: './assets/img/logoIcon.svg',
  // },
  lex: {
    id: "lex",
    username: "LexFridman",
    displayName: "Lex Fridman Podcast",
    bio: "Research scientist at MIT, working on human-centered artificial intelligence, autonomous vehicles, and more.",
    feedIds: [],
    peopleIds: [],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_1"
  },
  huberman: {
    id: "huberman",
    username: "HubermanLab",
    displayName: "Huberman Lab",
    bio: `Huberman Lab discusses neuroscience: how our brain and its connections with the organs of our body control our perceptions, our behaviors, and our health.`,
    feedIds: ["feed_4"],
    peopleIds: ["pers_78"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_78"
  },
  shane: {
    id: "shane",
    username: "ShaneParrish",
    displayName: "Shane Parrish",
    bio: `Thought leader known for his conversations with world-class experts from diverse fields, aimed at unraveling the frameworks they use for decision making and learning.`,
    feedIds: ["feed_5"],
    peopleIds: ["pers_79"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_239"
  },
  rhonda: {
    id: "rhonda",
    username: "RhondaPatrick",
    displayName: "Rhonda Patrick",
    bio: `Distinguished biomedical scientist, celebrated for her comprehensive research on the role of nutritional health, physical activity, and genetics in aging and diseases.`,
    feedIds: ["feed_7"],
    peopleIds: ["pers_88"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_246"
  },
  justin: {
    id: "justin",
    username: "JustinAndrews",
    displayName: "Justin Andrews",
    bio: `Justin bio.`,
    feedIds: ["feed_12"],
    peopleIds: ["pers_98"],
    avatar: "https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_1256"
  },
  jordan: {
    id: "jordan",
    username: "JordanHarbinger",
    displayName: "Jordan Harbinger",
    bio: `Jordan bio.`,
    feedIds: ["feed_22"],
    peopleIds: ["pers_108"],
    avatar: "https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_595"
  }
};
function Index() {
  _s();
  const [isActive, setIsActive] = (0, import_react2.useState)(false);
  const [isTag, setIsTag] = (0, import_react2.useState)(false);
  const [selectTag, setSelectTag] = (0, import_react2.useState)("");
  const [inputText, setInputText] = (0, import_react2.useState)("");
  const [focusedIndex, setFocusedIndex] = (0, import_react2.useState)(0);
  const itemRefs = (0, import_react2.useRef)([]);
  const textAreaRef = (0, import_react2.useRef)(null);
  useAutosizeTextArea_default(textAreaRef.current, inputText);
  const toggleAtMenu = () => setIsActive(!isActive);
  const removeTag = () => {
    setIsTag(!isTag);
    setIsActive(true);
  };
  (0, import_react2.useEffect)(() => {
    if (filteredData.length > 0) {
      setFocusedIndex(0);
    }
  }, [inputText]);
  (0, import_react2.useEffect)(() => {
    const focusedItem = itemRefs.current[focusedIndex];
    if (isActive && focusedItem) {
      focusedItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  }, [focusedIndex, isActive]);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputText(value);
    setIsActive(value.includes("@"));
  };
  (0, import_react2.useEffect)(() => {
    if (isActive && filteredData.length > 0) {
      setFocusedIndex(-1);
    }
  }, [isActive]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && isActive && filteredData.length > 0) {
      event.preventDefault();
      selectUsername(filteredData[focusedIndex][1].username);
    } else if (event.key === "ArrowUp" && focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    } else if (event.key === "ArrowDown" && focusedIndex < filteredData.length - 1) {
      setFocusedIndex(focusedIndex + 1);
    }
  };
  const selectUsername = (username) => {
    setSelectTag(`@${username}`);
    setIsActive(false);
    setIsTag(true);
    const newText = inputText.replace(/@\S+/g, "");
    setInputText(newText);
  };
  const filteredData = Object.entries(ASSISTANT_DATA).filter(([key, value]) => {
    if (inputText.includes("@")) {
      const searchTerm = inputText.split("@").pop() || "";
      return searchTerm === "" || value.username.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: logo, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./assets/img/logo.svg" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: menu, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "History" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Sign up" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: container, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: containerRight }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: atMenuWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${atMenu} ${isActive ? atMenuActive : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: atMenuUl, children: filteredData.map(([key, value], index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { onClick: () => selectUsername(value.username), className: `${atMenuLi} ${index === focusedIndex ? atMenuLiFocused : ""}`, ref: (el) => itemRefs.current[index] = el, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: value.avatar, alt: `${value.username} avatar`, className: atMenuImg }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 181,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          "@",
          value.username,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: atMenuLiName, children: value.displayName }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 182,
            columnNumber: 42
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 182,
          columnNumber: 19
        }, this)
      ] }, value.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 58
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "#", className: `${chatbox} ${isActive ? chatboxActive : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: chatboxLeft, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./assets/img/logoIcon.svg", className: logoIcon }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${searchTagWrap} ${isTag ? searchTagActive : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: searchTag, onClick: removeTag, children: [
            selectTag,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./assets/img/close.svg", className: searchTagCloseIcon }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 190,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { ref: textAreaRef, rows: 1, name: "ask", placeholder: "Ask anything", value: inputText, onChange: handleInputChange, onKeyDown: handleKeyPress, className: textarea }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 196,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: chatboxRight, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", onClick: toggleAtMenu, onKeyDown: handleKeyPress, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./assets/img/at.svg", className: atIcon }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 199,
            columnNumber: 75
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `${button} ${isTag ? buttonActive : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./assets/img/arrow.svg", className: buttonIcon }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 200,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 167,
    columnNumber: 10
  }, this);
}
_s(Index, "2HjrzmwuCwVmgQpEW+8Ln84FG6g=", false, function() {
  return [useAutosizeTextArea_default];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-KOD2XAZF.js.map
