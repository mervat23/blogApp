let path = require("path");
let dbPath = path.join(__dirname, "../db.user.json");
let fs = require("fs");

//adNewUser
let addUser = async (req, res) => {
    let fileData = fs.readFileSync(dbPath);
    fileData = JSON.parse(fileData);
    fileData.push({id:req.body.id, name:req.body.name, salary:req.body.salary});
    fs.writeFileSync(dbPath, JSON.stringify(fileData));
    res.json(200,{message:"success"})
}


//getUserById 
const getUserById=async(req,res)=>{
    let id=req.params.id;
    let readFile=fs.readFileSync(dbPath)
    let data=JSON.parse(readFile)
    data.forEach(user=>{
         if(user.id==id)
        res.json(user)
    
    })
}

//getAllUsers
const getAllUsers=(req,res)=>{
     let dataFile=fs.readFileSync(dbPath)
     dataFile=JSON.parse(dataFile)
     res.status(200).json({message:"success",allUsers:dataFile})
    
}


//updateUsers
const updateUser=async(req,res)=>{
    let fileData=fs.readFileSync(dbPath)
    fileData=JSON.parse(fileData)
    fileData = fileData.map((user) => { 
        return user.id == req.body.id
         ?  {id : req.body.id, name: req.body.name, salary: req.body.salary} 
         : user
    })
    fs.writeFileSync(dbPath, JSON.stringify(fileData));
    res.status(200).json({message:"updated"})
}


//deleteUsers
const deleteUser=(req,res)=>{
    let fileData=fs.readFileSync(dbPath)
    fileData=JSON.parse(fileData)
    fileData= fileData.filter((user) => {return user.id != req.body.id});
    fs.writeFileSync(dbPath, JSON.stringify(fileData));
    res.json(200,{message:"deleted"})
}

module.exports = {
    addUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
}