const bcrypt = require("bcrypt");

async function generate() {
  const adminHash = await bcrypt.hash("admin", 10);
  const teacherHash = await bcrypt.hash("pass123", 10);

  console.log("Admin hash:", adminHash);
  console.log("Teacher hash:", teacherHash);
}

generate();
