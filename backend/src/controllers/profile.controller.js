const { checkProfileOnPOH, signData } = require("../utils/utils")

/**
 * 
 * Endpoint methods
 */

// TODO: Implement secure request with token
async function getProfile(req, res, _) {
    const { walletAddress } = req.params;
    try {
        const profile = await Profile.findOne({ "eth_address": walletAddress });
        console.log(profile)
        res.status(200).json(profile);
    } catch (error) {
        res.status(404);
    }
}

async function login(req, res, next) {

    const { walletAddress } =  { ...req.body }
    //const walletAddress = '0x245Bd6B5D8f494df8256Ae44737A1e5D59769aB4';

    try {
        const response = await checkProfileOnPOH(walletAddress);
        if (response) {
            let verify = await Profile.exists({
                eth_address: response.eth_address
              });
            
            // If it does not exist, save it as a new user
            if(!verify){
                let newUser = new Profile(response);
                await newUser.save();
            }

            const token = signData({
                walletAddress
            });
            res.status(200).json({
                token: token,
                ...response
            });
            next();
        }
    } catch (error) {
        console.log('ERROR: ', error);
        res.status(401).json({error: 'Unauthorized'});
        next();
    }
}

module.exports = {
    getProfile,
    login
};