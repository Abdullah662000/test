const Tenant_Profile = require("../model/Tenant_Profile");
const User_Profile = require("../model/User_Profile");
exports.createProfile = async (body) => {
  try {
    const {
      tenant_name,
      address,
      city,
      state,
      country,
      zip_code,
      phone,
      web_url,
    } = body;

    const newTenantProfile = await Tenant_Profile.query().insert({
      tenant_name,
      address: { location: address },
      city,
      state,
      country,
      zip_code,
      phone,
      web_url,
    });
    return newTenantProfile;
  } catch (err) {
    console.log(err);
  }
};
exports.createTenantProfile = async (req, res) => {
  try {
    const {
      tenant_name,
      address,
      city,
      state,
      country,
      zip_code,
      phone,
      web_url,
    } = req.body;
    const newTenantProfile = await Tenant_Profile.query().insert({
      tenant_name,
      address: { location: address },
      city,
      state,
      country,
      zip_code,
      phone,
      web_url,
    });
    return res.status(200).json(newTenantProfile);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};
exports.getAllTenantProfile = async (req, res) => {
  try {
    const tenants = await Tenant_Profile.query();
    return res.json(tenants);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.getTenantById = async (req, res) => {
  const { tenantId } = req.params;

  try {
    const tenant = await Tenant_Profile.query().findById(tenantId);

    if (!tenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    return res.json(tenant);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.deleteTenantById = async (req, res) => {
  const { tenantId } = req.params;

  try {
    await User_Profile.query().delete().where("tenant_id", tenantId);
    const deletedCount = await Tenant_Profile.query().deleteById(tenantId);
    if (deletedCount === 0) {
      return res.status(404).json({ error: "Tenant not found" });
    }
    return res.json({ message: "Tenant deleted successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.updateTenantById = async (req, res) => {
  const { tenantId } = req.params;
  const {
    tenant_name,
    address,
    city,
    state,
    country,
    zip_code,
    phone,
    web_url,
  } = req.body;

  try {
    const updatedTenant = await Tenant_Profile.query().patchAndFetchById(
      tenantId,
      { tenant_name, address, city, state, country, zip_code, phone, web_url }
    );

    if (!updatedTenant) {
      return res.status(404).json({ error: "Tenant not found" });
    }

    return res.json(updatedTenant);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
