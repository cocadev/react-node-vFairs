import { authRoles } from 'app/auth';

const navigationConfig = [
	{
		id: 'admin-profile',
		title: 'Profile',
		auth: authRoles.admin,
		type: 'item',
		icon: 'account_circle',
		url: '/admin/profile'
	},
	{
		id: 'dashboard',
		title: 'Fairs Management',
		auth: authRoles.admin,
		type: 'item',
		icon: 'dashboard',
		url: '/admin/dashboard'
	},
	{
		id: 'hall',
		title: 'Hall Setup',
		auth: authRoles.admin,
		type: 'collapse',
		icon: 'build',
		children: [

		]
	},
	// {
	// 	id: 'admin-joins',
	// 	title: 'Participants',
	// 	auth: authRoles.admin,
	// 	type: 'item',
	// 	icon: 'account_box',
	// 	url: '/admin/participants'
	// },
	// {
	// 	id: 'admin-stats',
	// 	title: 'Reports and Statistics',
	// 	auth: authRoles.admin,
	// 	type: 'item',
	// 	icon: 'insert_chart',
	// 	url: '/admin/statistics'
	// },
	{
		id: 'info',
		title: 'University Information',
		auth: authRoles.university,
		type: 'item',
		icon: 'playlist_add_check',
		url: '/university/info'
	},
	{
		id: 'booth-layout',
		title: 'Booth Layout',
		auth: authRoles.university,
		type: 'item',
		icon: 'cached',
		url: '/university/layout'
	},
	{
		id: 'booth-colors',
		title: 'Booth Colors',
		auth: authRoles.university,
		type: 'item',
		icon: 'color_lens',
		url: '/university/colors'
	},
	{
		id: 'booth-graphics',
		title: 'Booth Graphics',
		auth: authRoles.university,
		type: 'item',
		icon: 'image',
		url: '/university/graphics'
	},
	{
		id: 'booth-content',
		title: 'Menu Setup',
		auth: authRoles.university,
		type: 'item',
		icon: 'link',
		url: '/university/links'
	},
	{
		id: 'materials',
		title: 'Documents / Video',
		auth: authRoles.university,
		type: 'item',
		icon: 'video_library',
		url: '/university/materials'
	},
	{
		id: 'publish',
		title: 'Review / Publish',
		auth: authRoles.university,
		type: 'item',
		icon: 'youtube_searched_for',
		url: '/university/publish'
	},
	// {
	// 	id: 'reports',
	// 	title: 'Statistics',
	// 	auth: authRoles.university,
	// 	type: 'item',
	// 	icon: 'bar_chart',
	// 	url: '/university/stats'
	// },
	{
		id: 'representative',
		title: 'Representatives',
		auth: authRoles.university,
		type: 'item',
		icon: 'account_box',
		url: '/university/users'
	},
	{
		id: 'channels',
		title: 'Open Channels',
		auth: authRoles.university,
		type: 'item',
		icon: 'chat',
		url: '/university/chat'
	},
	{
		id: 'schools',
		title: 'Schools List',
		auth: authRoles.university,
		type: 'item',
		icon: 'school',
		url: '/university/schools'
	},
	// {
	// 	id: 'fairs',
	// 	title: 'All Virtual Fairs',
	// 	auth: authRoles.university,
	// 	type: 'item',
	// 	icon: 'schedule',
	// 	url: '/university/vfairs'
	// },
	{
		id: 'student-profile',
		title: 'Profile',
		auth: authRoles.student,
		type: 'item',
		icon: 'playlist_add_check',
		url: '/student/profile'
	},
	{
		id: 'representative-profile',
		title: 'Profile',
		auth: authRoles.representative,
		type: 'item',
		icon: 'account_circle',
		url: '/representative/profile'
	},
	// {
	// 	id: 'representative-reports',
	// 	title: 'Statistics',
	// 	auth: authRoles.representative,
	// 	type: 'item',
	// 	icon: 'bar_chart',
	// 	url: '/representative/stats'
	// },
	{
		id: 'representative-chat',
		title: 'Open Channels',
		auth: authRoles.representative,
		type: 'item',
		icon: 'chat',
		url: '/representative/chat'
	},
	{
		id: 'school-profile',
		title: 'Profile',
		auth: authRoles.school,
		type: 'item',
		icon: 'account_circle',
		url: '/school/profile'
	},
	// {
	// 	id: 'school-fairs',
	// 	title: 'All Virtual Fairs',
	// 	auth: authRoles.school,
	// 	type: 'item',
	// 	icon: 'schedule',
	// 	url: '/school/vfairs'
	// },
	// {
	// 	id: 'school-participants',
	// 	title: 'Participants',
	// 	auth: authRoles.school,
	// 	type: 'item',
	// 	icon: 'chat',
	// 	url: '/school/participants'
	// },
	{
		type: 'divider',
		id: 'divider-2'
	},
	{
		id: 'login',
		title: 'Login',
		auth: authRoles.guest,
		type: 'item',
		icon: 'how_to_reg',
		url: '/login'
	},
	{
		id: 'register',
		title: 'Register',
		auth: authRoles.guest,
		type: 'item',
		icon: 'keyboard_hide',
		url: '/register'
	},
	{
		id: 'fair',
		title: 'Visit Fair',
		type: 'item',
		icon: 'arrow_forward_ios',
		url: '/fair/expo'
	},
	{
		id: 'logout',
		title: 'Logout',
		auth: authRoles.user,
		type: 'link',
		icon: 'cancel',
		url: './logout',
		target: '_self'
	}
];

export default navigationConfig;
