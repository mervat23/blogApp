let path = require("path");
let dbPath = path.join(__dirname, "../db.blog.json");
let fs = require("fs");


//getAllBlogs
const getAllBlogs=(req,res)=>{
    let dataFile=fs.readFileSync(dbPath)
    allBlogs=JSON.parse(dataFile)
     res.render("home.ejs",{
        allBlogs:allBlogs
     })
}


//getBlogByTitle
let getBlogByTitle=(req,res)=>{
   let blogTitle=req.params.title
   let dataFile=fs.readFileSync(dbPath)
   let allBlogs=JSON.parse(dataFile)
   allBlogs.forEach(blog=>{
      if(blog.title==blogTitle) res.render("blog.ejs",{
        blog:blog
      })
   })
}


// addNewBlog
let addNewBlog = async (req, res) => {
    let fileData = fs.readFileSync(dbPath);
    allBlogs = JSON.parse(fileData);
    allBlogs.push({id :(allBlogs.length+1).toString(),title:req.body.title,content:req.body.content});
    fs.writeFileSync(dbPath, JSON.stringify(allBlogs));
    res.redirect('/getAllBlogs')
}


// updateBlog
const updateBlog=async(req,res)=>{
    console.log(req.body)
    let fileData=fs.readFileSync(dbPath)
    oldBlogs=JSON.parse(fileData)
    updatedBlogs = oldBlogs.map((blog) => { 
        return blog.id == req.body.blogId
        ? {id:req.body.blogId, title:req.body.newTitle, content:req.body.newContent}
        : blog
    })
    fs.writeFileSync(dbPath, JSON.stringify(updatedBlogs));
    res.redirect("/getAllBlogs")
}


// deleteBlog
const deleteBlog=(req,res)=>{
    console.log(req.body)
    let fileData=fs.readFileSync(dbPath)
    allBlogs=JSON.parse(fileData)
    let blogsAfterDelete = allBlogs.filter((blog) => {return blog.id != req.body.blogId});
    fs.writeFileSync(dbPath, JSON.stringify(blogsAfterDelete));
    res.redirect("/getAllBlogs")
}
module.exports={
    getAllBlogs,
    getBlogByTitle,
    addNewBlog,
    updateBlog,
    deleteBlog
}