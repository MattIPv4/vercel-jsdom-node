export async function GET(request: Request) {
    console.log(process.version);
    return new Response('Hello world');
}
