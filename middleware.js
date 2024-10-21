import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
	console.log('🚀 MIDDLEWARE EXECUTED 🚀 Path:', request.nextUrl.pathname);

	const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
	console.log('🔑 Token retrieved:', token ? 'Yes' : 'No');

	const isAuth = !!token;
	const { pathname } = request.nextUrl;

	const isAuthPage = pathname.startsWith('/login');
	const isCreatorRoute = pathname.startsWith('/creator');
	const isBrandRoute = pathname.startsWith('/brand');
	const isAdminRoute = pathname.startsWith('/admin');

	console.log('Route checks:', { isAuthPage, isCreatorRoute, isBrandRoute, isAdminRoute });

	if (isAuthPage) {
		if (isAuth) {
			return redirectBasedOnRole(token.role, request.url);
		}
		return NextResponse.next();
	}

	if (!isAuth && (isCreatorRoute || isBrandRoute || isAdminRoute)) {
		let from = pathname;
		if (request.nextUrl.search) {
			from += request.nextUrl.search;
		}
		return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, request.url));
	}

	if (isAuth) {
		if (isCreatorRoute && token.role !== 'creator') {
			return redirectBasedOnRole(token.role, request.url);
		}
		if (isBrandRoute && token.role !== 'brand') {
			return redirectBasedOnRole(token.role, request.url);
		}
		if (isAdminRoute && token.role !== 'admin') {
			return redirectBasedOnRole(token.role, request.url);
		}
	}

	console.log('✅ MIDDLEWARE COMPLETED ✅');
	return NextResponse.next();
}

function redirectBasedOnRole(role, baseUrl) {
	switch (role) {
		case 'creator':
			return NextResponse.redirect(new URL('/creator/dashboard', baseUrl));
		case 'brand':
			return NextResponse.redirect(new URL('/brand/dashboard', baseUrl));
		case 'admin':
			return NextResponse.redirect(new URL('/admin/dashboard', baseUrl));
		default:
			return NextResponse.redirect(new URL('/login', baseUrl));
	}
}

export const config = {
	matcher: ['/login', '/creator/:path*', '/brand/:path*', '/admin/:path*'],
};
