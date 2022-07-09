import { type Comment } from "@prisma/client";
import {
  json,
  redirect,
  type ActionFunction,
  type LoaderFunction,
} from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import invariant from "tiny-invariant";
import CommentCard from "~/components/CommentCard";
import PostCard from "~/components/PostCard";
import PostEdit from "~/components/PostEdit";
import { createComment, getPost } from "~/models/post.server";
import { requireUser } from "~/session.server";
import { PostWithComments } from "~/types";
import { useUser } from "~/utils";
import { validatePostContent } from "~/utils/strings";

type LoaderData = { post: PostWithComments };

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireUser(request);
  invariant(params.postId, "id is required");
  const post = await getPost(params.postId);
  if (post) {
    const data: LoaderData = { post };
    return json(data);
  }
  // TODO: Handle missing ones here
  return json({}, { status: 404 });
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    content: string | undefined;
  };
  fields?: {
    content: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request, params }) => {
  const user = await requireUser(request);
  const body = await request.formData();
  const content = body.get("content");

  if (typeof content !== "string" || params.postId == undefined) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    content: validatePostContent(content),
  };

  const fields = { content };
  if (!fieldErrors.content) {
    return badRequest({
      fieldErrors: { content: "You have to post something" },
      fields,
    });
  }

  await createComment(content, params.postId, user.address);
  return redirect(`/space/${params.id}/post/${params.postId}`);
};

export default function Post() {
  const { post } = useLoaderData<LoaderData>();
  const user = useUser();
  const fetcher = useFetcher();

  const [postContent, setPostContent] = useState<string>();

  function onChange(x: string) {
    setPostContent(x);
  }

  function onSubmit() {
    if (postContent) {
      fetcher.submit({ content: postContent }, { method: "post" });
    }
  }

  return (
    <div>
      <PostCard post={post} />
      <div className="grid grid-flow-col grid-cols-12 grid-rows-6 gap-x-8 gap-y-2 p-4">
        <div className="col-span-2 row-span-6 sm:col-span-1 ">
          <Jazzicon diameter={42} seed={jsNumberForAddress(user.address)} />
        </div>
        <div className="col-span-10 row-span-6 h-auto flex-grow">
          <PostEdit
            handleChange={(x: string) => onChange(x)}
            handleSubmit={() => onSubmit()}
          />
        </div>
      </div>
      <ul>
        {post.comments.map((comment: Comment) => (
          <li key={comment.id} className="border border-gray-100">
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
