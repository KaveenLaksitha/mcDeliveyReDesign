"use strict";

var router = require("express").Router();

var Cart = require("../model/cart");

var Register = require("../model/register");

var moment = require('moment'); //to add items to cart{


router.post("/addToCart", function _callee(req, res) {
  var name, quantity, price, newCart, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("data for cart", req.body);
          name = req.body.name;
          quantity = req.body.num;
          price = req.body.calculatedPrice;
          newCart = new Cart({
            name: name,
            quantity: quantity,
            price: price
          });
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(newCart.save());

        case 8:
          response = _context.sent;

          if (!response) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(201).send({
            status: true,
            message: "item added for cart"
          }));

        case 13:
          return _context.abrupt("return", res.status(500).send({
            status: "failed to add item record"
          }));

        case 14:
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](5);
          console.log("error", _context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 16]]);
}); //to retrieve data from db

router.get("/cart", function _callee2(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Cart.find());

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context2.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post("/addRegister", function _callee3(req, res) {
  var salutation, name, contactno, dateofbirth, email, password, confirmpassword, newRegister, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("data for register", req.body);
          salutation = req.body.salutation;
          name = req.body.name;
          contactno = Number(req.body.contactno);
          dateofbirth = moment(req.body.dateofbirth).format('YYYY-MMMM-DD');
          email = req.body.email;
          password = req.body.password;
          confirmpassword = req.body.confirmpassword;
          newRegister = new Register({
            salutation: salutation,
            name: name,
            contactno: contactno,
            dateofbirth: dateofbirth,
            email: email,
            password: password,
            confirmpassword: confirmpassword
          });
          _context3.prev = 9;
          _context3.next = 12;
          return regeneratorRuntime.awrap(newRegister.save());

        case 12:
          response = _context3.sent;

          if (!response) {
            _context3.next = 17;
            break;
          }

          return _context3.abrupt("return", res.status(201).send({
            status: true,
            message: "Register to the system successfully"
          }));

        case 17:
          return _context3.abrupt("return", res.status(500).send({
            status: "Try again"
          }));

        case 18:
          _context3.next = 24;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](9);
          console.log("error", _context3.t0);
          return _context3.abrupt("return", res.status(500).send({
            status: "User Already Register to MC Delivery App"
          }));

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[9, 20]]);
});
router.get("/getRegister", function _callee4(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Register.find());

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context4.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/get/:email/:pass", function _callee5(req, res) {
  var EM, pass, user;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          EM = req.params.email; //username taken from the frontend login form

          pass = req.params.pass; //password taken from the frontend login form

          _context5.next = 4;
          return regeneratorRuntime.awrap(Register.findOne({
            email: EM,
            password: pass
          }).then(function (user) {
            console.log("dataaaaaaa", user);
            res.status(200).send({
              status: "User fetched",
              register: user
            });
          })["catch"](function () {
            console.log(err.message);
            res.status(500).send({
              status: "Error with get user",
              error: err.message
            });
          }));

        case 4:
          user = _context5.sent;

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;
//# sourceMappingURL=controller.dev.js.map
