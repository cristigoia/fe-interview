var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-4H4GWU3J.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta
});
import { useEffect as useEffect2, useRef, useState } from "react";

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
var header = "global_header__1oq7a2b0", logo = "global_logo__1oq7a2b1", menu = "global_menu__1oq7a2b2", container = "global_container__1oq7a2b3", containerRight = "global_containerRight__1oq7a2b4", chatbox = "global_chatbox__1oq7a2b5", chatboxLeft = "global_chatboxLeft__1oq7a2b6", chatboxRight = "global_chatboxRight__1oq7a2b7", chatboxActive = "global_chatboxActive__1oq7a2b8", textarea = "global_textarea__1oq7a2b9", textareaPlaceholder = "global_textareaPlaceholder__1oq7a2ba", buttonIcon = "global_buttonIcon__1oq7a2bb", button = "global_button__1oq7a2bc", buttonActive = "global_buttonActive__1oq7a2bd", atIcon = "global_atIcon__1oq7a2be", logoIcon = "global_logoIcon__1oq7a2bf", atToggle = "global_atToggle__1oq7a2bg", atMenuWrap = "global_atMenuWrap__1oq7a2bh", atMenu = "global_atMenu__1oq7a2bi", atMenuActive = "global_atMenuActive__1oq7a2bj", atMenuUl = "global_atMenuUl__1oq7a2bk", atMenuLi = "global_atMenuLi__1oq7a2bl", atMenuLiFocused = "global_atMenuLiFocused__1oq7a2bm", atMenuLiName = "global_atMenuLiName__1oq7a2bn", atMenuImg = "global_atMenuImg__1oq7a2bo", searchTagWrap = "global_searchTagWrap__1oq7a2bp", searchTag = "global_searchTag__1oq7a2bq", searchTagActive = "global_searchTagActive__1oq7a2br", searchTagCloseIcon = "global_searchTagCloseIcon__1oq7a2bs";

