const { Router } = require("express");
const {
  createTenantProfile,
  getAllTenantProfile,
  getTenantById,
  deleteTenantById,
  updateTenantById,
} = require("../controller/tenantController");
const router = Router();
router.post("/createTenantProfile", createTenantProfile);
router.get("/getAllTenantProfile", getAllTenantProfile);
router.get("/getTenantById/:tenantId", getTenantById);
router.delete("/deleteTenantById/:tenantId", deleteTenantById);
router.patch("/updateTenantById/:tenantId", updateTenantById);
module.exports = router;
