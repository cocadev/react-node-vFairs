/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	university: ['university'],
	student: ['student'],
	school: ['school'],
	representative: ['representative'],
	user: ['admin', 'university', 'student', 'school', 'representative'],
	guest: []
};

export default authRoles;
