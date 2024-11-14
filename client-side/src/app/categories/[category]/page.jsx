const Page = async ({ params }) => {
    const category = (await params).category;
    return <div>Category: {category}</div>;
};

export default Page;
