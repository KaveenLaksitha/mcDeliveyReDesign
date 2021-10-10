"use strict";

var router = require("express").Router();

var FeedBack = require("../model/feedback");

var Address = require("../model/address");

var Card = require("../model/card");

var Cart = require("../model/cart");

var FoodFav = require("../model/foodFav");

var Register = require("../model/register");

var moment = require('moment'); //kaveen
//to add items to cart


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
}); //Hasani
//to add a new feedback

router.post("/addAReview", function _callee3(req, res) {
  var orderId, reviewOn, suggestion, complaint, rate, newFeedBack, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("data for feedback", req.body);
          orderId = req.body.orderId;
          reviewOn = req.body.reviewOn;
          suggestion = req.body.suggestion;
          complaint = req.body.complaint;
          rate = Number(req.body.rate);
          newFeedBack = new FeedBack({
            orderId: orderId,
            reviewOn: reviewOn,
            suggestion: suggestion,
            complaint: complaint,
            rate: rate
          });
          _context3.prev = 7;
          _context3.next = 10;
          return regeneratorRuntime.awrap(newFeedBack.save());

        case 10:
          response = _context3.sent;

          if (!response) {
            _context3.next = 15;
            break;
          }

          return _context3.abrupt("return", res.status(201).send({
            status: "New FeedBack Saved"
          }));

        case 15:
          return _context3.abrupt("return", res.status(500).send({
            status: "FeedBack could not be saved"
          }));

        case 16:
          _context3.next = 22;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](7);
          console.log("error", _context3.t0);
          return _context3.abrupt("return", res.status(500).send({
            status: "FeedBack could not be saved"
          }));

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[7, 18]]);
}); //to retrieve all feedbacks from db

router.get("/getReview", function _callee4(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(FeedBack.find());

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
}); //to add a new delivery Address

router.post("/addAddress", function _callee5(req, res) {
  var userId, deliveryAddress, city, locationType, floor, apartmentNo, landMark, companyName, department, instruct, newAddress, response;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("data for address", req.body);
          userId = req.body.userId;
          deliveryAddress = req.body.deliveryAddress;
          city = req.body.city;
          locationType = req.body.locationType;
          floor = req.body.floor;
          apartmentNo = req.body.apartmentNo;
          landMark = req.body.landMark;
          companyName = req.body.companyName;
          department = req.body.department;
          instruct = req.body.instruct;
          newAddress = new Address({
            userId: userId,
            deliveryAddress: deliveryAddress,
            city: city,
            locationType: locationType,
            floor: floor,
            apartmentNo: apartmentNo,
            landMark: landMark,
            companyName: companyName,
            department: department,
            instruct: instruct
          });
          _context5.prev = 12;
          _context5.next = 15;
          return regeneratorRuntime.awrap(newAddress.save());

        case 15:
          response = _context5.sent;

          if (!response) {
            _context5.next = 20;
            break;
          }

          return _context5.abrupt("return", res.status(201).send({
            status: "New Delivery Address Successfully Saved"
          }));

        case 20:
          return _context5.abrupt("return", res.status(500).send({
            status: "Delivery Address could not be saved"
          }));

        case 21:
          _context5.next = 27;
          break;

        case 23:
          _context5.prev = 23;
          _context5.t0 = _context5["catch"](12);
          console.log("error", _context5.t0);
          return _context5.abrupt("return", res.status(500).send({
            status: "Delivery Address could not be saved"
          }));

        case 27:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[12, 23]]);
}); //to retrieve list of delivery Addresses from db

router.get("/getAddress", function _callee6(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Address.find());

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context6.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //to add a new card

router.post("/addACard", function _callee7(req, res) {
  var userId, cardType, cardNumber, nameOnCard, expiryDate, uri, newCard, response;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log("data for card", req.body);
          userId = req.body.userId;
          cardType = req.body.cardType;
          cardNumber = req.body.cardNumber;
          nameOnCard = req.body.nameOnCard;
          expiryDate = req.body.ExpiryDate;
          uri = req.body.uri;
          newCard = new Card({
            userId: userId,
            cardType: cardType,
            cardNumber: cardNumber,
            nameOnCard: nameOnCard,
            expiryDate: expiryDate,
            uri: uri
          });
          _context7.prev = 8;
          _context7.next = 11;
          return regeneratorRuntime.awrap(newCard.save());

        case 11:
          response = _context7.sent;

          if (!response) {
            _context7.next = 16;
            break;
          }

          return _context7.abrupt("return", res.status(201).send({
            status: "New Card Saved"
          }));

        case 16:
          return _context7.abrupt("return", res.status(500).send({
            status: "Card could not be saved"
          }));

        case 17:
          _context7.next = 23;
          break;

        case 19:
          _context7.prev = 19;
          _context7.t0 = _context7["catch"](8);
          console.log("error", _context7.t0);
          return _context7.abrupt("return", res.status(500).send({
            status: "Card could not be saved"
          }));

        case 23:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[8, 19]]);
}); //to retrieve all cards from db

