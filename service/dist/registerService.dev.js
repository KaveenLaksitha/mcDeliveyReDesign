"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRegister = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HOST = "http://10.0.2.2:4000";

var addRegister = function addRegister(payload) {
  var response;
  return regeneratorRuntime.async(function addRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("payload for register", payload);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(HOST, "/register/addRegister"), payload));

        case 4:
          response = _context.sent;

          if (!response) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            ok: true
          });

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", {
            ok: false,
            err: _context.t0.response.data.status
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; // //for retrive the all records
// export const getEmailPassword = async () => {
//     try {
//         const response = await axios.get(`${HOST}/register/get/:email/:pass`);
//         return {
//             ok: true,
//             data: response.data.data,
//         };
//     } catch (error) {
//         return {
//             ok: false,
//         };
//     }
// };


exports.addRegister = addRegister;
//# sourceMappingURL=registerService.dev.js.map
