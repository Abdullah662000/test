const User_Profile = require("../model/User_Profile");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User_Profile.query();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.createUser = async (body) => {
  try {
    const {
      first_name,
      last_name,
      department,
      designation,
      tenant_id,
      image_url,
      city,
      country,
      bio,
      social_links,
      employee_id,
    } = body;
    console.log(body);
    const newUserProfile = await User_Profile.query().insert({
      first_name,
      last_name,
      department,
      designation,
      tenant_id,
      image_url,
      city,
      country,
      bio,
      social_links: social_links.facebook,
      employee_id: JSON.stringify(employee_id),
    });
    return newUserProfile;
  } catch (err) {
    console.log(err);
  }
};
exports.createUserProfile = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      department,
      designation,
      tenant_id,
      image_url,
      city,
      country,
      bio,
      social_links,
      employee_id,
    } = req.body;
    const newUserProfile = await User_Profile.query().insert({
      first_name,
      last_name,
      department,
      designation,
      tenant_id,
      image_url,
      city,
      country,
      bio,
      social_links: social_links.facebook,
      employee_id: JSON.stringify(employee_id),
    });
    return res.status(200).json(newUserProfile);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User_Profile.query().findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.deleteUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedCount = await User_Profile.query().deleteById(userId);

    if (deletedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ message: "User deleted successfully" });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
exports.updateUserById = async (req, res) => {
  const { userId } = req.params;
  const {
    first_name,
    last_name,
    department,
    designation,
    image_url,
    city,
    country,
  } = req.body;

  try {
    const updatedUser = await User_Profile.query().patchAndFetchById(userId, {
      first_name,
      last_name,
      department,
      designation,
      image_url,
      city,
      country,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json(updatedUser);
  } catch (err) {
    return res.status(500).json({ err });
  }
};
