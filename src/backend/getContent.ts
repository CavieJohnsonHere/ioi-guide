export default function (
  page: string,
  hashes: { FileName: string; Hash: string }[]
) {
  const hash = hashes.filter((v) => v.FileName == `${page}.md`);

  if (hash.length == 0) {
    return new Response("Content not found", { status: 404 });
  } else if (hash.length > 1) {
    return new Response("Multiple hashes found", { status: 500 });
  }

  return new Response(`${hash[0].Hash}`);
}
