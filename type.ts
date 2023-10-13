module NodeJS {
	export interface ProcessEnv {
		MONGODB_URI: string;
		NEXTAUTH_SECRET: string;
		GITHUB_ID: string;
		GITHUB_CLIENT_SECRET: string;
		MAILER_HOST: string;
		SENDIN_BLUE_KEY: string;
		MAILER_USER: string;
	}
}

interface SignupUser {
	name: string;
	email: string;
	password: string;
	mobile: string;
}

interface SignIn {
	email: string;
	password: string;
}
