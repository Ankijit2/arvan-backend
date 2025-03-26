import { Router } from 'express';
import customersController from '../controllers/customers.controller.js';
import { authenticateJWT } from '../middleware/globalerrorhandler.js';
const router = Router();


//fix routes
router.get("/allcustomers", authenticateJWT,customersController.allCustomers);

router.put("/customer/:id", authenticateJWT,customersController.updatecustomer);

router.delete("/customer/address/:id",authenticateJWT, customersController.deleteAddress);

router.put("/customer/address/:id", authenticateJWT,customersController.updateAddress);

router.post("/customer/address", authenticateJWT,customersController.addAddress);

router.get("/customer", authenticateJWT,customersController.getAddress);

router.get("/otp" ,authenticateJWT,customersController.getOtpByNumber);

router.post("/verify-otp",customersController.verify_otp);

router.post("/makeAdmin",authenticateJWT, customersController.makeAdmin);

export default router;