import * as adminModels from "../models/Admin.js";

const createResponse = (status, code, msg, data = null) => {
  return {
    status,
    code,
    msg,
    data,
  };
};

// MENAMBAHKAN ADMIN BARU
export const addAdmin = async (req, res) => {
  try {
    const { username, password, nama, email } = req.body;
    const result = await adminModels.addAdmin(username, password, nama, email);

    res
      .status(201)
      .json(
        createResponse("success", 201, "Admins added successfully", result)
      );
  } catch (error) {
    res
      .status(500)
      .json(
        createResponse(
          "error",
          500,
          "Server error, please try again later.",
          error.message
        )
      );
  }
};

// MENDAPATKAN ADMIN BERDASARKAN ID
export const getAdminById = async (req, res) => {
  try {
    const { id_admin } = req.params;
    const admin = await adminModels.getAdminById(id_admin);
    if (!admin)
      return res
        .status(404)
        .json(createResponse("error", 404, "Admin not found"));
    res
      .status(200)
      .json(
        createResponse("success", 200, "Admin retrieved successfully", admin)
      );
  } catch (error) {
    res
      .status(500)
      .json(
        createResponse(
          "error",
          500,
          "Server error, please try again later.",
          error.message
        )
      );
  }
};

// MENDAPATKAN SEMUA DATA ADMIN
export const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminModels.getAllAdmins();
    res
      .status(200)
      .json(
        createResponse("success", 200, "Admins retrieved successfully", admins)
      );
  } catch (error) {
    res
      .status(500)
      .json(
        createResponse(
          "error",
          500,
          "Server error, please try again later.",
          error.message
        )
      );
  }
};

// MEMPERBARUI (UPDATE) ADMIN BERDASARKAN ID
export const updateAdmin = async (req, res) => {
  try {
    const { id_admin } = req.params;
    const { username, password, nama, email } = req.body;
    const updatedAdmin = await adminModels.updateAdmin(
      id_admin,
      username,
      password,
      nama,
      email
    );
    if (!updatedAdmin)
      return res
        .status(404)
        .json(createResponse("error", 404, "Admin not found"));
    res
      .status(200)
      .json(
        createResponse(
          "success",
          200,
          "Admin updated successfully",
          updatedAdmin
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(
        createResponse(
          "error",
          500,
          "Server error, please try again later.",
          error.message
        )
      );
  }
};
// MENGHAPUS ADMIN BERDASARKAN ID
export const deleteAdmin = async (req, res) => {
  try {
    const { id_admin } = req.params;
    const deleteAdmin = await adminModels.deleteAdmin(id_admin);
    if (!deleteAdmin)
      return res
        .status(404)
        .json(createResponse("error", 404, "Admin not found"));
    res
      .status(200)
      .json(
        createResponse(
          "success",
          200,
          "Admins deleted successfully",
          deleteAdmin
        )
      );
  } catch (error) {
    res
      .status(500)
      .json(
        createResponse(
          "error",
          500,
          "Server error, please try again later.",
          error.message
        )
      );
  }
};
