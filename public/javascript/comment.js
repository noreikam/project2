async function commentFormHandler(event) {
  event.preventDefault();

  // need input to have name of comment-body
  const comment_text = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if ((comment_text, post_id)) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// need comment form to have comment-form id
document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);