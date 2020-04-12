// https://gitlab.com/profile/personal_access_tokens 
const PRIVATE_TOKEN = 'token-here'
const fetch = require('node-fetch')

// https://docs.gitlab.com/ee/api/snippets.html#update-snippet
async function putGitLab() {
  // https://gitlab.com/snippets/1963194
  await fetch("https://gitlab.com/api/v4/snippets/1965615", {
    method: "PUT",
    body: JSON.stringify({
      title: "my-title-here",
      content: 'hello-world',
    }),
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": PRIVATE_TOKEN,
    },
  });
}
