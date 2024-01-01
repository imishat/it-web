import PrivateRoutes from "../../../../app/components/Routes/PrivateRoutes";
import CreateBlog from "../../../components/Dashboard/Blogs/CreateBlog";
import Layout from "../../../components/Layout/Layout";

function Page() {
  return (
    <PrivateRoutes>
      <Layout>
        <CreateBlog />
      </Layout>
    </PrivateRoutes>
  );
}

export default Page;
