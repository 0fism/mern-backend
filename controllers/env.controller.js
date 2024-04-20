export const getUwConfig = async (req, res) => {
    const uwconfigCloudName = process.env.UWCONFIG_CLOUDNAME;
    try{
        res.status(200).json({ uwconfigCloudName });
        //from postman "uwconfigCloudName": "xxx"
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed to get the CloudName!" });
    }
}
