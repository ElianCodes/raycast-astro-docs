import { getData } from "../data/houston";

export const config = {
	runtime: "edge",
};

export default async function handler(request: Request) {
	const data = getData();
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}
