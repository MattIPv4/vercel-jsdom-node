import domPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const purify = domPurify(window);

export async function GET(request: Request) {
    console.log(purify.sanitize("<script>alert('xss')</script>"));
    return new Response('Hello world');
}
