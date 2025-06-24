const jwt = require('jsonwebtoken');
const pool = require("../../db");
const bcrypt = require('bcryptjs');


async function registerUser(userData) {
    const client = await pool.connect();
    try {
        const checkResult = await client.query(
            `SELECT * FROM users WHERE user_email = $1`,
            [userData.email]
        );

        if (checkResult.rows.length > 0) {
            return { success: false, message: 'User already exists' };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        const insertResult = await client.query(
            `INSERT INTO users (user_name, user_email, user_password)
                VALUES ($1, $2, $3)
                RETURNING user_id, user_name, user_email`,
            [userData.name, userData.email, hashedPassword]
        );
        const user = insertResult.rows[0];

        const token = generateToken(user);

        return { success: true, message:'successfully registered',token:token ,user:user};

    } catch (err) {
        console.error('Error registering user:', err);
        return { success: false, message: 'Server error' };
    } finally {
        client.release();
    }
}

const generateToken = (user) =>{
    return jwt.sign(
        {
            user_id:user.user_id,
            user_name:user.user_name,
            user_email:user.user_email
        },
        process.env.JWT_SECRET,
        {expiresIn:'5h'}
    );
};


async function userLogin(userData) {
    const client = await pool.connect();
    try {
        const result = await client.query(
            `SELECT * FROM users WHERE user_email = $1`,
            [userData.email]
        );

        if (result.rows.length === 0) {
            return { success: false, message: 'Invalid credentials' };
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(userData.password, user.user_password);

        if (!isMatch) {
            return { success: false, message: 'Invalid credentials' };
        }

        const token = generateToken(user);
        if(token){
            return {success:true, message:'login successful',token:token,user:user}
        }


    } catch (err) {
        console.log('getting an error while user lgoin model: ',err.message);
        return {success:false, message:err.message};
    } finally {
        client.release();
    }
}


module.exports = {
    registerUser,
    userLogin
}