import db from "../config/db.js";

// UNTUK MENAMBAHKAN USER ADMIN BARU
export const addAdmin = async (username, password, nama, email) => {
  const [result] = await db.execute(
    "INSERT INTO Admin (username, password, nama, email) VALUES (?,?,?,?)",
    [username, password, nama, email]
  );

  return result;
};

// MENGAMBIL DATA ADMIN BERDASARKAN ID
export const getAdminById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM Admin WHERE id_admin = ?", [
    id,
  ]);
  return rows[0];
};

// MENGAMBIL SEMUA DATA ADMIN
export const getAllAdmins = async () => {
  const [rows] = await db.execute("SELECT * FROM Admin");
  return rows;
};

// MENGUPDATE DATA ADMIN
export const updateAdmin = async (
  id_admin,
  username,
  password,
  nama,
  email
) => {
  console.log("Params for updateAdmin:", {
    id_admin,
    username,
    password,
    nama,
    email,
  }); 

  const [result] = await db.execute(
    "UPDATE Admin SET username = ?, password = ?, nama = ?, email = ? WHERE id_admin = ?",
    [
      username || null,
      password || null,
      nama || null,
      email || null,
      parseInt(id_admin, 10),
    ]
  );

  return result;
};

// MENGHAPUS DATA ADMIN
export const deleteAdmin = async (id_admin) => {
  const [result] = await db.execute("DELETE FROM Admin WHERE id_admin = ?", [
    id_admin,
  ]);

  return result;
};
