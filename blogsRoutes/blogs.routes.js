const router=require("express").Router()
const blogController=require("../blogsControllers with ejs/blogs.controller")
//routes
router.get("/getAllBlogs",blogController.getAllBlogs)

router.get("/getBlogByTitle/:title",blogController.getBlogByTitle)

router.post("/addNewBlog",blogController.addNewBlog)

router.post("/updateBlog",blogController.updateBlog)

router.post("/deleteBlog",blogController.deleteBlog)
module.exports=router