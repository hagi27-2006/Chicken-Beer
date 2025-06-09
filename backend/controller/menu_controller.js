import asyncHandler from "../middleware/asyncHandler.js";
import Menu from "../models/menuModel.js";

export const getMenu = asyncHandler(async (req, res) => {
  try {
    const menu = await Menu.find({});
    res.status(200).json({
      success: true,
      data: menu,
    });
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({
      success: false,
      message: "Menu fetching failed",
    });
  }
});



