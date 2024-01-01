
import UpdateCategory from "../../../../components/Dashboard/Categories/UpdateCategory";
import Layout from "../../../../components/Layout/Layout";
import PrivateRoutes from "../../../../components/Routes/PrivateRoutes";

function Page() {

    return (
       <PrivateRoutes>
         <Layout>
            <UpdateCategory />
        </Layout>
       </PrivateRoutes>
    );
}

export default Page;