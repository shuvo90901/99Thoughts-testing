"use server";

const BASE_URL = `https://www.99thoughts.com`;

export default async function getRecentBlogs() {
  const res = await fetch(
    "https://www.api.99thoughts.com/handleGetRecentBlogs"
    // { next: { revalidate: 60 } }
  );
  const data = await res.json();

  if (!res.ok) throw new Error("failed to fetch data");
  let AllItems: any = [];
  const blogs = data?.map((e: any) => {
    const ItemsLength = e?.items;
    for (let i = 0; i < ItemsLength?.length; i++) {
      AllItems.push(ItemsLength[i]);
    }
  });

  const convertedData = AllItems?.map((item: any) => {
    const plainObject = {
      BlogId: item?.BlogId?.S,
      CategoryName: item?.CategoryName?.S,
      comments: item?.comments?.L?.map((commentItem: any) => ({
        commentDate: commentItem?.M?.commentDate?.N,
        commentId: commentItem?.M?.commentId?.S,
        text: commentItem?.M?.text?.S,
        userName: commentItem?.M?.userName?.S,
        userProfile: {
          key: commentItem?.M?.userProfile?.M?.key?.S,
          type: commentItem?.M?.userProfile?.M?.type?.S,
        },
      })),
      content: item?.content?.S,
      publishedDate: item?.publishedDate?.S,
      title: item?.title?.S,
      image: {
        imageKey: item?.image?.M?.imageKey?.S,
        imageType: item?.image?.M?.imageType?.S,
      },
    };
    return plainObject;
  });

  const newBlogsArr = convertedData?.map((item: any) => ({
    ...item,
    imageUrl: `${BASE_URL}/${item?.image?.imageKey}`,
  }));
  return newBlogsArr;
}
