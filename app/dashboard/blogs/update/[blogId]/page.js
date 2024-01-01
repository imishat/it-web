import UpdateBlog from '../../../../components/Dashboard/Blogs/UpdateBlog';
import Layout from '../../../../components/Layout/Layout';
import PrivateRoutes from "../../../../components/Routes/PrivateRoutes";

function Page() {
    return (
        <PrivateRoutes>
            <Layout>
            <UpdateBlog />
        </Layout>
        </PrivateRoutes>
    );
}

export default Page;