router.get("/getCards", function _callee8(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(Card.find());

        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context8.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //To delete a card

router.route("/removeCard/:uID")["delete"](function _callee9(req, res) {
  var userId;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          userId = req.params.uID; //userId passed from card

          _context9.next = 3;
          return regeneratorRuntime.awrap(Card.findOneAndDelete({
            userId: userId
          }).then(function () {
            res.status(200).send({
              status: "Card deleted"
            });
          })["catch"](function () {
            console.log(err);
            res.status(500).send({
              status: "Error with deleting a card",
              error: err.message
            });
          }));

        case 3:
        case "end":
          return _context9.stop();
      }
    }
  });
}); //Devin
//add food item to favourite list

router.post("/addToFav", function _callee10(req, res) {
  var name, quantity, price, image, newFav, response;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          console.log("data for Favourite", req.body);
          name = req.body.name;
          quantity = req.body.num;
          price = req.body.price;
          image = req.body.image;
          newFav = new FoodFav({
            name: name,
            quantity: quantity,
            price: price,
            image: image
          });
          _context10.prev = 6;
          _context10.next = 9;
          return regeneratorRuntime.awrap(newFav.save());

        case 9:
          response = _context10.sent;

          if (!response) {
            _context10.next = 14;
            break;
          }

          return _context10.abrupt("return", res.status(201).send({
            status: "item added for fAVOURITE"
          }));

        case 14:
          return _context10.abrupt("return", res.status(500).send({
            status: "failed to add item record"
          }));

        case 15:
          _context10.next = 20;
          break;

        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](6);
          console.log("error", _context10.t0);

        case 20:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[6, 17]]);
}); //to retrieve data from db

router.get("/FavList", function _callee11(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return regeneratorRuntime.awrap(FoodFav.find());

        case 3:
          response = _context11.sent;
          return _context11.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context11.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Thisara

router.post("/addRegister", function _callee12(req, res) {
  var salutation, name, contactno, dateofbirth, email, password, confirmpassword, newRegister, response;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
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
          _context12.prev = 9;
          _context12.next = 12;
          return regeneratorRuntime.awrap(newRegister.save());

        case 12:
          response = _context12.sent;

          if (!response) {
            _context12.next = 17;
            break;
          }

          return _context12.abrupt("return", res.status(201).send({
            status: true,
            message: "Register to the system successfully"
          }));

        case 17:
          return _context12.abrupt("return", res.status(500).send({
            status: "Try again"
          }));

        case 18:
          _context12.next = 24;
          break;

        case 20:
          _context12.prev = 20;
          _context12.t0 = _context12["catch"](9);
          console.log("error", _context12.t0);
          return _context12.abrupt("return", res.status(500).send({
            status: "User Already Register to MC Delivery App"
          }));

        case 24:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[9, 20]]);
});
router.get("/getRegister", function _callee13(req, res) {
  var response;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return regeneratorRuntime.awrap(Register.find());

        case 3:
          response = _context13.sent;
          return _context13.abrupt("return", res.status(200).send({
            status: "Success",
            data: response
          }));

        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          console.log("Something went wrong while connecting to DB");
          return _context13.abrupt("return", {
            ok: false
          });

        case 11:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get("/get/:email/:pass", function _callee14(req, res) {
  var EM, pass, user;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          EM = req.params.email; //username taken from the frontend login form

          pass = req.params.pass; //password taken from the frontend login form

          _context14.next = 4;
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
          user = _context14.sent;

        case 5:
        case "end":
          return _context14.stop();
      }
    }
  });
});
module.exports = router;
//# sourceMappingURL=controller.dev.js.map
