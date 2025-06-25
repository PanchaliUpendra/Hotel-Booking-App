const pool = require("../../db");

async function insertBooking(bookingData) {
  const client = await pool.connect();
  try {
    const insertQuery = `
      INSERT INTO bookings (user_id, hotel_id, start_date, no_of_days, total_price)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING booking_id, user_id, hotel_id, start_date, no_of_days, total_price, created_at
    `;
    
    const values = [
      bookingData.user_id,
      bookingData.hotel_id,
      bookingData.start_date,
      bookingData.no_of_days,
      bookingData.total_price,
    ];

    const result = await client.query(insertQuery, values);
    return { success: true, booking: result.rows[0] ,message:'Hotel booked successfully.'};

  } catch (err) {
    console.error('Error inserting booking:', err);
    return { success: false, message: 'Failed to insert booking' };
  } finally {
    client.release();
  }
}

async function getAllBookings() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM bookings ORDER BY created_at DESC');
    return { success: true, bookings: result.rows };
  } catch (err) {
    console.error('Error fetching bookings:', err);
    return { success: false, message: 'Failed to fetch bookings' };
  } finally {
    client.release();
  }
}

async function getUserBookings(userId) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `SELECT * FROM bookings WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );
    return { success: true, bookings: result.rows };
  } catch (err) {
    console.error('Error fetching user bookings:', err);
    return { success: false, message: 'Failed to fetch bookings' };
  } finally {
    client.release();
  }
}


module.exports={
    insertBooking, getAllBookings , getUserBookings
}