// app/components/useAutosizeTextArea.tsx
import { useEffect } from "react";
var useAutosizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      let scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
}, useAutosizeTextArea_default = useAutosizeTextArea;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
], links2 = () => [
  { rel: "stylesheet", href: global_css_exports }
], ASSISTANT_DATA = {
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
    bio: "Huberman Lab discusses neuroscience: how our brain and its connections with the organs of our body control our perceptions, our behaviors, and our health.",
    feedIds: ["feed_4"],
    peopleIds: ["pers_78"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_78"
  },
  shane: {
    id: "shane",
    username: "ShaneParrish",
    displayName: "Shane Parrish",
    bio: "Thought leader known for his conversations with world-class experts from diverse fields, aimed at unraveling the frameworks they use for decision making and learning.",
    feedIds: ["feed_5"],
    peopleIds: ["pers_79"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_239"
  },
  rhonda: {
    id: "rhonda",
    username: "RhondaPatrick",
    displayName: "Rhonda Patrick",
    bio: "Distinguished biomedical scientist, celebrated for her comprehensive research on the role of nutritional health, physical activity, and genetics in aging and diseases.",
    feedIds: ["feed_7"],
    peopleIds: ["pers_88"],
    avatar: "https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_246"
  },
  justin: {
    id: "justin",
    username: "JustinAndrews",
    displayName: "Justin Andrews",
    bio: "Justin bio.",
    feedIds: ["feed_12"],
    peopleIds: ["pers_98"],
    avatar: "https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_1256"
  },
  jordan: {
    id: "jordan",
    username: "JordanHarbinger",
    displayName: "Jordan Harbinger",
    bio: "Jordan bio.",
    feedIds: ["feed_22"],
    peopleIds: ["pers_108"],
    avatar: "https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_595"
  }
};
function Index() {
  let [isActive, setIsActive] = useState(!1), [isTag, setIsTag] = useState(!1), [selectTag, setSelectTag] = useState(""), [inputText, setInputText] = useState(""), [focusedIndex, setFocusedIndex] = useState(0), itemRefs = useRef([]), textAreaRef = useRef(null);
  useAutosizeTextArea_default(textAreaRef.current, inputText);
  let toggleAtMenu = () => setIsActive(!isActive), removeTag = () => {
    setIsTag(!isTag), setIsActive(!0);
  };
  useEffect2(() => {
    filteredData.length > 0 && setFocusedIndex(0);
  }, [inputText]), useEffect2(() => {
    let focusedItem = itemRefs.current[focusedIndex];
    isActive && focusedItem && focusedItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start"
    });
  }, [focusedIndex, isActive]);
  let handleInputChange = (event) => {
    let value = event.target.value;
    setInputText(value), setIsActive(value.includes("@"));
  };
  useEffect2(() => {
    isActive && filteredData.length > 0 && setFocusedIndex(-1);
  }, [isActive]);
  let handleKeyPress = (event) => {
    event.key === "Enter" && isActive && filteredData.length > 0 ? (event.preventDefault(), selectUsername(filteredData[focusedIndex][1].username)) : event.key === "ArrowUp" && focusedIndex > 0 ? setFocusedIndex(focusedIndex - 1) : event.key === "ArrowDown" && focusedIndex < filteredData.length - 1 && setFocusedIndex(focusedIndex + 1);
  }, selectUsername = (username) => {
    setSelectTag(`@${username}`), setIsActive(!1), setIsTag(!0);
    let newText = inputText.replace(/@\S+/g, "");
    setInputText(newText);
  }, filteredData = Object.entries(ASSISTANT_DATA).filter(([key, value]) => {
    if (inputText.includes("@")) {
      let searchTerm = inputText.split("@").pop() || "";
      return searchTerm === "" || value.username.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return !0;
  });
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("div", { className: header, children: [
      /* @__PURE__ */ jsxDEV3("a", { href: "/", className: logo, children: /* @__PURE__ */ jsxDEV3("img", { src: "./assets/img/logo.svg" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 173,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 173,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { className: menu, children: [
        /* @__PURE__ */ jsxDEV3("li", { children: "History" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 175,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: "Sign up" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 172,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: container, children: [
      /* @__PURE__ */ jsxDEV3("div", { className: containerRight }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: atMenuWrap, children: /* @__PURE__ */ jsxDEV3("div", { className: `${atMenu} ${isActive ? atMenuActive : ""}`, children: /* @__PURE__ */ jsxDEV3("ul", { className: atMenuUl, children: filteredData.map(
        ([key, value], index) => /* @__PURE__ */ jsxDEV3(
          "li",
          {
            onClick: () => selectUsername(value.username),
            className: `${atMenuLi} ${index === focusedIndex ? atMenuLiFocused : ""}`,
            ref: (el) => itemRefs.current[index] = el,
            children: [
              /* @__PURE__ */ jsxDEV3("img", { src: value.avatar, alt: `${value.username} avatar`, className: atMenuImg }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 190,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { children: [
                "@",
                value.username,
                " ",
                /* @__PURE__ */ jsxDEV3("span", { className: atMenuLiName, children: value.displayName }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 191,
                  columnNumber: 42
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 191,
                columnNumber: 19
              }, this)
            ]
          },
          value.id,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 185,
            columnNumber: 15
          },
          this
        )
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("form", { action: "#", className: `${chatbox} ${isActive ? chatboxActive : ""}`, children: [
        /* @__PURE__ */ jsxDEV3("div", { className: chatboxLeft, children: [
          /* @__PURE__ */ jsxDEV3("img", { src: "./assets/img/logoIcon.svg", className: logoIcon }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: `${searchTagWrap} ${isTag ? searchTagActive : ""}`, children: /* @__PURE__ */ jsxDEV3("div", { className: searchTag, onClick: removeTag, children: [
            selectTag,
            /* @__PURE__ */ jsxDEV3("img", { src: "./assets/img/close.svg", className: searchTagCloseIcon }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 200,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("textarea", { ref: textAreaRef, rows: 1, name: "ask", placeholder: "Ask anything", value: inputText, onChange: handleInputChange, onKeyDown: handleKeyPress, className: textarea }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 206,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: chatboxRight, children: [
          /* @__PURE__ */ jsxDEV3("a", { href: "#", onClick: toggleAtMenu, onKeyDown: handleKeyPress, children: /* @__PURE__ */ jsxDEV3("img", { src: "./assets/img/at.svg", className: atIcon }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 209,
            columnNumber: 75
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("button", { className: `${button} ${isTag ? buttonActive : ""}`, children: /* @__PURE__ */ jsxDEV3("img", { src: "./assets/img/arrow.svg", className: buttonIcon }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 210,
            columnNumber: 88
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 210,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 171,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JZXBV3O2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-P62HEJCV.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LLMH55BD.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EAKBTAJ4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KOD2XAZF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "c1105ba1", hmr: { runtime: "/build/_shared/chunk-LLMH55BD.js", timestamp: 1700845217795 }, url: "/build/manifest-C1105BA1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
