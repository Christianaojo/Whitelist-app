/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"footer\": \"Home_footer__7dKhS\",\n\t\"image\": \"Home_image__PsW3M\",\n\t\"title\": \"Home_title__FX7xZ\",\n\t\"description\": \"Home_description__Qwq1f\",\n\t\"button\": \"Home_button__69vwW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGl0ZWxpc3QvLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcz81YWY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX0V0TnQyXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzdkS2hTXCIsXG5cdFwiaW1hZ2VcIjogXCJIb21lX2ltYWdlX19Qc1czTVwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fRlg3eFpcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fX1F3cTFmXCIsXG5cdFwiYnV0dG9uXCI6IFwiSG9tZV9idXR0b25fXzY5dndXXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants */ \"constants\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_3__]);\nethers__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Home() {\n    // walletConnected keep track of whether the user's wallet is connected or not\n    const [walletConnected, setWalletConnected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not\n    const [joinedWhitelist, setJoinedWhitelist] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // loading is set to true when we are waiting for a transaction to get mined\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // numberOfWhitelisted tracks the number of addresses's whitelisted\n    const [numberOfWhitelisted, setNumberOfWhitelisted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open\n    const web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    /**\n   * Returns a Provider or Signer object representing the Ethereum RPC with or without the\n   * signing capabilities of metamask attached\n   *\n   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.\n   *\n   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account\n   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to\n   * request signatures from the user using Signer functions.\n   *\n   * @param {*} needSigner - True if you need the signer, default false otherwise\n   */ const getProviderOrSigner = async (needSigner = false)=>{\n        // Connect to Metamask\n        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object\n        const provider = await web3ModalRef.current.connect();\n        const web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.providers.Web3Provider(provider);\n        // If user is not connected to the Goerli network, let them know and throw an error\n        const { chainId  } = await web3Provider.getNetwork();\n        if (chainId !== 5) {\n            window.alert(\"Change the network to Goerli\");\n            throw new Error(\"Change network to Goerli\");\n        }\n        if (needSigner) {\n            const signer = web3Provider.getSigner();\n            return signer;\n        }\n        return web3Provider;\n    };\n    /**\n   * addAddressToWhitelist: Adds the current connected address to the whitelist\n   */ const addAddressToWhitelist = async ()=>{\n        try {\n            // We need a Signer here since this is a 'write' transaction.\n            const signer = await getProviderOrSigner(true);\n            // Create a new instance of the Contract with a Signer, which allows\n            // update methods\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(constants__WEBPACK_IMPORTED_MODULE_5__.WHITELIST_CONTRACT_ADDRESS, constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n            // call the addAddressToWhitelist from the contract\n            const tx = await whitelistContract.addAddressToWhitelist();\n            setLoading(true);\n            // wait for the transaction to get mined\n            await tx.wait();\n            setLoading(false);\n            // get the updated number of addresses in the whitelist\n            await getNumberOfWhitelisted();\n            setJoinedWhitelist(true);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /**\n   * getNumberOfWhitelisted:  gets the number of whitelisted addresses\n   */ const getNumberOfWhitelisted = async ()=>{\n        try {\n            // Get the provider from web3Modal, which in our case is MetaMask\n            // No need for the Signer here, as we are only reading state from the blockchain\n            const provider = await getProviderOrSigner();\n            // We connect to the Contract using a Provider, so we will only\n            // have read-only access to the Contract\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(constants__WEBPACK_IMPORTED_MODULE_5__.WHITELIST_CONTRACT_ADDRESS, constants__WEBPACK_IMPORTED_MODULE_5__.abi, provider);\n            // call the numAddressesWhitelisted from the contract\n            const _numberOfWhitelisted = await whitelistContract.numAddressesWhitelisted();\n            setNumberOfWhitelisted(_numberOfWhitelisted);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /**\n   * checkIfAddressInWhitelist: Checks if the address is in whitelist\n   */ const checkIfAddressInWhitelist = async ()=>{\n        try {\n            // We will need the signer later to get the user's address\n            // Even though it is a read transaction, since Signers are just special kinds of Providers,\n            // We can use it in it's place\n            const signer = await getProviderOrSigner(true);\n            const whitelistContract = new ethers__WEBPACK_IMPORTED_MODULE_3__.Contract(constants__WEBPACK_IMPORTED_MODULE_5__.WHITELIST_CONTRACT_ADDRESS, constants__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n            // Get the address associated to the signer which is connected to  MetaMask\n            const address = await signer.getAddress();\n            // call the whitelistedAddresses from the contract\n            const _joinedWhitelist = await whitelistContract.whitelistedAddresses(address);\n            setJoinedWhitelist(_joinedWhitelist);\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /*\n    connectWallet: Connects the MetaMask wallet\n  */ const connectWallet = async ()=>{\n        try {\n            // Get the provider from web3Modal, which in our case is MetaMask\n            // When used for the first time, it prompts the user to connect their wallet\n            await getProviderOrSigner();\n            setWalletConnected(true);\n            checkIfAddressInWhitelist();\n            getNumberOfWhitelisted();\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    /*\n    renderButton: Returns a button based on the state of the dapp\n  */ const renderButton = ()=>{\n        if (walletConnected) {\n            if (joinedWhitelist) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                    children: \"Thanks for joining the Whitelist!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 154,\n                    columnNumber: 11\n                }, this);\n            } else if (loading) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 159,\n                    columnNumber: 16\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: addAddressToWhitelist,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                    children: \"Join the Whitelist\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 162,\n                    columnNumber: 11\n                }, this);\n            }\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectWallet,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                children: \"Connect your wallet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this);\n        }\n    };\n    // useEffects are used to react to changes in state of the website\n    // The array at the end of function call represents what state changes will trigger this effect\n    // In this case, whenever the value of `walletConnected` changes - this effect will be called\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet\n        if (!walletConnected) {\n            // Assign the Web3Modal class to the reference object by setting it's `current` value\n            // The `current` value is persisted throughout as long as this page is open\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disableInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 196,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist-Dapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 197,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 198,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 195,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: \"Welcome to Crypto Devs!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 202,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: \"Its an NFT collection for developers in Crypto.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 203,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n                                children: [\n                                    numberOfWhitelisted,\n                                    \" have already joined the Whitelist\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 206,\n                                columnNumber: 11\n                            }, this),\n                            renderButton()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 201,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),\n                            src: \"./crypto-devs.svg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                            lineNumber: 212,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 211,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 200,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n                children: \"Made with ❤ by Crypto Devs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 216,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pd\\\\my-app\\\\whitelist\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 194,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0gsR0FBRztRQUFDdEM7S0FBZ0I7SUFFcEIscUJBQ0UsOERBQUN3Qzs7MEJBQ0MsOERBQUNuRCxrREFBSUE7O2tDQUNILDhEQUFDMkQ7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDZDtnQkFBSUMsV0FBV25ELHFFQUFXOztrQ0FDekIsOERBQUNrRDs7MENBQ0MsOERBQUNnQjtnQ0FBR2YsV0FBV25ELHNFQUFZOzBDQUFFOzs7Ozs7MENBQzdCLDhEQUFDa0Q7Z0NBQUlDLFdBQVduRCw0RUFBa0I7MENBQUU7Ozs7OzswQ0FHcEMsOERBQUNrRDtnQ0FBSUMsV0FBV25ELDRFQUFrQjs7b0NBQy9CZ0I7b0NBQW9COzs7Ozs7OzRCQUV0QmlDOzs7Ozs7O2tDQUVILDhEQUFDQztrQ0FDQyw0RUFBQ2lCOzRCQUFJaEIsV0FBV25ELHNFQUFZOzRCQUFFcUUsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRDLDhEQUFDQztnQkFBT25CLFdBQVduRCx1RUFBYTswQkFBRTs7Ozs7Ozs7Ozs7O0FBS3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGl0ZWxpc3QvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IHByb3ZpZGVycywgQ29udHJhY3QgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdISVRFTElTVF9DT05UUkFDVF9BRERSRVNTLCBhYmkgfSBmcm9tIFwiY29uc3RhbnRzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gd2FsbGV0Q29ubmVjdGVkIGtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgdXNlcidzIHdhbGxldCBpcyBjb25uZWN0ZWQgb3Igbm90XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGpvaW5lZFdoaXRlbGlzdCBrZWVwcyB0cmFjayBvZiB3aGV0aGVyIHRoZSBjdXJyZW50IG1ldGFtYXNrIGFkZHJlc3MgaGFzIGpvaW5lZCB0aGUgV2hpdGVsaXN0IG9yIG5vdFxuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBsb2FkaW5nIGlzIHNldCB0byB0cnVlIHdoZW4gd2UgYXJlIHdhaXRpbmcgZm9yIGEgdHJhbnNhY3Rpb24gdG8gZ2V0IG1pbmVkXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gbnVtYmVyT2ZXaGl0ZWxpc3RlZCB0cmFja3MgdGhlIG51bWJlciBvZiBhZGRyZXNzZXMncyB3aGl0ZWxpc3RlZFxuICBjb25zdCBbbnVtYmVyT2ZXaGl0ZWxpc3RlZCwgc2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBXZWIzIE1vZGFsICh1c2VkIGZvciBjb25uZWN0aW5nIHRvIE1ldGFtYXNrKSB3aGljaCBwZXJzaXN0cyBhcyBsb25nIGFzIHRoZSBwYWdlIGlzIG9wZW5cbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm92aWRlciBvciBTaWduZXIgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgRXRoZXJldW0gUlBDIHdpdGggb3Igd2l0aG91dCB0aGVcbiAgICogc2lnbmluZyBjYXBhYmlsaXRpZXMgb2YgbWV0YW1hc2sgYXR0YWNoZWRcbiAgICpcbiAgICogQSBgUHJvdmlkZXJgIGlzIG5lZWRlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBibG9ja2NoYWluIC0gcmVhZGluZyB0cmFuc2FjdGlvbnMsIHJlYWRpbmcgYmFsYW5jZXMsIHJlYWRpbmcgc3RhdGUsIGV0Yy5cbiAgICpcbiAgICogQSBgU2lnbmVyYCBpcyBhIHNwZWNpYWwgdHlwZSBvZiBQcm92aWRlciB1c2VkIGluIGNhc2UgYSBgd3JpdGVgIHRyYW5zYWN0aW9uIG5lZWRzIHRvIGJlIG1hZGUgdG8gdGhlIGJsb2NrY2hhaW4sIHdoaWNoIGludm9sdmVzIHRoZSBjb25uZWN0ZWQgYWNjb3VudFxuICAgKiBuZWVkaW5nIHRvIG1ha2UgYSBkaWdpdGFsIHNpZ25hdHVyZSB0byBhdXRob3JpemUgdGhlIHRyYW5zYWN0aW9uIGJlaW5nIHNlbnQuIE1ldGFtYXNrIGV4cG9zZXMgYSBTaWduZXIgQVBJIHRvIGFsbG93IHlvdXIgd2Vic2l0ZSB0b1xuICAgKiByZXF1ZXN0IHNpZ25hdHVyZXMgZnJvbSB0aGUgdXNlciB1c2luZyBTaWduZXIgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IG5lZWRTaWduZXIgLSBUcnVlIGlmIHlvdSBuZWVkIHRoZSBzaWduZXIsIGRlZmF1bHQgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqL1xuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIC8vIENvbm5lY3QgdG8gTWV0YW1hc2tcbiAgICAvLyBTaW5jZSB3ZSBzdG9yZSBgd2ViM01vZGFsYCBhcyBhIHJlZmVyZW5jZSwgd2UgbmVlZCB0byBhY2Nlc3MgdGhlIGBjdXJyZW50YCB2YWx1ZSB0byBnZXQgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdFxuICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsUmVmLmN1cnJlbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIC8vIElmIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgR29lcmxpIG5ldHdvcmssIGxldCB0aGVtIGtub3cgYW5kIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgeyBjaGFpbklkIH0gPSBhd2FpdCB3ZWIzUHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuICAgIGlmIChjaGFpbklkICE9PSA1KSB7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJDaGFuZ2UgdGhlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2hhbmdlIG5ldHdvcmsgdG8gR29lcmxpXCIpO1xuICAgIH1cblxuICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICByZXR1cm4gc2lnbmVyO1xuICAgIH1cbiAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBhZGRBZGRyZXNzVG9XaGl0ZWxpc3Q6IEFkZHMgdGhlIGN1cnJlbnQgY29ubmVjdGVkIGFkZHJlc3MgdG8gdGhlIHdoaXRlbGlzdFxuICAgKi9cbiAgY29uc3QgYWRkQWRkcmVzc1RvV2hpdGVsaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBXZSBuZWVkIGEgU2lnbmVyIGhlcmUgc2luY2UgdGhpcyBpcyBhICd3cml0ZScgdHJhbnNhY3Rpb24uXG4gICAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBDb250cmFjdCB3aXRoIGEgU2lnbmVyLCB3aGljaCBhbGxvd3NcbiAgICAgIC8vIHVwZGF0ZSBtZXRob2RzXG4gICAgICBjb25zdCB3aGl0ZWxpc3RDb250cmFjdCA9IG5ldyBDb250cmFjdChcbiAgICAgICAgV0hJVEVMSVNUX0NPTlRSQUNUX0FERFJFU1MsXG4gICAgICAgIGFiaSxcbiAgICAgICAgc2lnbmVyXG4gICAgICApO1xuICAgICAgLy8gY2FsbCB0aGUgYWRkQWRkcmVzc1RvV2hpdGVsaXN0IGZyb20gdGhlIGNvbnRyYWN0XG4gICAgICBjb25zdCB0eCA9IGF3YWl0IHdoaXRlbGlzdENvbnRyYWN0LmFkZEFkZHJlc3NUb1doaXRlbGlzdCgpO1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIC8vIHdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBnZXQgbWluZWRcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgLy8gZ2V0IHRoZSB1cGRhdGVkIG51bWJlciBvZiBhZGRyZXNzZXMgaW4gdGhlIHdoaXRlbGlzdFxuICAgICAgYXdhaXQgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgICAgc2V0Sm9pbmVkV2hpdGVsaXN0KHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZDogIGdldHMgdGhlIG51bWJlciBvZiB3aGl0ZWxpc3RlZCBhZGRyZXNzZXNcbiAgICovXG4gIGNvbnN0IGdldE51bWJlck9mV2hpdGVsaXN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCB0aGUgcHJvdmlkZXIgZnJvbSB3ZWIzTW9kYWwsIHdoaWNoIGluIG91ciBjYXNlIGlzIE1ldGFNYXNrXG4gICAgICAvLyBObyBuZWVkIGZvciB0aGUgU2lnbmVyIGhlcmUsIGFzIHdlIGFyZSBvbmx5IHJlYWRpbmcgc3RhdGUgZnJvbSB0aGUgYmxvY2tjaGFpblxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICAvLyBXZSBjb25uZWN0IHRvIHRoZSBDb250cmFjdCB1c2luZyBhIFByb3ZpZGVyLCBzbyB3ZSB3aWxsIG9ubHlcbiAgICAgIC8vIGhhdmUgcmVhZC1vbmx5IGFjY2VzcyB0byB0aGUgQ29udHJhY3RcbiAgICAgIGNvbnN0IHdoaXRlbGlzdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpLFxuICAgICAgICBwcm92aWRlclxuICAgICAgKTtcbiAgICAgIC8vIGNhbGwgdGhlIG51bUFkZHJlc3Nlc1doaXRlbGlzdGVkIGZyb20gdGhlIGNvbnRyYWN0XG4gICAgICBjb25zdCBfbnVtYmVyT2ZXaGl0ZWxpc3RlZCA9XG4gICAgICAgIGF3YWl0IHdoaXRlbGlzdENvbnRyYWN0Lm51bUFkZHJlc3Nlc1doaXRlbGlzdGVkKCk7XG4gICAgICBzZXROdW1iZXJPZldoaXRlbGlzdGVkKF9udW1iZXJPZldoaXRlbGlzdGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGNoZWNrSWZBZGRyZXNzSW5XaGl0ZWxpc3Q6IENoZWNrcyBpZiB0aGUgYWRkcmVzcyBpcyBpbiB3aGl0ZWxpc3RcbiAgICovXG4gIGNvbnN0IGNoZWNrSWZBZGRyZXNzSW5XaGl0ZWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHdpbGwgbmVlZCB0aGUgc2lnbmVyIGxhdGVyIHRvIGdldCB0aGUgdXNlcidzIGFkZHJlc3NcbiAgICAgIC8vIEV2ZW4gdGhvdWdoIGl0IGlzIGEgcmVhZCB0cmFuc2FjdGlvbiwgc2luY2UgU2lnbmVycyBhcmUganVzdCBzcGVjaWFsIGtpbmRzIG9mIFByb3ZpZGVycyxcbiAgICAgIC8vIFdlIGNhbiB1c2UgaXQgaW4gaXQncyBwbGFjZVxuICAgICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcih0cnVlKTtcbiAgICAgIGNvbnN0IHdoaXRlbGlzdENvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyxcbiAgICAgICAgYWJpLFxuICAgICAgICBzaWduZXJcbiAgICAgICk7XG4gICAgICAvLyBHZXQgdGhlIGFkZHJlc3MgYXNzb2NpYXRlZCB0byB0aGUgc2lnbmVyIHdoaWNoIGlzIGNvbm5lY3RlZCB0byAgTWV0YU1hc2tcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpO1xuICAgICAgLy8gY2FsbCB0aGUgd2hpdGVsaXN0ZWRBZGRyZXNzZXMgZnJvbSB0aGUgY29udHJhY3RcbiAgICAgIGNvbnN0IF9qb2luZWRXaGl0ZWxpc3QgPSBhd2FpdCB3aGl0ZWxpc3RDb250cmFjdC53aGl0ZWxpc3RlZEFkZHJlc3NlcyhcbiAgICAgICAgYWRkcmVzc1xuICAgICAgKTtcbiAgICAgIHNldEpvaW5lZFdoaXRlbGlzdChfam9pbmVkV2hpdGVsaXN0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICBjb25uZWN0V2FsbGV0OiBDb25uZWN0cyB0aGUgTWV0YU1hc2sgd2FsbGV0XG4gICovXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCB0aGUgcHJvdmlkZXIgZnJvbSB3ZWIzTW9kYWwsIHdoaWNoIGluIG91ciBjYXNlIGlzIE1ldGFNYXNrXG4gICAgICAvLyBXaGVuIHVzZWQgZm9yIHRoZSBmaXJzdCB0aW1lLCBpdCBwcm9tcHRzIHRoZSB1c2VyIHRvIGNvbm5lY3QgdGhlaXIgd2FsbGV0XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG5cbiAgICAgIGNoZWNrSWZBZGRyZXNzSW5XaGl0ZWxpc3QoKTtcbiAgICAgIGdldE51bWJlck9mV2hpdGVsaXN0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICByZW5kZXJCdXR0b246IFJldHVybnMgYSBidXR0b24gYmFzZWQgb24gdGhlIHN0YXRlIG9mIHRoZSBkYXBwXG4gICovXG4gIGNvbnN0IHJlbmRlckJ1dHRvbiA9ICgpID0+IHtcbiAgICBpZiAod2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICBpZiAoam9pbmVkV2hpdGVsaXN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBUaGFua3MgZm9yIGpvaW5pbmcgdGhlIFdoaXRlbGlzdCFcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkxvYWRpbmcuLi48L2J1dHRvbj47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkQWRkcmVzc1RvV2hpdGVsaXN0fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgSm9pbiB0aGUgV2hpdGVsaXN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y29ubmVjdFdhbGxldH0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBDb25uZWN0IHlvdXIgd2FsbGV0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdXNlRWZmZWN0cyBhcmUgdXNlZCB0byByZWFjdCB0byBjaGFuZ2VzIGluIHN0YXRlIG9mIHRoZSB3ZWJzaXRlXG4gIC8vIFRoZSBhcnJheSBhdCB0aGUgZW5kIG9mIGZ1bmN0aW9uIGNhbGwgcmVwcmVzZW50cyB3aGF0IHN0YXRlIGNoYW5nZXMgd2lsbCB0cmlnZ2VyIHRoaXMgZWZmZWN0XG4gIC8vIEluIHRoaXMgY2FzZSwgd2hlbmV2ZXIgdGhlIHZhbHVlIG9mIGB3YWxsZXRDb25uZWN0ZWRgIGNoYW5nZXMgLSB0aGlzIGVmZmVjdCB3aWxsIGJlIGNhbGxlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIHdhbGxldCBpcyBub3QgY29ubmVjdGVkLCBjcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgV2ViM01vZGFsIGFuZCBjb25uZWN0IHRoZSBNZXRhTWFzayB3YWxsZXRcbiAgICBpZiAoIXdhbGxldENvbm5lY3RlZCkge1xuICAgICAgLy8gQXNzaWduIHRoZSBXZWIzTW9kYWwgY2xhc3MgdG8gdGhlIHJlZmVyZW5jZSBvYmplY3QgYnkgc2V0dGluZyBpdCdzIGBjdXJyZW50YCB2YWx1ZVxuICAgICAgLy8gVGhlIGBjdXJyZW50YCB2YWx1ZSBpcyBwZXJzaXN0ZWQgdGhyb3VnaG91dCBhcyBsb25nIGFzIHRoaXMgcGFnZSBpcyBvcGVuXG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImdvZXJsaVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoaXRlbGlzdCBEYXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdC1EYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUgdG8gQ3J5cHRvIERldnMhPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIEl0cyBhbiBORlQgY29sbGVjdGlvbiBmb3IgZGV2ZWxvcGVycyBpbiBDcnlwdG8uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICB7bnVtYmVyT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5lZCB0aGUgV2hpdGVsaXN0XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbmRlckJ1dHRvbigpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9XCIuL2NyeXB0by1kZXZzLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgTWFkZSB3aXRoICYjMTAwODQ7IGJ5IENyeXB0byBEZXZzXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIldlYjNNb2RhbCIsInByb3ZpZGVycyIsIkNvbnRyYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJXSElURUxJU1RfQ09OVFJBQ1RfQUREUkVTUyIsImFiaSIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJqb2luZWRXaGl0ZWxpc3QiLCJzZXRKb2luZWRXaGl0ZWxpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm51bWJlck9mV2hpdGVsaXN0ZWQiLCJzZXROdW1iZXJPZldoaXRlbGlzdGVkIiwid2ViM01vZGFsUmVmIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsImN1cnJlbnQiLCJjb25uZWN0Iiwid2ViM1Byb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsImdldE5ldHdvcmsiLCJ3aW5kb3ciLCJhbGVydCIsIkVycm9yIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiYWRkQWRkcmVzc1RvV2hpdGVsaXN0Iiwid2hpdGVsaXN0Q29udHJhY3QiLCJ0eCIsIndhaXQiLCJnZXROdW1iZXJPZldoaXRlbGlzdGVkIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiX251bWJlck9mV2hpdGVsaXN0ZWQiLCJudW1BZGRyZXNzZXNXaGl0ZWxpc3RlZCIsImNoZWNrSWZBZGRyZXNzSW5XaGl0ZWxpc3QiLCJhZGRyZXNzIiwiZ2V0QWRkcmVzcyIsIl9qb2luZWRXaGl0ZWxpc3QiLCJ3aGl0ZWxpc3RlZEFkZHJlc3NlcyIsImNvbm5lY3RXYWxsZXQiLCJyZW5kZXJCdXR0b24iLCJkaXYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZUluamVjdGVkUHJvdmlkZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("constants");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();