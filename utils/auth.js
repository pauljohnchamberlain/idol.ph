import jwt from 'jsonwebtoken';

export function verifyAuth(req) {
	const authHeader = req.headers.get('authorization');
	if (!authHeader) return false;

	const token = authHeader.split(' ')[1];
	try {
		jwt.verify(token, process.env.JWT_SECRET);
		return true;
	} catch (error) {
		return false;
	}
}
