import Blogs from "../../../app/components/Dashboard/Blogs/Blogs";
import Layout from "../../../app/components/Layout/Layout";
import PrivateRoutes from "../../../app/components/Routes/PrivateRoutes";
function Page() {
    return (
        <PrivateRoutes>
            <Layout>
            <Blogs />
        </Layout>
        </PrivateRoutes>
    );
}

export default Page;