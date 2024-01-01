import Categories from "../../../app/components/Dashboard/Categories/Categories";
import Layout from "../../../app/components/Layout/Layout";
import PrivateRoutes from "../../../app/components/Routes/PrivateRoutes";

function Page() {
    return (
       <PrivateRoutes>
         <Layout>
            <Categories />
        </Layout>
       </PrivateRoutes>
    );
}

export default Page;